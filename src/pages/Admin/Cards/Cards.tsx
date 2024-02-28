import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FiEdit, FiEye, FiInfo, FiPlus, FiTrash } from 'react-icons/fi';

import ModalCreateCard from '../../../components/ModalCreateCard/ModalCreateCard';
import ModalEditCard from '../../../components/ModalEditCard/ModalEditCard';
import {
  Button,
  ButtonGroup,
  Headline,
  Select,
  Text,
} from '../../../components/UI';
import { Flex } from '../../../components/Layout';
import { Container } from './Cards.styles';

import api from '../../../services/api';
import { useCardsQuery } from '../../../queries/useCards';
import { useModal } from '../../../hooks/useModal';
import { useAlert } from '../../../hooks/useAlert';
import { useToast } from '../../../hooks/useToast';
import { queryClient } from '../../../services/queryClient';
import { Card, CardTypes } from '../../../types';

import LuckSquareImg from '../../../assets/luck-square.png';
import ModalCardDetails from '../../../components/ModalCardDetails/ModalCardDetails';

const Cards: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [selectedCardType, setSelectedCardType] = useState<CardTypes | string>(
    'ALL',
  );

  const { data: cards = [], isFetching, refetch } = useCardsQuery();
  const { isOpen: modalCreateCardIsOpen, toggleModal: toggleModalCreateCard } =
    useModal();

  const {
    isOpen: modalEditCardIsOpen,
    toggleModal: toggleModalEditCard,
    data: selectedCard,
    setData: setSelectedCard,
  } = useModal<Card>();

  const {
    isOpen: modalCardDetailsIsOpen,
    toggleModal: toggleModalCardDetails,
    data: modalCardDetailsData,
    setData: setModalCardDetailsData,
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

  const handleOpenCardDetails = useCallback(
    (card: Card) => {
      setModalCardDetailsData(card);
      toggleModalCardDetails();
    },
    [setModalCardDetailsData, toggleModalCardDetails],
  );

  const handleOnChangeType = useCallback((type: string) => {
    const value = type !== 'ALL' ? parseInt(type, 10) : type;

    setSelectedCardType(value);
  }, []);

  const filteredCards = useMemo(
    () =>
      selectedCardType !== 'ALL'
        ? cards.filter(item => item.type === selectedCardType)
        : cards,
    [selectedCardType, cards],
  );

  useEffect(() => {
    refetch();
  }, [i18n.language, refetch]);

  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        {t('admin.cards.pageTitle')}
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
              {
                label: t('admin.cards.inputs.selectCardType.luckOrBadLuck'),
                value: CardTypes.LuckOrBadLuck,
              },
            ]}
          />
        </form>
        <Button
          width="fit-content"
          size="sm"
          variant="blue-outline"
          onClick={toggleModalCreateCard}
        >
          <FiPlus /> {t('admin.cards.newCard')}
        </Button>
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
        <Flex shouldShow={selectedCardType === CardTypes.LuckOrBadLuck}>
          <Text type="warning">
            <FiInfo /> {t('admin.cards.warningLuckOrBadLuck')}
          </Text>
        </Flex>
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
                  <img src={item.imgUrl ?? LuckSquareImg} alt="Img" />
                </td>
                <td>
                  {item.type === CardTypes.ArchPattern
                    ? t('admin.cards.table.archPattern')
                    : item.type === CardTypes.ArchDecisions
                    ? t('admin.cards.table.archDecisions')
                    : item.type === CardTypes.QualityAttributes
                    ? t('admin.cards.table.qualityAttributes')
                    : t('admin.cards.table.luckOrBadLuck')}
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
                    {item.type !== CardTypes.LuckOrBadLuck && (
                      <>
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
                          variant="yellow"
                          justIcon
                          onClick={() => handleEditCard(item)}
                          width="fit-content"
                        >
                          <FiEdit />
                        </Button>
                      </>
                    )}
                    <Button
                      size="sm"
                      justIcon
                      onClick={() => handleOpenCardDetails(item)}
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
          {t('admin.cards.table.empty')}
        </Text>
      </Flex>
      <ModalCreateCard
        isOpen={modalCreateCardIsOpen}
        toggleModal={toggleModalCreateCard}
      />
      <ModalEditCard
        isOpen={modalEditCardIsOpen}
        toggleModal={toggleModalEditCard}
        card={selectedCard ?? ({} as Card)}
      />
      <ModalCardDetails
        isOpen={modalCardDetailsIsOpen}
        toggleModal={toggleModalCardDetails}
        card={modalCardDetailsData ?? ({} as Card)}
      />
    </Container>
  );
};

export default Cards;
