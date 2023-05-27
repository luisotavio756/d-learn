import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAuthAdmin } from '../hooks/useAdminAuth';

const AuthLayout = () => {
  const { user } = useAuthAdmin();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
