import React from 'react';
import { Props, TitleProps } from '../types/HeaderProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Title: React.FC<TitleProps> = ({ children, isActive }) => {
  return (
    <p
      className={classNames(
        `text-bulma text-[20px]`,
        isActive ? 'text-goten' : ''
      )}
    >
      {children}
    </p>
  );
};

const IconWrapper = ({ children }: any) => {
  return <div className={classNames('h-10')}>{children}</div>;
};

const FilterWrapper: React.FC<any> = ({ isActive, children }) => {
  return (
    <div className={classNames(isActive ? `color-goten` : ``)}>{children}</div>
  );
};

const Container = ({ children }: any) => {
  return (
    <div
      className={classNames(
        'flex shrink-0 flex-col items-center justify-content mb-4'
      )}
    >
      {children}
    </div>
  );
};

export const Header: React.FC<Props> = ({
  icon,
  filter,
  title,
  isActive = false,
}) => (
  <Container isActive={isActive}>
    <IconWrapper>{icon}</IconWrapper>
    <Title>{title}</Title>
    <FilterWrapper>{filter}</FilterWrapper>
  </Container>
);
