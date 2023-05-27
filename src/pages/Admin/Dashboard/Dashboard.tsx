import React from 'react';

import { FiAward, FiLogOut, FiTablet } from 'react-icons/fi';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Sidebar, Content, Header, Main } from './Dashboard.styles';
import { Headline, Text } from '../../../components/UI';
import { useAuthAdmin } from '../../../hooks/useAdminAuth';

import History from '../History';
import Cards from '../Cards';
import { Flex } from '../../../components/Layout';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuthAdmin();
  const navigate = useNavigate();

  function handleLogout() {
    signOut();
    navigate('/admin/login');
  }

  return (
    <Container>
      <Sidebar>
        <img src="/shortcut-icon.svg" alt="Logo" />
        <ul>
          <li onClick={() => navigate('/admin/cards')} aria-hidden>
            <FiTablet />
            <Text type="light" weight="heavy">
              Cartas
            </Text>
          </li>
          <li onClick={() => navigate('/admin/history')} aria-hidden>
            <FiAward />
            <Text type="light" weight="heavy">
              Jogos
            </Text>
          </li>
          <li onClick={handleLogout} aria-hidden>
            <FiLogOut />
            <Text type="light" weight="heavy">
              Sair
            </Text>
          </li>
        </ul>
      </Sidebar>
      <Content>
        <Header alignItems="center" justifyContent="space-between">
          <Headline type="light">D-LEARN</Headline>
          <Flex gap={4}>
            <Text type="light">Bem vindo,</Text>
            <Text type="light" weight="heavy">
              {user.name}
            </Text>
          </Flex>
        </Header>
        <Main>
          <Routes>
            <Route path="/cards" element={<Cards />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Main>
      </Content>
    </Container>
  );
};

export default Dashboard;
