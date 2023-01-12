import React from 'react';

const FindAllUser = (props) => {
  const findAllUsersHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:3500/api/findAll', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.onFoundUser(data);
      });
  };

  return (
    <>
      <form onSubmit={findAllUsersHandler}>
        <button>Find all users</button>
      </form>
    </>
  );
};

export default FindAllUser;
