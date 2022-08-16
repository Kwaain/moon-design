import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { ColorPreviewProps, ButtonProps } from '../types/SelectorProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

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
        'flex flex-col shrink-0 relative my-0 mx-2 pt-2 pr-4 pl-2 pb-8 cursor-pointer',
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
const ColorPreview: React.FC<ColorPreviewProps> = ({ color, children }) => {
  return (
    <div
      className={classNames(
        'w-2 h-2 rounded-[50%] absolute top-3.5 left-3.5',
        color ? `bg-${color}` : 'bg-piccolo'
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

type Props = {
  onChange: (key: string, isActive: boolean) => void;
  activeOptions: string[];
  formatFn: (props: { value: string | number; key: string }) => any;
  options: {
    label: any;
    dataKey: string;
    value: string | number;
    color?: ColorProps | string;
  }[];
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
