import Card from '../UI/Card';

import styles from './DisplayUser.module.css';

const Display = (props) => {
  return (
    <>
      {props.isRegistered ? (
        <Card className={styles.displayUser}>
          <ul>
            <li className={styles.li}>
              <br></br>
              <p>{props.isRegistered.message}</p>
              <p>First name : {props.isRegistered.first_name}</p>
              <p>Last name : {props.isRegistered.last_name}</p>
              <p>Username : {props.isRegistered.username}</p>
              <p>Email : {props.isRegistered.email}</p>
            </li>
          </ul>
        </Card>
      ) : (
        ''
      )}
    </>
  );
};

export default Display;
