import React from 'react';
import classNames from '../../../next-docs/utils/classNames';
import { Props, TitleProps, FilterWrapperProps } from './types/HeaderProps';

const Title: React.FC<TitleProps> = ({ children }) => {
  return <p className={classNames(`text-bulma text-xl`)}>{children}</p>;
};

const IconWrapper = ({ children }) => {
  return <div className={classNames('h-10')}>{children}</div>;
};

const FilterWrapper: React.FC<FilterWrapperProps> = ({
  isActive,
  children,
}) => {
  return (
    <div className={classNames(isActive ? `color-goten` : ``)}>{children}</div>
  );
};

const Container = ({ children }) => {
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
  <Container>
    <IconWrapper>{icon}</IconWrapper>
    <Title isActive={isActive}>{title}</Title>
    <FilterWrapper isActive={isActive}>{filter}</FilterWrapper>
  </Container>
);
