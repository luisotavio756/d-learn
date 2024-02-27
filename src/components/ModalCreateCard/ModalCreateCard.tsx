import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        title: t('admin.cards.modals.newCard.toastSuccess.title'),
        description: t('admin.cards.modals.newCard.toastSuccess.description'),
        type: 'success',
      });
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        addToast({
          title: t('admin.cards.modals.newCard.toastInvalidData.title'),
          description: t(
            'admin.cards.modals.newCard.toastInvalidData.description',
          ),
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
      title={t('admin.cards.modals.newCard.title')}
      toggleModal={toggleModal}
    >
      <Container>
        <FileInput flexDirection="column">
          <Text size="sm" type="warning">
            <FiInfo /> {t('admin.cards.modals.newCard.suggestion')}
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
              <FiX /> {t('admin.cards.modals.newCard.remove')}
            </Button>
          )}
        </FileInput>
        <form onSubmit={onSubmit}>
          <Flex flexDirection="column" gap={16}>
            <Select
              label={t('admin.cards.inputs.selectCardType.label')}
              placeholder={t('admin.cards.inputs.selectCardType.placeholder')}
              name="type"
              register={register}
              options={[
                {
                  label: t('admin.cards.inputs.selectCardType.archPattern'),
                  value: CardTypes.ArchPattern,
                },
                {
                  label: t('admin.cards.inputs.selectCardType.archDecisions'),
                  value: CardTypes.ArchDecisions,
                },
                {
                  label: t(
                    'admin.cards.inputs.selectCardType.qualityAttributes',
                  ),
                  value: CardTypes.QualityAttributes,
                },
              ]}
            />
            <Input
              type="text"
              label={t('admin.cards.inputs.inputTitle.label')}
              placeholder={t('admin.cards.inputs.inputTitle.placeholder')}
              name="title"
              register={register}
            />
            <TextArea
              label={t('admin.cards.inputs.inputDescription.label')}
              placeholder={t('admin.cards.inputs.inputDescription.placeholder')}
              name="description"
              register={register}
              rows={3}
            />
            <TextArea
              label={t('admin.cards.inputs.inputQuestion.label')}
              placeholder={t('admin.cards.inputs.inputQuestion.placeholder')}
              name="question"
              register={register}
              rows={3}
            />
            <Select
              label={t('admin.cards.inputs.inputSolution.label')}
              placeholder={t('admin.cards.inputs.inputSolution.placeholder')}
              name="solution"
              register={register}
              options={[
                {
                  label: t('admin.cards.inputs.inputSolution.true'),
                  value: 'V',
                },
                {
                  label: t('admin.cards.inputs.inputSolution.false'),
                  value: 'F',
                },
              ]}
            />
            <TextArea
              label={t('admin.cards.inputs.inputSolutionText.label')}
              placeholder={t(
                'admin.cards.inputs.inputSolutionText.placeholder',
              )}
              name="solutionText"
              register={register}
              rows={3}
            />
            <Input
              type="number"
              label={t('admin.cards.inputs.inputStars.label')}
              placeholder={t('admin.cards.inputs.inputStars.placeholder')}
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
            loadingText={t('admin.cards.modals.newCard.wait')}
            disabled={isLoading}
          >
            <FiCheck /> {t('admin.cards.modals.newCard.createCard')}
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalCreateCard;
