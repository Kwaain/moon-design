import React from 'react';
import {
  ColorPreviewProps,
  Props,
  TooltipWrapperProps,
} from '../types/TooltipProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Text: React.FC = ({ children }) => {
  return (
    <span className={classNames(`text-trunks text-[12px]`)}>{children}</span>
  );
};

//mozda ne radi style
export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  children,
  style,
}) => {
  return (
    <div
      className={classNames(
        'inline-block text-goten bg-gohan text-xs leading-4 p-3 rounded relative shadow-lg pointer-events-none'
      )}
    >
      {children}
    </div>
  );
};

export const Item: React.FC = ({ children }) => {
  return (
    <div className={classNames('relative py-0.5 pr-0 pl-4 text-trunks')}>
      {children}
    </div>
  );
};

export const Date: React.FC = ({ children }) => {
  return (
    <div className={classNames('relative py-0.5 px-0 text-trunks')}>
      {children}
    </div>
  );
};

export const ColorPreview: React.FC<ColorPreviewProps> = ({
  background,
  children,
}) => {
  return (
    <div
      className={classNames(
        'w-2 h-2 rounded-2/4 absolute top-2/4 left-0 -translate-x-1/2',
        background ? `bg-${background}` : ''
      )}
    >
      {children}
    </div>
  );
};

export const Tooltip: React.FC<Props> = ({ payload, active, formatFn }) => {
  if (!active || !payload) return null;

  const date = payload[0] && payload[0].payload.date;

  return (
    <TooltipWrapper>
      {date && <Date>{formatFn({ value: date, key: 'date' })}</Date>}
      {payload.map((item) => {
        const color = item.payload.fill || item.color;
        const label = item.payload.label || item.name;
        const key = item.payload.dataKey || item.dataKey;
        const value = formatFn({
          value: item.value,
          key,
        });

        return (
          <Item key={key}>
            <ColorPreview />
            <Text>{label}</Text> • {value}
          </Item>
        );
      })}
    </TooltipWrapper>
  );
};
