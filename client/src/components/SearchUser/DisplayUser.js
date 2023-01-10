const DisplayUser = (props) => {
  return (
    <>
      <h1>Results</h1>
      <div>First name : {props.user.first_name}</div>
      <div>Last name : {props.user.last_name}</div>
      <div>Username : {props.user.username}</div>
      <div>Email : {props.user.email}</div>
    </>
  );
};

export default DisplayUser;
