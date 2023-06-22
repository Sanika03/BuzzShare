import { createContext, useContext, useState } from 'react';
import { signUpService, loginService } from "../services/authServices"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('loginItems'));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const loginHandler = async (loginData) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await loginService(loginData);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          'loginItems',
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setCurrUser(foundUser);
        setToken(encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('loginItems');
    setToken(null);
    setCurrUser(null);
  };

  const signupHandler = async (userName, password, name) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService({ userName, password, name });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          'loginItems',
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrUser(createdUser);
        setToken(encodedToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, currUser, signupHandler, logoutHandler, setCurrUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };