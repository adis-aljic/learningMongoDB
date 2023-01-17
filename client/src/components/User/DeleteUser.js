import React, { useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Login/Login.module.css';

const Delete = (props) => {
  const inputUsername = useRef();

  const deleteUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;

    fetch('http://localhost:3500/api/deleteUser', {
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
        console.log(data);
        props.onDelete(data);
        inputUsername.current.value = '';
      });
  };

  return (
    <Card className={[styles.input, styles.loginCard].join(' ')}>
      <form onSubmit={deleteUserHandler}>
        <label id="username">Username</label>
        <input
          type="text"
          required={true}
          ref={inputUsername}
          htmlFor="username"></input>

        <Card className={styles.buttonContainer}>
          <Button type="submit">Delete User</Button>
        </Card>
      </form>
    </Card>
  );
};

export default Delete;
