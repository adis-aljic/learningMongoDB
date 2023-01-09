import FindUserForm from './components/SearchUser/SearchUser';
import DisplayUser from './components/SearchUser/DisplayUser';
function App() {
  const onFoundUserHandler = (foundUser) => {
    const foundUserData = { ...foundUser };
    console.log(foundUserData);
    return foundUserData;
  };

  return (
    <>
      <h1>Find user</h1>
      <FindUserForm />
      <DisplayUser onFoundUser={onFoundUserHandler}></DisplayUser>
    </>
  );
}

export default App;
