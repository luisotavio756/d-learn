import React, { useCallback, useMemo, useState } from 'react';
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

const Cards: React.FC = () => {
  const [selectedCardType, setSelectedCardType] = useState<CardTypes | string>(
    'ALL',
  );

  const { data: cards = [], isFetching } = useCardsQuery();
  const { isOpen: modalCreateCardIsOpen, toggleModal: toggleModalCreateCard } =
    useModal();

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
        title: 'Deletar carta',
        message:
          'Tem certeza que deseja deletar esta carta? Esta ação é irreversivel',
        cancelAction: closeAlert => closeAlert(),
        confirmAction: (closeAlert, toggleLoading) => {
          toggleLoading();

          api
            .delete(`/cards/${id}`)
            .then(async () => {
              await queryClient.invalidateQueries(['cards']);

              addToast({
                title: 'Sucesso!',
                description: 'Carta deletada com sucesso!',
              });
            })
            .catch(() => {
              addToast({
                title: 'Erro',
                description:
                  'Ocorreu um erro ao tentar deletar a carta, tente novamente mais tarde',
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
        ? cards.filter(item => item.type === selectedCardType)
        : cards,
    [selectedCardType, cards],
  );

  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        Cartas
      </Headline>
      <Flex alignItems="flex-end" justifyContent="space-between">
        <form action="">
          <Select
            label="Tipo"
            placeholder="Selecione um tipo"
            name="type"
            onChange={e => handleOnChangeType(e.target.value)}
            options={[
              {
                label: 'Todos',
                value: 'ALL',
              },
              {
                label: 'Padrões arquiteturais',
                value: CardTypes.ArchPattern,
              },
              {
                label: 'Decisões arquiteturais',
                value: CardTypes.ArchDecisions,
              },
              {
                label: 'Atributos de qualidade',
                value: CardTypes.QualityAttributes,
              },
              {
                label: 'Sorte ou revés',
                value: CardTypes.LuckOrBadLuck,
              },
            ]}
          />
        </form>
        <Button
          size="sm"
          variant="blue-outline"
          onClick={toggleModalCreateCard}
        >
          <FiPlus /> Nova carta
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
            <FiInfo /> As cartas de sorte ou revés não podem ser editadas por
            aqui. Solicite ao desenvolvedor a alteração
          </Text>
        </Flex>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Imagem</th>
              <th>Tipo</th>
              <th>Titulo</th>
              <th>Estrelas</th>
              <th>Pergunta</th>
              <th>Solução</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredCards?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.imgUrl ?? LuckSquareImg} alt="Img" />
                </td>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.stars}</td>
                <td>{item.question}</td>
                <td>{item.solution}</td>
                <td>
                  <ButtonGroup gap={6}>
                    <Button
                      size="sm"
                      variant="red-outline"
                      justIcon
                      onClick={() => handleDeleteCard(item._id)}
                      disabled={selectedCardType === CardTypes.LuckOrBadLuck}
                    >
                      <FiTrash />
                    </Button>
                    <Button
                      size="sm"
                      variant="yellow"
                      justIcon
                      onClick={() => handleEditCard(item)}
                      disabled={selectedCardType === CardTypes.LuckOrBadLuck}
                    >
                      <FiEdit />
                    </Button>
                    <Button
                      size="sm"
                      justIcon
                      disabled={selectedCardType === CardTypes.LuckOrBadLuck}
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
      <Flex shouldShow={!filteredCards.length} justifyContent="center">
        <Text family="mono" size="lg">
          Não há cartas cadastradas
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
    </Container>
  );
};

export default Cards;
