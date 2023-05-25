import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './ToastContainer.styles';
import { IToastMessage } from '../../contexts/toast.context';
import Toast from './Toast';

interface IContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-10%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
