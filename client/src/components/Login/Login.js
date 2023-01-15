import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Login.module.css';
import ErrorModal from '../UI/ErrorModal';
import validatePassword from './passwordValidation';

const LoginUser = (props) => {
  const inputUsername = useRef();
  const inputPassword = useRef();

  const [error, setError] = useState();

  const loginUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;
    if (username.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please input username',
      });
      return;
    }
    if (password.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please input password',
      });
      return;
    }

    if (!validatePassword(password)) {
      setError({
        title: 'Invalid input',
        message:
          'Please input password following parameters : min 8 characters and with min one capital letter, one number and one special character ',
      });
      return;
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
        if (data.status) {
          props.onLoggedUser(data);
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={[styles.input, styles.loginCard].join(' ')}>
        <form onSubmit={loginUserHandler}>
          <label id="username">Username</label>
          <input type="text" htmlFor="username" ref={inputUsername}></input>
          <label id="password">Password</label>
          <input type="text" htmlFor="password" ref={inputPassword}></input>
          <Card className={styles.buttonContainer}>
            <Button type="submit">Login</Button>
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
