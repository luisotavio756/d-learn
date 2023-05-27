import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCamera, FiCheck, FiInfo, FiX } from 'react-icons/fi';
import { ZodError, z } from 'zod';

import Modal from '../Modal';

import { Container, FileInput } from './ModalCreateCard.styles';
import { Button, Text, Input, TextArea, Select } from '../UI';
import { Flex } from '../Layout';
import { CardTypes } from '../../types';

import defaultImg from '../../assets/default-banner.jpg';
import { useToast } from '../../hooks/useToast';
import api from '../../services/api';
import { queryClient } from '../../services/queryClient';

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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const { register, handleSubmit } = useForm<FormData>();
  const { addToast } = useToast();

  const previewUrl = useMemo(
    () => (selectedImg ? URL.createObjectURL(selectedImg) : defaultImg),
    [selectedImg],
  );

  const onSubmit = handleSubmit(async data => {
    setIsLoading(true);

    const Card = z.object({
      type: z.string(),
      title: z.string(),
      description: z.string().min(1),
      question: z.string().min(1),
      solution: z.string().min(1),
      solutionText: z.string().min(1),
      stars: z.string(),
    });

    try {
      Card.parse(data);

      const {
        type,
        title,
        description,
        question,
        solution,
        solutionText,
        stars,
      } = data;

      const formData = new FormData();

      formData.append('type', type);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('question', question);
      formData.append('solution', solution);
      formData.append('solutionText', solutionText);
      formData.append('stars', stars);

      if (selectedImg) {
        formData.append('img', selectedImg);
      }

      await api.post('/cards', formData);
      await queryClient.invalidateQueries(['cards']);

      toggleModal();

      addToast({
        title: 'Sucesso!',
        description: 'Carta criada com sucesso!',
        type: 'success',
      });
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        addToast({
          title: 'Dados inválidos',
          description:
            'Por favor, garanta que todos os campos estão preenchidos e tente novamente',
          type: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  });

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      setSelectedImg(file);
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
          <img src={previewUrl} alt="Avatar img" />

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
              name="stars"
              register={register}
              min={1}
              max={6}
            />
          </Flex>

          <Button
            marginTop={1}
            width="full"
            type="submit"
            loading={isLoading}
            loadingText="Aguarde..."
            disabled={isLoading}
          >
            <FiCheck /> Criar carta
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalCreateCard;
