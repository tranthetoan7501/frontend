import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  var userInfo = JSON.parse(localStorage.getItem('user')) || null;
  return userInfo;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
