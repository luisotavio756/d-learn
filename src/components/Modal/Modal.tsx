import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal, { Props } from 'react-modal';
import { useTheme } from 'styled-components';
import { CloseContainer } from './Modal.styles';

interface IModalProps extends Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  title: string | React.ReactNode;
  width?: string;
  height?: string;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  title,
  setIsOpen,
  width = '754px',
  height = '698px',
  ...rest
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const theme = useTheme();

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          borderRadius: '8px',
          maxWidth: width,
          width: '96%',
          border: 'none',
          maxHeight: height,
          height: 'auto',
          overflowY: 'auto',
        },
        overlay: {
          backgroundColor: '#232129d9',
        },
      }}
      {...rest}
    >
      <CloseContainer>
        <h1>{title}</h1>
        <button type="button" onClick={() => setIsOpen()}>
          <FiX />
        </button>
      </CloseContainer>
      {children}
    </ReactModal>
  );
};

export default Modal;
