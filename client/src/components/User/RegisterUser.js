import React, { useRef } from 'react';
import Card from '../UI/Card';

import styles from '../Login/Login.module.css';
import Button from '../UI/Button';

const RegisterUser = (props) => {
  const inputUsername = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const inputFirstName = useRef();
  const inputLastName = useRef();

  const registerUserHandler = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;
    const email = inputEmail.current.value;
    const first_name = inputFirstName.current.value;
    const last_name = inputLastName.current.value;

    fetch('http://localhost:3500/api/registerUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
        email: `${email}`,
        first_name: `${first_name}`,
        last_name: `${last_name}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.isRegistered(data);
        console.log(data);
        inputUsername.current.value = '';
        inputFirstName.current.value = '';
        inputLastName.current.value = '';
        inputEmail.current.value = '';
        inputPassword.current.value = '';
      });
  };

  return (
    <Card className={[styles.input, styles.loginCard].join(' ')}>
      <form onSubmit={registerUserHandler}>
        <label id="first_name">First name</label>
        <input htmlFor="first_name" type="text" ref={inputFirstName} />
        <label id="last_name">Last Name</label>
        <input htmlFor="last_name" type="text" ref={inputLastName} />
        <label id="email">Email</label>
        <input htmlFor="email" type="text" ref={inputEmail} />
        <label id="username">Username</label>
        <input htmlFor="username" type="text" ref={inputUsername} />
        <label id="password">Password</label>
        <input htmlFor="password" type="text" ref={inputPassword} />
        <Card className={styles.buttonContainer}>
          <Button type="submit" title>
            Register User
          </Button>
        </Card>
      </form>
    </Card>
  );
};

export default RegisterUser;
