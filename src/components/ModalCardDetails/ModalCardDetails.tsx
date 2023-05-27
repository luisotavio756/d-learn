import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../Modal';
import { Container, FileInput } from './ModalCardDetails.styles';
import { Input, TextArea, Select } from '../UI';
import { Flex } from '../Layout';
import { Card, CardTypes } from '../../types';

import defaultImg from '../../assets/default-banner.jpg';
import luckSquareImg from '../../assets/luck-square.png';

type FormData = {
  [key: string]: string;
};

interface IModalCardDetailsProps {
  card: Card;
  isOpen: boolean;
  toggleModal(): void;
}

const ModalCardDetails: React.FC<IModalCardDetailsProps> = ({
  isOpen,
  card,
  toggleModal,
}) => {
  const { register, reset } = useForm<FormData>();

  const previewUrl = useMemo(() => {
    if (card.type === CardTypes.LuckOrBadLuck) return luckSquareImg;

    if (card.imgUrl) return card.imgUrl;

    return defaultImg;
  }, [card]);

  useEffect(() => {
    if (Object.keys(card).length) {
      reset(card as any);
    }
  }, [card, reset]);

  return (
    <Modal
      width="540px"
      isOpen={isOpen}
      title="Detalhes da carta"
      toggleModal={toggleModal}
    >
      <Container>
        <FileInput flexDirection="column">
          <img src={previewUrl} alt="Avatar img" />
        </FileInput>
        <form>
          <Flex flexDirection="column" gap={16}>
            <Select
              label="Tipo"
              placeholder="Selecione um tipo"
              name="type"
              register={register}
              options={[
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
              disabled
            />
            <Input
              type="text"
              label="Título"
              placeholder="Digite um título"
              name="title"
              register={register}
              disabled
            />
            <TextArea
              label="Descrição"
              placeholder="Digite uma descrição"
              name="description"
              register={register}
              rows={3}
              disabled
            />
            {card.type !== CardTypes.LuckOrBadLuck && (
              <>
                <TextArea
                  label="Pergunta"
                  placeholder="Crie uma pergunta de V ou F"
                  name="question"
                  register={register}
                  rows={3}
                  disabled
                />
                <Select
                  label="Resposta"
                  placeholder="Selecione uma resposta"
                  name="solution"
                  register={register}
                  options={[
                    {
                      label: 'Verdadeiro',
                      value: 'V',
                    },
                    {
                      label: 'Falso',
                      value: 'F',
                    },
                  ]}
                  disabled
                />
                <TextArea
                  label="Explicação da Resposta"
                  placeholder="Descreva a resposta"
                  name="solutionText"
                  register={register}
                  rows={3}
                  disabled
                />
              </>
            )}
            <Input
              type="number"
              label="Estrelas"
              placeholder="Selecione uma quantidade de estrelas"
              name="stars"
              register={register}
              min={1}
              max={6}
              disabled
            />
            <TextArea
              label="Pergunta"
              placeholder="Crie uma pergunta de V ou F"
              name="starsCalc"
              register={register}
              rows={3}
              disabled
            />
          </Flex>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalCardDetails;
