import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../Login/Login.module.css';

const FindAllUsers = (props) => {
  const findUsersHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:3500/api/findAll', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.key = data._id;
        props.onFoundUser(data);
      });
  };

  return (
    <Card className={[styles.input, styles.loginCard].join(' ')}>
      <form onSubmit={findUsersHandler}>
        <Card className={styles.buttonContainer}>
          <Button type="submit">Find Users</Button>
        </Card>
      </form>
    </Card>
  );
};

export default FindAllUsers;
