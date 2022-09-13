import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';

export const ProtectedRoute = ({ children }: any) => {
  if (!auth.currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};
