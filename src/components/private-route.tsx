import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode
}

export function PrivateRoute({ children }: Props) {
  const token = localStorage.getItem('auth');
  return token ? children : <Navigate to="/sign-in" />;
}