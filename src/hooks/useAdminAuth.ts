import { useContext } from 'react';
import {
  AuthAdminContext,
  AuthAdminContextData,
} from '../contexts/authAdmin.context';

function useAuthAdmin(): AuthAdminContextData {
  const context = useContext(AuthAdminContext);

  if (!context) {
    throw new Error('useAuthAdmin muste be user within as AuthProvider');
  }

  return context;
}

export { useAuthAdmin };
