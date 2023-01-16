import React, { useEffect, useState } from 'react';

import LoginUser from './components/Login/Login';
import Header from './components/MainElements/Header';
import Footer from './components/MainElements/Footer';
import FindUser from './components/User/FindUser';
import DisplayUser from './components/User/DisplayUser';
import FindAllUsers from './components/User/FindAllUsers';
import AuthContext from './components/Store/Auth-context';

function App() {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isLogged');
    if (storedAuth) {
      setIsLogged(true);
      setUser(storedAuth);
    }
  }, []);

  const isLoggedHandler = (foundUser) => {
    setUser(foundUser);
    localStorage.setItem('isLogged', `${foundUser}`);
    setIsLogged(true);
  };

  const isLogoutHandler = () => {
    localStorage.removeItem('isLogged');
    setIsLogged(false);
  };
  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        onLogout: isLogoutHandler,
      }}>
      <Header />
      <main>
        {!isLogged && <LoginUser onLogin={isLoggedHandler} />}
        {isLogged && (
          <>
            <FindUser onFoundUser={isLoggedHandler} />
            <DisplayUser user={user} />
          </>
        )}
      </main>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
