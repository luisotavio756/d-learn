import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FiEye, FiTrash } from 'react-icons/fi';

import ModalEditCard from '../../../components/ModalEditCard/ModalEditCard';
import {
  Button,
  ButtonGroup,
  Headline,
  Select,
  Text,
} from '../../../components/UI';
import { Flex } from '../../../components/Layout';
import { Container } from './Suggestions.styles';

import api from '../../../services/api';
import { useCardsQuery } from '../../../queries/useCards';
import { useModal } from '../../../hooks/useModal';
import { useAlert } from '../../../hooks/useAlert';
import { useToast } from '../../../hooks/useToast';
import { queryClient } from '../../../services/queryClient';
import { Card, CardTypes } from '../../../types';

const Suggestions: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [selectedCardType, setSelectedCardType] = useState<CardTypes | string>(
    'ALL',
  );

  const { data: cards = [], isFetching, refetch } = useCardsQuery();

  const {
    isOpen: modalEditCardIsOpen,
    toggleModal: toggleModalEditCard,
    data: selectedCard,
    setData: setSelectedCard,
  } = useModal<Card>();

  const { showAlert } = useAlert();
  const { addToast } = useToast();

  const handleDeleteCard = useCallback(
    (id: string) => {
      showAlert({
        title: t('admin.cards.modals.deleteCard.title'),
        message: t('admin.cards.modals.deleteCard.message'),
        cancelAction: closeAlert => closeAlert(),
        confirmAction: (closeAlert, toggleLoading) => {
          toggleLoading();

          api
            .delete(`/cards/${id}`)
            .then(async () => {
              await queryClient.invalidateQueries(['cards']);

              addToast({
                title: t('admin.cards.modals.deleteCard.toastSuccess.title'),
                description: t(
                  'admin.cards.modals.deleteCard.toastSuccess.description',
                ),
              });
            })
            .catch(() => {
              addToast({
                title: t('admin.cards.modals.deleteCard.toastError.title'),
                description: t(
                  'admin.cards.modals.deleteCard.toastError.description',
                ),
                type: 'error',
              });
            })
            .finally(() => {
              toggleLoading();
              closeAlert();
            });
        },
      });
    },
    [showAlert, addToast],
  );

  const handleEditCard = useCallback(
    (card: Card) => {
      setSelectedCard(card);
      toggleModalEditCard();
    },
    [setSelectedCard, toggleModalEditCard],
  );

  const handleOnChangeType = useCallback((type: string) => {
    const value = type !== 'ALL' ? parseInt(type, 10) : type;

    setSelectedCardType(value);
  }, []);

  const filteredCards = useMemo(
    () =>
      selectedCardType !== 'ALL'
        ? cards.filter(item => item.type === selectedCardType && item.isSuggestion)
        : cards.filter(item => item.isSuggestion),
    [selectedCardType, cards],
  );

  useEffect(() => {
    refetch();
  }, [i18n.language, refetch]);

  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        {t('admin.suggestions.title')}
      </Headline>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <form action="">
          <Select
            label={t('admin.cards.inputs.selectCardType.label')}
            placeholder={t('admin.cards.inputs.selectCardType.placeholder')}
            name="type"
            onChange={e => handleOnChangeType(e.target.value)}
            options={[
              {
                label: t('admin.cards.inputs.selectCardType.all'),
                value: 'ALL',
              },
              {
                label: t('admin.cards.inputs.selectCardType.archPattern'),
                value: CardTypes.ArchPattern,
              },
              {
                label: t('admin.cards.inputs.selectCardType.archDecisions'),
                value: CardTypes.ArchDecisions,
              },
              {
                label: t('admin.cards.inputs.selectCardType.qualityAttributes'),
                value: CardTypes.QualityAttributes,
              },
            ]}
          />
        </form>
      </Flex>
      <Flex shouldShow={isFetching}>
        <div className="loaderContent" />
      </Flex>
      <Flex
        shouldShow={!isFetching}
        className="cards-container"
        flexDirection="column"
        gap={4}
      >
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>{t('admin.cards.table.image')}</th>
              <th>{t('admin.cards.table.type')}</th>
              <th>{t('admin.cards.table.title')}</th>
              <th>{t('admin.cards.table.stars')}</th>
              <th className="question">{t('admin.cards.table.question')}</th>
              <th>{t('admin.cards.table.solution')}</th>
              <th>{t('admin.cards.table.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredCards?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.imgUrl} alt="Img" />
                </td>
                <td>
                  {item.type === CardTypes.ArchPattern
                    ? t('admin.cards.table.archPattern')
                    : item.type === CardTypes.ArchDecisions
                    ? t('admin.cards.table.archDecisions')
                    : t('admin.cards.table.qualityAttributes')}
                </td>
                <td>{item.title}</td>
                <td>{item.stars}</td>
                <td className="question">{item.question}</td>
                <td>
                  {item.solution === 'V'
                    ? t('admin.cards.table.true')
                    : t('admin.cards.table.false')}
                </td>
                <td>
                  <ButtonGroup gap={6}>
                    <Button
                      size="sm"
                      variant="red-outline"
                      justIcon
                      onClick={() => handleDeleteCard(item._id)}
                      width="fit-content"
                    >
                      <FiTrash />
                    </Button>
                    <Button
                      size="sm"
                      variant="blue"
                      justIcon
                      onClick={() => handleEditCard(item)}
                      width="fit-content"
                    >
                      <FiEye />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <Flex
        shouldShow={!filteredCards.length && !isFetching}
        justifyContent="center"
      >
        <Text family="mono" size="lg">
          {t('admin.suggestions.empty')}
        </Text>
      </Flex>
      <ModalEditCard
        isOpen={modalEditCardIsOpen}
        toggleModal={toggleModalEditCard}
        card={selectedCard ?? ({} as Card)}
        isSuggestion
      />
    </Container>
  );
};

export default Suggestions;