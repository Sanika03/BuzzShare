import { Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  
  return token ? (
    children
  ) : (
    <Navigate to={'/login'} replace />
  );
};
