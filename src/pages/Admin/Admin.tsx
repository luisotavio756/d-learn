import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthAdminProvider } from '../../contexts/authAdmin.context';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

const Admin: React.FC = () => {
  return (
    <AuthAdminProvider>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </AuthAdminProvider>
  );
};

export default Admin;
