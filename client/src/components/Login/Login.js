import React, { useState } from 'react';

const LoginUser = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUserSubmitHandler = (e) => {
    e.preventDefault();

    const savedUsername = username;
    console.log(savedUsername);

    const savedPassword = password;
    console.log(savedPassword);

    fetch('http://localhost:3500/api/loginUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${savedUsername}`,
        password: `${savedPassword}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.onLoggedUser(data);
        console.log(data);
      });
    setUsername('');
    setPassword('');
  };

  const usernameInputHanlder = (e) => {
    setUsername(e.target.value);
  };
  const passwordInputHanlder = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={loginUserSubmitHandler}>
        <input
          type="text"
          onChange={usernameInputHanlder}
          value={username}></input>
        <input
          type="text"
          onChange={passwordInputHanlder}
          value={password}></input>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginUser;
