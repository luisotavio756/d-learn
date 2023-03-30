import React, { useState, useEffect, useMemo } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal, { Props } from 'react-modal';
import { CloseContainer } from './Modal.styles';

interface IModalProps extends Props {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string | React.ReactNode;
  width?: string;
  height?: string;
  showCloseButton?: boolean;
  style?: ReactModal.Styles;
  toggleModal: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  title,
  width = '754px',
  height = '698px',
  showCloseButton = true,
  style = {},
  toggleModal,
  ...rest
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const styles = useMemo(() => {
    const baseContentStyles = {
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
    };

    const baseOverlayStyles = {
      backgroundColor: '#232129d9',
    };

    Object.assign(baseContentStyles, { ...(style?.content || {}) });
    Object.assign(baseOverlayStyles, { ...(style?.overlay || {}) });

    return {
      content: baseContentStyles,
      overlay: baseOverlayStyles,
    } as ReactModal.Styles;
  }, [style, width, height]);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={false}
      onRequestClose={toggleModal}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={styles}
      {...rest}
    >
      <CloseContainer>
        {title && <h1>{title}</h1>}
        {showCloseButton && (
          <button type="button" onClick={() => toggleModal()}>
            <FiX />
          </button>
        )}
      </CloseContainer>

      {children}
    </ReactModal>
  );
};

export default Modal;
