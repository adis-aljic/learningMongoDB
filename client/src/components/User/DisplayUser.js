import styles from './DisplayUser.module.css';
import Card from '../UI/Card';
import avatar from '../../images/profile_img_sample.png';

const DisplayUser = (props) => {
  console.log(props);
  return (
    <Card className={`${styles.displayUser} ${props.className}`}>
      <ul>
        {props.user.message ? (
          <p>{props.user.message}</p>
        ) : (
          <li className={styles.li}>
            <img src={avatar} alt="img" />
            {props.user.message ? props.user.message : ''}
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
