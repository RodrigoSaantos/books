import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode
}

export function PublicRoute({ children }: Props) {
  const token = localStorage.getItem('auth');
  return token ? <Navigate to="/dashboard" /> : children;
}