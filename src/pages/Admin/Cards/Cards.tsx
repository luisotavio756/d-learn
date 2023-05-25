import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { Container } from './Cards.styles';
import { Button, Headline } from '../../../components/UI';
import { Flex } from '../../../components/Layout';
import { useCardsQuery } from '../../../queries/useCards';
import ModalCreateCard from '../../../components/ModalCreateCard/ModalCreateCard';
import { useModal } from '../../../hooks/useModal';

const Cards: React.FC = () => {
  const { data: cards = [], isFetching } = useCardsQuery();
  const { isOpen: modalCreateCardIsOpen, toggleModal: toggleModalCreateCard } =
    useModal();

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
              <th>Texto da solução</th>
            </tr>
          </thead>
          <tbody>
            {cards?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/files/uploads/${
                      item.imgUrl
                    }`}
                    alt="Img"
                  />
                </td>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.stars}</td>
                <td>{item.question}</td>
                <td>{item.solution}</td>
                <td>{item.solutionText}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <ModalCreateCard
        isOpen={modalCreateCardIsOpen}
        toggleModal={toggleModalCreateCard}
      />
    </Container>
  );
};

export default Cards;
