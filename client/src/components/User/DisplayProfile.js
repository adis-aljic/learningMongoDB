import styles from './DisplayUser.module.css';
import Card from '../UI/Card';
import avatar from '../../images/profile_img_sample.png';

const DisplayProfile = (props) => {
  console.log(props);
  return (
    <Card className={`${styles.displayUser} ${props.className}`}>
      <ul>
        {props.profile.message ? (
          <p>{props.profile.message}</p>
        ) : (
          <li className={styles.li}>
            <img src={avatar} alt="img" />
            {props.profile.message ? props.profile.message : ''}
            <p>First name : {props.profile.first_name}</p>
            <p>Last name : {props.profile.last_name}</p>
            <p>Username : {props.profile.username}</p>
            <p>Email : {props.profile.email}</p>
          </li>
        )}
      </ul>
    </Card>
  );
};

export default DisplayProfile;
