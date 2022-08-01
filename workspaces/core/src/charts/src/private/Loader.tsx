import React from 'react';
import { Props } from './types/LoaderProps';
import classNames from '../../../../../../next-docs/utils/classNames';

const Title: React.FC = ({ children }) => {
  return (
    <p className={classNames(`text-trunks.100 text-sm mt-4`)}>{children}</p>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center justify-center w-full h-full'
      )}
    >
      {children}
    </div>
  );
};

export const Loader: React.FC<Props> = ({ icon, title }) => (
  <Container>
    {icon}
    <Title>{title}</Title>
  </Container>
);
