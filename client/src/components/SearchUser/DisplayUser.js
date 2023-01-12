const DisplayUser = (props) => {
  return (
    <>
      <div>
        <img src="" alt="profile image"></img>
      </div>
      <div>First name : {props.user.first_name}</div>
      <div>Last name : {props.user.last_name}</div>
      <div>Username : {props.user.username}</div>
      <div>Email : {props.user.email}</div>
    </>
  );
};

export default DisplayUser;
