import styles from './DisplayUser.module.css';
import Card from '../UI/Card';

const DisplayUser = (props) => {
  return (
    <Card className={styles.displayUser}>
      <ul>
        {props.user && props.user.message ? (
          <p>{props.user.message}</p>
        ) : (
          <li className={styles.li}>
            <img src="./profile_img_sample.jpg" alt="img" />
            <p>First name : {props.user.first_name}</p>
            <p>Last name : {props.user.last_name}</p>
            <p>Username : {props.user.username}</p>
            <p>Email : {props.user.email}</p>
          </li>
        )}
      </ul>
    </Card>
  );
};

export default DisplayUser;
