import FindUserForm from './components/SearchUser/SearchUser';

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
      <h1>Find user</h1>
      <FindUserForm onFoundUser={onFoundUserHandler} />
      {user && <DisplayUser user={user}></DisplayUser>}
    </>
  );
}

export default App;
