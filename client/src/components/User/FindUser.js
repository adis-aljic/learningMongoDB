import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Login/Login.module.css';

const FindUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');

  const findUserHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:3500/api/findUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${enteredUsername}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.onFoundUser(data);
      });
    setEnteredUsername('');
  };
  const usernameInputHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  return (
    <Card className={[styles.input, styles.loginCard].join(' ')}>
      <form onSubmit={findUserHandler}>
        <label id="username">Username</label>
        <input
          type="text"
          value={enteredUsername}
          htmlFor="username"
          onChange={usernameInputHandler}></input>

        <Card className={styles.buttonContainer}>
          <Button type="submit">Find User</Button>
        </Card>
      </form>
    </Card>
  );
};

export default FindUser;
