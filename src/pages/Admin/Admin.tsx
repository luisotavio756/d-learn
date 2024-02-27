import React from 'react';
import '../../utils/i18n';
import { Route, Routes } from 'react-router-dom';

import { AuthAdminProvider } from '../../contexts/authAdmin.context';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import AuthLayout from '../../routes/AuthLayout';

const Admin: React.FC = () => {
  return (
    <AuthAdminProvider>
      <Routes>
        <Route path="/login" element={<SignIn />} />

        <Route element={<AuthLayout />}>
          <Route path="/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthAdminProvider>
  );
};

export default Admin;
