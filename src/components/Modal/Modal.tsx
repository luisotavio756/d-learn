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

ReactModal.setAppElement('#root');

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  title,
  width = '754px',
  height,
  showCloseButton = true,
  style = {},
  toggleModal,
  ...rest
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const styles = useMemo(() => {
    const baseContentStyles = {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      margin: 'auto',
      background: '#fff',
      borderRadius: '8px',
      maxWidth: width,
      width: '96%',
      border: 'none',
      maxHeight: height ?? '96vh',
      height: 'fit-content',
      overflowY: 'auto',
    };

    const baseOverlayStyles = {
      backgroundColor: '#232129d9',
      zIndex: '9999',
    };

    Object.assign(baseContentStyles, { ...(style?.content ?? {}) });
    Object.assign(baseOverlayStyles, { ...(style?.overlay ?? {}) });

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
      <CloseContainer hasTitle={!!title}>
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
