import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Login.module.css';
import Modal from '../UI/Modal';
import validatePassword from './passwordValidation';

const LoginUser = (props) => {
  const inputUsername = useRef();
  const inputPassword = useRef();

  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState();

  const loginUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;

    if (!validatePassword(password)) {
      setError({
        title: 'Invalid input',
        message: ` 
            Please input password following parameters : min 8 characters and with min one capital letter, one number and one special character ,
      `,
      });
      return;
    }
    if (username < 4) {
      setError({
        title: 'Invalid input',
        message: 'Username must contain minimum 4 characters',
      });
      setFormIsValid(false);
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
    e.target.value.length > 0 && e.target.value.length < 8
      ? setFormIsValid(false)
      : setFormIsValid(true);
  };
  const usernameHandler = (e) => {
    e.target.value.length > 0 && e.target.value.length < 4
      ? setFormIsValid(false)
      : setFormIsValid(true);
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
            className={!formIsValid ? ` ${styles.invalidInput}` : ''}></input>
          <label id="password">Password</label>
          <input
            type="text"
            htmlFor="password"
            ref={inputPassword}
            onChange={passwordHanlder}
            className={!formIsValid ? ` ${styles.invalidInput}` : ''}></input>
          <Card className={styles.buttonContainer}>
            <Button type="submit" disabled={!formIsValid}>
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
