import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Login.module.css';

const LoginUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const loginUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return;
    }

    fetch('http://localhost:3500/api/loginUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${enteredUsername}`,
        password: `${enteredPassword}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          props.onLoggedUser(data);
        }
      });
    setEnteredUsername('');
    setEnteredPassword('');
  };

  const usernameInputHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  return (
    <>
      <Card className={[styles.input, styles.loginCard].join(' ')}>
        <form onSubmit={loginUserHandler}>
          <label id="username">Username</label>
          <input
            type="text"
            value={enteredUsername}
            htmlFor="username"
            onChange={usernameInputHandler}></input>
          <label id="password">Password</label>
          <input
            type="text"
            htmlFor="password"
            value={enteredPassword}
            onChange={passwordInputHandler}></input>
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
