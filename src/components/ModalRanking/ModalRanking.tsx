import React, { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { FiRefreshCw } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';

import { useGame } from '../../hooks/useGame.hook';

import { ButtonGroup, Button, Text, Headline } from '../UI';
import Modal from '../Modal';

import { Container } from './ModalRanking.styles';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { Flex } from '../Layout';

interface ModalRankingProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalRanking: React.FC<ModalRankingProps> = ({ isOpen, toggleModal }) => {
  const { t } = useTranslation();
  const { players, gameEnd, restartGame } = useGame();
  const { isLogged } = usePlayerAuth();

  const orderedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players],
  );

  return (
    <Modal
      width="454px"
      isOpen={isOpen || gameEnd}
      showCloseButton={isOpen}
      toggleModal={toggleModal}
    >
      <Container>
        <div className="title">
          <RiNumbersFill size={28} />
          <h2>{t("game.modals.ranking.title")}</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: 40 }}>#</th>
              <th>{t("game.modals.ranking.name")}</th>
              <th style={{ width: 80 }}>{t("game.modals.ranking.score")}</th>
            </tr>
          </thead>
          <tbody>
            {orderedPlayers.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  {['🥇', '🥈', '🥉', ''][index]}
                  {item.name}
                </td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Flex
          shouldShow={gameEnd}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="play-again"
          gap={8}
        >
          <Headline>{t("game.modals.ranking.thanks")}</Headline>
          {isLogged && (
            <Text align="center" type="success">
              {t("game.modals.ranking.logWarning")}
            </Text>
          )}
          <Text>
            {t("game.modals.ranking.feedback")}{' '}
            <a
              href="https://forms.gle/JzX6VLx3et8jwcgT7"
              target="_blank"
              rel="noreferrer"
            >
              {t("game.modals.ranking.here")}
            </a>
          </Text>
          <ButtonGroup gap={8}>
            <Button
              marginTop={1}
              variant="blue"
              size="sm"
              onClick={() => restartGame('hard')}
            >
              <FiRefreshCw /> {t("game.modals.ranking.restart")}
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </Modal>
  );
};

export default ModalRanking;
