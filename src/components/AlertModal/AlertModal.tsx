import React, { useState, useEffect, useCallback } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import Modal from '../Modal';
import ButtonGroup from '../UI/ButtonGroup';
import { Container } from './AlertModal.styles';
import { Flex } from '../Layout';
import { Text, Button, Headline } from '../UI';

export type CloseModalCallback = () => void;

interface IAlertModalProps {
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  closeText?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  confirmAction?(closeModal: CloseModalCallback): void;
  cancelAction?(closeModal: CloseModalCallback): void;
}

const AlertModal: React.FC<IAlertModalProps> = ({
  isOpen,
  title,
  message,
  closeText,
  setIsOpen,
  confirmAction,
  cancelAction,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const theme = useTheme();

  const handleConfirm = useCallback(() => {
    if (!confirmAction) return;

    try {
      confirmAction(() => {
        setIsOpen();
      });
    } catch (error) {
      console.error(error);
    }
  }, [confirmAction, setIsOpen]);

  const handleCancel = useCallback(() => {
    if (!cancelAction) return;

    try {
      cancelAction(() => {
        setIsOpen();
      });
    } catch (error) {
      console.error(error);
    }
  }, [cancelAction, setIsOpen]);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={modalStatus}
      showCloseButton={false}
      toggleModal={() => null}
      style={{
        content: {
          width: '380px',
          background: theme.colors.background,
        },
        overlay: {
          backgroundColor: '#232129d1',
        },
      }}
    >
      <Container>
        <Flex justifyContent="space-between">
          <Headline size="sm">{title}</Headline>
          <button type="button" onClick={() => setIsOpen()}>
            <FiX />
          </button>
        </Flex>
        <Text size="lg" weight="light">
          {message}
        </Text>
        <ButtonGroup gap={8} justifyContent="flex-end">
          {!!cancelAction && (
            <Button size="md" variant="blue" onClick={handleCancel}>
              <FiX /> {closeText || 'Cancelar'}
            </Button>
          )}
          {!!confirmAction && (
            <Button size="md" variant="blue-outline" onClick={handleConfirm}>
              <FiCheck /> Confirmar
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </Modal>
  );
};

export default AlertModal;
