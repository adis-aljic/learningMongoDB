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
import DisplayProfile from './components/User/DisplayProfile';

import styles from './components/UI/Card.module.css';

function App() {
  let [user, setUser] = useState();
  let [profile, setProfile] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistred] = useState();
  const [show, setShow] = useState('');
  useEffect(() => {
    const storedAuth = localStorage.getItem('isLogged');
    if (storedAuth) {
      setIsLogged(true);
      setUser(JSON.parse(storedAuth));
      setProfile(JSON.parse(storedAuth));
    }
  }, []);

  const isLoggedHandler = (foundUser) => {
    setUser(foundUser);
    setIsLogged(foundUser);
    localStorage.setItem('isLogged', `${JSON.stringify(foundUser)}`);
  };

  const isLogoutHandler = () => {
    localStorage.removeItem('isLogged');
    setIsLogged(false);
    setProfile(null);
  };

  const isRegisteredUserHandler = (registerdUser) => {
    setIsRegistred(registerdUser);
  };

  const isShownRegistredHandler = () => {
    setShow('Registred');
  };
  const isShownFindAllUsersHandler = () => {
    setShow('FindAll');
  };
  const isShownDeleteUserHanlder = () => {
    setShow('Delete');
  };
  const isShownProfileHandler = () => {
    setShow('Profile');
  };
  const isShownUpdateUserHandler = () => {
    setShow('Update');
  };
  const isShownFindUserHandler = () => {
    setShow('Find');
  };
  console.log(show);
  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        onLogout: isLogoutHandler,
        isShownRegistred: isShownRegistredHandler,
        isShownFindAllUsers: isShownFindAllUsersHandler,
        isShownDeleteUser: isShownDeleteUserHanlder,
        isShownFindUser: isShownFindUserHandler,
        isShownUpdateUser: isShownUpdateUserHandler,
        isShownProfile: isShownProfileHandler,
      }}>
      <Header />
      <main
        className={
          !isLogged && show === 'Registred' ? ` ${styles.registred}` : ``
        }>
        {show && show === 'Registred' && (
          <RegisterUser isRegistered={isRegisteredUserHandler} />
        )}
        {show === 'Registred' ? <Display isRegistered={isRegistered} /> : ''}

        {!isLogged && <LoginUser onLogin={isLoggedHandler} />}

        {isLogged ? (
          <>
            {show === 'Profile' ? <DisplayProfile profile={profile} /> : ''}

            {show === 'Update' && (
              <UpdateUser isUpdated={isRegisteredUserHandler} />
            )}
            {show === 'Update' && isRegistered ? (
              <Display isRegistered={isRegistered} />
            ) : (
              ''
            )}

            {show === 'Delete' && <Delete onDelete={isRegisteredUserHandler} />}
            {show === 'Delete' && isRegistered ? (
              <Display isRegistered={isRegistered} />
            ) : (
              ''
            )}

            {show === 'Find' && <FindUser onFoundUser={isLoggedHandler} />}
            {show === 'Find' && <DisplayUser user={user}></DisplayUser>}

            {show === 'FindAll' && (
              <FindAllUsers onFoundUser={isLoggedHandler} />
            )}
            {user.length > 1 &&
              user.map((user) => {
                return (
                  show === 'FindAll' && (
                    <DisplayUser className={styles.findAllCards} user={user} />
                  )
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
