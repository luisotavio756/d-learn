import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthAdminProvider } from '../../contexts/authAdmin.context';
import SignIn from './SignIn';

const Admin: React.FC = () => {
  return (
    <AuthAdminProvider>
      <Routes>
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </AuthAdminProvider>
  );
};

export default Admin;
