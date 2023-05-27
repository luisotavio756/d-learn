import React, { useCallback } from 'react';
import { FiEdit, FiEye, FiPlus, FiTrash } from 'react-icons/fi';

import ModalCreateCard from '../../../components/ModalCreateCard/ModalCreateCard';
import { Button, ButtonGroup, Headline, Text } from '../../../components/UI';
import { Flex } from '../../../components/Layout';
import { Container } from './Cards.styles';

import api from '../../../services/api';
import { useCardsQuery } from '../../../queries/useCards';
import { useModal } from '../../../hooks/useModal';
import { useAlert } from '../../../hooks/useAlert';
import { useToast } from '../../../hooks/useToast';
import { queryClient } from '../../../services/queryClient';
import { Card } from '../../../types';
import ModalEditCard from '../../../components/ModalEditCard/ModalEditCard';

const Cards: React.FC = () => {
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

  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        Cartas
      </Headline>
      <Flex justifyContent="flex-end">
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
      <Flex shouldShow={!isFetching} className="cards-container">
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
            {cards?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={item.imgUrl} alt="Img" />
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
                    >
                      <FiTrash />
                    </Button>
                    <Button
                      size="sm"
                      variant="yellow"
                      justIcon
                      onClick={() => handleEditCard(item)}
                    >
                      <FiEdit />
                    </Button>
                    <Button size="sm" justIcon>
                      <FiEye />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <Flex shouldShow={!cards.length} justifyContent="center">
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
