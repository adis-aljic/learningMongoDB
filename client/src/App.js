import React, { useEffect, useState } from 'react';

import LoginUser from './components/Login/Login';
import Header from './components/MainElements/Header';
import Footer from './components/MainElements/Footer';
import FindUser from './components/User/FindUser';
import DisplayUser from './components/User/DisplayUser';
import FindAllUsers from './components/User/FindAllUsers';
import AuthContext from './components/Store/Auth-context';
import RegisterUser from './components/User/RegisterUser';
import Display from './components/User/DisplayMsg';
import UpdateUser from './components/User/UpdateUser';
import Delete from './components/User/DeleteUser';

import styles from './components/UI/Card.module.css';

function App() {
  let [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistred] = useState();

  useEffect(() => {
    const storedAuth = localStorage.getItem('isLogged');
    if (storedAuth) {
      setIsLogged(true);
      setUser(JSON.parse(storedAuth));
    }
  }, []);

  const isLoggedHandler = (foundUser) => {
    setUser(foundUser);
    localStorage.setItem('isLogged', `${JSON.stringify(foundUser)}`);
    setIsLogged(true);
  };

  const isLogoutHandler = () => {
    localStorage.removeItem('isLogged');
    setIsLogged(false);
  };

  const isRegisteredUserHandler = (registerdUser) => {
    setIsRegistred(registerdUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        onLogout: isLogoutHandler,
      }}>
      <Header />
      <main>
        {!isLogged && <LoginUser onLogin={isLoggedHandler} />}
        {/* {isLogged ? <DisplayUser user={user} /> : ''} */}
        {isLogged ? (
          <>
            {/* <UpdateUser isUpdated={isRegisteredUserHandler}></UpdateUser>
              {isRegistered ? <Display isRegistered={isRegistered} /> : ''} */}
            {/* <RegisterUser
                isRegistered={isRegisteredUserHandler}></RegisterUser>
              {isRegistered ? <Display isRegistered={isRegistered} /> : ''} */}
            {/* <Delete onDelete={isRegisteredUserHandler} />
              {isRegistered ? <Display isRegistered={isRegistered} /> : ''} */}
            {/* <FindUser onFoundUser={isLoggedHandler} />
              <DisplayUser user={user}></DisplayUser> */}
            <FindAllUsers onFoundUser={isLoggedHandler} />;
            {user.length > 1 &&
              user.map((user) => {
                return (
                  <DisplayUser className={styles.findAllCards} user={user} />
                );
              })}
          </>
        ) : (
          ''
        )}
      </main>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
