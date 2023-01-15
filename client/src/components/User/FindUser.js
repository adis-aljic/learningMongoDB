import React, { useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Login/Login.module.css';

const FindUser = (props) => {
  const inputUsername = useRef();

  const findUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;

    fetch('http://localhost:3500/api/findUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${username}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.onFoundUser(data);
        inputUsername.current.value = '';
      });
  };

  return (
    <Card className={[styles.input, styles.loginCard].join(' ')}>
      <form onSubmit={findUserHandler}>
        <label id="username">Username</label>
        <input type="text" ref={inputUsername} htmlFor="username"></input>

        <Card className={styles.buttonContainer}>
          <Button type="submit">Find User</Button>
        </Card>
      </form>
    </Card>
  );
};

export default FindUser;
