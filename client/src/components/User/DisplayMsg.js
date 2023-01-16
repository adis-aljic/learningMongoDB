import Card from '../UI/Card';

import styles from './DisplayUser.module.css';

const Display = (props) => {
  console.log(props);
  return (
    <>
      <Card className={styles.displayUser}>
        <ul>
          {props.isRegistered.message ? (
            <p>{props.isRegistered.message}</p>
          ) : (
            <li className={styles.li}>
              <p>Congratulation</p>
              <br></br>
              <p>First name : {props.isRegistered.first_name}</p>
              <p>Last name : {props.isRegistered.last_name}</p>
              <p>Username : {props.isRegistered.username}</p>
              <p>Email : {props.isRegistered.email}</p>
            </li>
          )}
        </ul>
      </Card>
    </>
  );
};

export default Display;
