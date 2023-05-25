import React from 'react';

import { useForm } from 'react-hook-form';
import { FiCheck, FiInfo } from 'react-icons/fi';

import Modal from '../Modal';

import { Container } from './ModalCreateCard.styles';
import { Button, Text, Input, TextArea, Select } from '../UI';
import { Flex } from '../Layout';
import { CardTypes } from '../../types';

type FormData = {
  [key: string]: string;
};

interface IModalCreateCardProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalCreateCard: React.FC<IModalCreateCardProps> = ({
  isOpen,
  toggleModal,
}) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <Modal
      width="540px"
      isOpen={isOpen}
      title="Iniciar jogo"
      toggleModal={toggleModal}
    >
      <Container>
        <Flex flexDirection="column" className="welcome">
          <Text size="lg">
            Bem vindo ao D-LEARN Board Game. Adicione os jogadores para iniciar
            o jogo!
          </Text>
          <Text size="md" type="warning" weight="medium">
            <FiInfo /> Máximo de 4 jogadores
          </Text>
        </Flex>
        <form onSubmit={onSubmit}>
          <Flex flexDirection="column" gap={8}>
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
              ]}
            />
            <Input
              type="text"
              label="Título"
              placeholder="Digite um título"
              name="title"
              register={register}
            />
            <TextArea
              label="Descrição"
              placeholder="Digite uma descrição"
              name="description"
              register={register}
              rows={3}
            />
            <TextArea
              label="Pergunta"
              placeholder="Crie uma pergunta de V ou F"
              name="question"
              register={register}
              rows={3}
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
            />
            <TextArea
              label="Explicação da Resposta"
              placeholder="Descreva a resposta"
              name="solutionText"
              register={register}
              rows={3}
            />
            <Input
              type="number"
              label="Estrelas"
              placeholder="Selecione uma quantidade de estrelas"
              name="start"
              register={register}
              min={1}
              max={6}
            />
          </Flex>

          <Button marginTop={1} width="full" type="submit">
            <FiCheck /> Criar carta
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalCreateCard;
