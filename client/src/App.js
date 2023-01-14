import React, { useState } from 'react';

import LoginUser from './components/Login/Login';
import Header from './components/MainElements/Header';
import Footer from './components/MainElements/Footer';
import FindUser from './components/User/FindUser';
import DisplayUser from './components/User/DisplayUser';
import FindAllUsers from './components/User/FindAllUsers';

function App() {
  const [user, setUser] = useState();
  const onFoundUserHandler = (foundUser) => {
    setUser(foundUser);
  };
  console.log(user);

  return (
    <>
      <Header />
      {user ? (
        <>
          <FindUser onFoundUser={onFoundUserHandler} />
          {/* <FindAllUsers onFoundUser={onFoundUserHandler} /> */}
          <DisplayUser user={user} />
        </>
      ) : (
        <>
          <LoginUser onLoggedUser={onFoundUserHandler}></LoginUser>
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
