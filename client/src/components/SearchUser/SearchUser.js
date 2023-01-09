import React, { useState } from 'react';

const FindUserForm = (props) => {
  const [username, setUsername] = useState('');

  const findUserSubmitHandler = (e) => {
    e.preventDefault();

    const savedUsername = username;
    console.log(savedUsername);

    fetch('http://localhost:3500/api/findUser', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: `${savedUsername}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.onFoundUserHandler(data);
      });
    setUsername('');
  };

  const usernameInputHanlder = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <form onSubmit={findUserSubmitHandler}>
        <input
          type="text"
          onChange={usernameInputHanlder}
          value={username}></input>

        <button type="submit">Find User</button>
      </form>
    </>
  );
};

export default FindUserForm;
