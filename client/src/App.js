import FindUserForm from './components/SearchUser/SearchUser';
import FindAllUser from './components/SearchUser/findAllUsers';
import DisplayUser from './components/SearchUser/DisplayUser';
import Form from './components/UI/Form.js';
import './App.css';
import Results from './components/UI/Results';
import { useState } from 'react';
import LoginUser from './components/Login/Login';
function App() {
  const [user, setUser] = useState();
  const onFoundUserHandler = (foundUser) => {
    setUser(foundUser);
  };
  console.log(user);

  let resultFindUser = '';
  if (user) {
    resultFindUser = user.message && <p>no user</p>;
  }

  if (user && !user.message) {
    resultFindUser = <DisplayUser user={user}></DisplayUser>;
  }

  return (
    <>
      {user ? (
        <Form>
          <h1>Find user</h1>
          <FindUserForm onFoundUser={onFoundUserHandler} />
          <FindAllUser onFoundUser={onFoundUserHandler} />
        </Form>
      ) : (
        <Form>
          <LoginUser onLoggedUser={onFoundUserHandler}></LoginUser>
        </Form>
      )}
      {user && user.length > 1 ? (
        user.map(
          (singleUser) =>
            (resultFindUser = (
              <Results>
                <DisplayUser user={singleUser}></DisplayUser>
              </Results>
            ))
        )
      ) : (
        <Results>{resultFindUser}</Results>
      )}
      )
    </>
  );
}

export default App;
