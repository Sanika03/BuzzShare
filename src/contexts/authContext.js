import { createContext, useContext, useState } from 'react';
import { signUpService, loginService } from "../services/authServices"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('loginItems'));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);
  const [ users, setUsers ] = useState([]);

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

  const signupHandler = async (signUpData) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(signUpData);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          'loginItems',
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrUser(createdUser);
        setToken(encodedToken);
        setUsers((prevUsers) => [...prevUsers, createdUser]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, loginHandler, currUser, setCurrUser, signupHandler, logoutHandler, users, setUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };