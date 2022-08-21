import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { Props, TitleProps } from '../types/LoaderProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Title: React.FC<TitleProps> = ({ children, size, color }) => {
  return (
    <p
      className={classNames(`text-trunks.100 `)}
      style={{ fontSize: rem(size) }}
    >
      {children}
    </p>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('flex flex-col items-center w-full h-full')}
      style={{ justifyContent: 'center' }}
    >
      {children}
    </div>
  );
};

export const Loader: React.FC<Props> = ({ icon, title, color }) => (
  <Container>
    {icon}
    <Title size={14} color={color}>
      {title}
    </Title>
  </Container>
);
