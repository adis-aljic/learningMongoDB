const DisplayUser = (props) => {
  return (
    <>
      <div>first name : {props.user.first_name}</div>
      <div>{props.user.username}</div>
    </>
  );
};

export default DisplayUser;
