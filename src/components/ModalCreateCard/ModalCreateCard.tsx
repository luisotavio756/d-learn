import React, { ChangeEvent, useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { FiCamera, FiCheck, FiInfo, FiX } from 'react-icons/fi';

import Modal from '../Modal';

import { Container, FileInput } from './ModalCreateCard.styles';
import { Button, Text, Input, TextArea, Select } from '../UI';
import { Flex } from '../Layout';
import { CardTypes } from '../../types';

import defaultImg from '../../assets/default-banner.jpg';

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
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);

      setSelectedImg(fileUrl);
    }
  }, []);

  return (
    <Modal
      width="540px"
      isOpen={isOpen}
      title="Nova carta"
      toggleModal={toggleModal}
    >
      <Container>
        <FileInput flexDirection="column">
          <Text size="sm" type="warning">
            <FiInfo /> Sugestão: 180px x 84px
          </Text>
          <img src={selectedImg ?? defaultImg} alt="Avatar img" />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              name=""
              onChange={handleAvatarChange}
              accept="image/*"
            />
          </label>
          {selectedImg && (
            <Button
              size="sm"
              variant="text"
              onClick={() => setSelectedImg(null)}
            >
              <FiX /> remover
            </Button>
          )}
        </FileInput>
        <form onSubmit={onSubmit}>
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
