import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (email, password) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/Login`,
      {
        email: email,
        password: password,
      }
    );
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    //await axios.post('/auth/logout');
    setCurrentUser(null);
  };
  const notify = (content) => {
    toast(content);
  };

  useEffect(() => {
    //console.log(currentUser);
    if (currentUser && currentUser.data) {
      localStorage.setItem('user', JSON.stringify(currentUser.data.user));
      localStorage.setItem('token', JSON.stringify(currentUser.data.token));
    }

    //let user = JSON.parse(localStorage.getItem('user'));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, notify }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
