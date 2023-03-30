import React from 'react';
import { CardTypes } from '../../types';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Modal from '../Modal';
import Stars from '../Stars';

import { Container } from './ModalCard.styles';

interface IModalCardProps {
  isOpen: boolean;
  type: CardTypes;
  toggleModal: () => void;
}

const ModalCard: React.FC<IModalCardProps> = ({
  isOpen,
  type,
  toggleModal,
}) => {
  const answered = true;
  const answeredCorrectly = true;

  return (
    <Modal
      width="454px"
      isOpen={isOpen}
      showCloseButton={false}
      toggleModal={toggleModal}
      style={{
        content: {
          width: '408px',
          padding: '0',
          background: 'unset',
        },
      }}
    >
      <Container type={type}>
        <div className="header">
          <h4>Sorte ou revés</h4>
        </div>
        <div className="body">
          <div>
            <div className="description">
              <strong>Descrição:</strong>
              <p>
                Define quais as tecnologias disponíveis para realizar as demais
                decisões arquiteturais.
              </p>
            </div>
            <div className="question">
              <p>
                [V ou F] A escolha da tecnologia é realizada apenas pelo
                arquiteto pois é a pessoa com mais experiência no time de
                projeto.
              </p>
            </div>
            <div className="stars">
              <Stars value={5} size="lg" />
            </div>
            {answered && answeredCorrectly && (
              <div className="answer correctly">
                <h3>Parabéns, você acertou! 🎉</h3>
                <p>
                  R: Falso, a escolha da tecnologia pode ser feita tanto pelo
                  arquiteto de software como por terceiros.
                </p>
              </div>
            )}
            {answered && !answeredCorrectly && (
              <div className="answer wrong">
                <h3>Poxa, você errou! 😕</h3>
                <p>
                  R: Falso, a escolha da tecnologia pode ser feita tanto pelo
                  arquiteto de software como por terceiros.
                </p>
              </div>
            )}
          </div>
          <div className="actions">
            {!answered && (
              <ButtonGroup justifyContent="center" gap={10}>
                <Button variant="red" size="sm" width="flex-fit">
                  Falso
                </Button>
                <Button variant="green" size="sm" width="flex-fit">
                  Verdadeiro
                </Button>
              </ButtonGroup>
            )}
            {answered && answeredCorrectly && (
              <ButtonGroup justifyContent="flex-end">
                <Button variant="green" size="md" width="fit-content">
                  Avançar 2 casas
                </Button>
              </ButtonGroup>
            )}
            {answered && !answeredCorrectly && (
              <ButtonGroup justifyContent="flex-end">
                <Button variant="red" size="md" width="fit-content">
                  Fechar
                </Button>
              </ButtonGroup>
            )}
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalCard;
