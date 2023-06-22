import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  
  return token ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};
