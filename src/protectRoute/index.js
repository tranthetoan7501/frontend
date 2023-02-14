import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
  const { currentUser } = useContext(AuthContext);
  //console.log(currentUser);
  var userInfo =
    JSON.parse(localStorage.getItem('user')) || currentUser || null;
  return userInfo;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
