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

  console.log(isRegistered);
  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        onLogout: isLogoutHandler,
      }}>
      <main>
        <Header />
        <section>
          {!isLogged && <LoginUser onLogin={isLoggedHandler} />}
          {/* {isLogged ? <DisplayUser user={user} /> : ''} */}
          {isLogged ? (
            <>
              <RegisterUser
                isRegistered={isRegisteredUserHandler}></RegisterUser>
              {isRegistered ? <Display isRegistered={isRegistered} /> : ''}
            </>
          ) : (
            ''
          )}
        </section>

        <Footer />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
