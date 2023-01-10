import FindUserForm from './components/SearchUser/SearchUser';
import './App.css';
import Form from './components/UI/Form.js';
import Results from './components/UI/Results';
import DisplayUser from './components/SearchUser/DisplayUser';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState();
  const onFoundUserHandler = (foundUser) => {
    setUser(foundUser);
  };
  console.log(user);
  return (
    <>
      <Form>
        <h1>Find user</h1>
        <FindUserForm onFoundUser={onFoundUserHandler} />
      </Form>
      <Results>{user && <DisplayUser user={user}></DisplayUser>}</Results>
    </>
  );
}

export default App;
