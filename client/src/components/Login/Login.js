import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Login.module.css';
import Modal from '../UI/Modal';
import validatePassword from './passwordValidation';

const LoginUser = (props) => {
  const inputUsername = useRef();
  const inputPassword = useRef();

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState();

  const loginUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;

    if (!validatePassword(password)) {
      setPasswordIsValid(true);
      setError({
        title: 'Invalid input',
        message: ` 
            Please input password following parameters : min 8 characters and with min one capital letter, one number and one special character ,
      `,
      });
      return;
    }
    if (username.length < 4) {
      setError({
        title: 'Invalid input',
        message: 'Username must contain minimum 4 characters',
      });
      setUsernameIsValid(true);
    }

    fetch('http://localhost:3500/api/loginUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          props.onLogin(data);
          inputUsername.current.value = '';
          inputPassword.current.value = '';
        } else {
          setError({
            title: 'Failed login',
            message: 'User not found. Please check username and password',
          });
        }
      });
  };
  const passwordHanlder = (e) => {
    e.target.value.length < 8
      ? setPasswordIsValid(false)
      : setPasswordIsValid(true);
  };
  const usernameHandler = (e) => {
    e.target.value.length < 4
      ? setUsernameIsValid(false)
      : setUsernameIsValid(true);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={[styles.input, styles.loginCard].join(' ')}>
        <form onSubmit={loginUserHandler}>
          <label id="username">Username</label>
          <input
            type="text"
            htmlFor="username"
            ref={inputUsername}
            onChange={usernameHandler}
            className={
              !usernameIsValid
                ? ` ${styles.invalidInput}`
                : `${styles.validInput}`
            }></input>
          <label id="password">Password</label>
          <input
            type="text"
            htmlFor="password"
            ref={inputPassword}
            onChange={passwordHanlder}
            className={
              !passwordIsValid
                ? ` ${styles.invalidInput}`
                : `${styles.validInput}`
            }></input>
          <Card className={styles.buttonContainer}>
            <Button
              type="submit"
              disabled={!passwordIsValid || !usernameIsValid}>
              Login
            </Button>
          </Card>
        </form>
        <Card
          className={[styles.buttonContainer, styles.registerButton].join(' ')}>
          <p>Still don't have acount ?</p>
          <Button type="submit">Register</Button>
        </Card>
      </Card>
    </>
  );
};
export default LoginUser;
