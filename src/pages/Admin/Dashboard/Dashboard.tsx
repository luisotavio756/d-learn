import React from 'react';
import { useTranslation } from 'react-i18next';

import { FiAward, FiLogOut, FiTablet } from 'react-icons/fi';
import { TbCards } from 'react-icons/tb';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Sidebar, Content, Header, Main } from './Dashboard.styles';
import { Headline, Text, LanguageSelector } from '../../../components/UI';
import { useAuthAdmin } from '../../../hooks/useAdminAuth';

import History from '../History';
import Cards from '../Cards';
import Suggestions from '../Suggestions';
import { Flex } from '../../../components/Layout';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

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
              {t('admin.dashboard.cards')}
            </Text>
          </li>
          <li onClick={() => navigate('/admin/suggestions')} aria-hidden>
            <TbCards />
            <Text type="light" weight="heavy">
              {t('admin.dashboard.suggestions')}
            </Text>
          </li>
          <li onClick={() => navigate('/admin/history')} aria-hidden>
            <FiAward />
            <Text type="light" weight="heavy">
              {t('admin.dashboard.games')}
            </Text>
          </li>
          <li onClick={handleLogout} aria-hidden>
            <FiLogOut />
            <Text type="light" weight="heavy">
              {t('admin.dashboard.exit')}
            </Text>
          </li>
        </ul>
      </Sidebar>
      <Content>
        <Header alignItems="center" justifyContent="space-between">
          <Headline type="light">D-LEARN</Headline>
          <Flex gap={10}>
            <Text type="light">
              {t('admin.dashboard.welcome')}
              <Text type="light" weight="heavy">
                {user.name}
              </Text>
            </Text>
            <LanguageSelector size="sm" openDirection="left" />
          </Flex>
        </Header>
        <Main>
          <Routes>
            <Route path="/cards" element={<Cards />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Main>
      </Content>
    </Container>
  );
};

export default Dashboard;
