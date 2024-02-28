import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      title={t('admin.cards.modals.detailsCard.title')}
      toggleModal={toggleModal}
    >
      <Container>
        <FileInput flexDirection="column">
          <img src={previewUrl} alt="Avatar img" />
        </FileInput>
        <form>
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
                {
                  label: t('admin.cards.inputs.selectCardType.luckOrBadLuck'),
                  value: CardTypes.LuckOrBadLuck,
                },
              ]}
              disabled
            />
            <Input
              type="text"
              label={t('admin.cards.inputs.inputTitle.label')}
              placeholder={t('admin.cards.inputs.inputTitle.placeholder')}
              name="title"
              register={register}
              disabled
            />
            <TextArea
              label={t('admin.cards.inputs.inputDescription.label')}
              placeholder={t('admin.cards.inputs.inputDescription.placeholder')}
              name="description"
              register={register}
              rows={3}
              disabled
            />
            {card.type !== CardTypes.LuckOrBadLuck && (
              <>
                <TextArea
                  label={t('admin.cards.inputs.inputQuestion.label')}
                  placeholder={t(
                    'admin.cards.inputs.inputQuestion.placeholder',
                  )}
                  name="question"
                  register={register}
                  rows={3}
                  disabled
                />
                <Select
                  label={t('admin.cards.inputs.inputSolution.label')}
                  placeholder={t(
                    'admin.cards.inputs.inputSolution.placeholder',
                  )}
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
                  disabled
                />
                <TextArea
                  label={t('admin.cards.inputs.inputSolutionText.label')}
                  placeholder={t(
                    'admin.cards.inputs.inputSolutionText.placeholder',
                  )}
                  name="solutionText"
                  register={register}
                  rows={3}
                  disabled
                />
              </>
            )}
            <Input
              type="number"
              label={t('admin.cards.inputs.inputStars.label')}
              placeholder={t('admin.cards.inputs.inputStars.placeholder')}
              name="stars"
              register={register}
              min={1}
              max={6}
              disabled
            />
          </Flex>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalCardDetails;
