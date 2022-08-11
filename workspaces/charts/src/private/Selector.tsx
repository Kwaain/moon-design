import React from 'react';
import { themed } from '@heathmont/moon-utils';
import classNames from '../../../../next-docs/utils/classNames';
import { ButtonProps, Props, ColorPreviewProps } from '../types/SelectorProps';

const Container: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex shrink-0 items-center justify-center mb-4 overflow-x-auto'
      )}
    >
      {children}
    </div>
  );
};

const List: React.FC = ({ children }) => {
  return (
    <div className={classNames('flex flex-row justify-start max-w-full')}>
      {children}
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ isActive, children }) => {
  return (
    <button
      className={classNames(
        'flex flex-col shrink-0 relative my-0 mx-2 py-2 pl-8 pr-4 cursor-pointer',
        'rounded-lg border-none will-change-[background] transition-[background] ease-in-out duration-400 min-w-[124px]',
        'hover:bg-goku-80',
        'active:bg-goku-40',
        isActive ? 'bg-goku' : 'bg-none'
      )}
    >
      {children}
    </button>
  );
};

const ColorPreview: React.FC<ColorPreviewProps> = ({
  color,
  theme,
  children,
}) => {
  return (
    <div
      className={classNames(
        'w-2 h-2 rounded-[50%] absolute top-3.5 left-3.5',
        color ? themed('bg-', color)(theme) : 'bg-piccolo'
      )}
    >
      {children}
    </div>
  );
};

const Label: React.FC = ({ children }) => {
  return (
    <div className={classNames('text-xs leading-6 text-trunks')}>
      {children}
    </div>
  );
};

const Value: React.FC = ({ children }) => {
  return (
    <div className={classNames('text-lg leading-6 text-bulma')}>{children}</div>
  );
};

export const Selector: React.FC<Props> = ({
  options,
  activeOptions,
  onChange,
  formatFn,
}) => (
  <Container>
    <List>
      {options.map((option) => {
        const isActive = activeOptions.includes(option.dataKey);
        const value = formatFn({ value: option.value, key: option.dataKey });

        return (
          <Button
            isActive={isActive}
            onClick={() => onChange(option.dataKey, !isActive)}
            key={option.dataKey}
          >
            <ColorPreview color={option.color} />
            <Label>{option.label}</Label>
            <Value>{value}</Value>
          </Button>
        );
      })}
    </List>
  </Container>
);
