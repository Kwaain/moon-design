import React from 'react';
import { Text } from '@heathmont/moon-core';
import { Props, ColorPreviewProps } from './types/TooltipProps';
import classNames from '../../../../../../next-docs/utils/classNames';

export const TooltipWrapper: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'inline-block text-goten bg-goten text-xs leading-4 p-3 rounded relative shadow-lg pointer-events-none'
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
        'w-2 h-2 rounded-[50%] absolute top-2/4 left-0 -translate-x-1/2',
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
            <ColorPreview background={color} />
            <Text size={12} as="span">
              {label}
            </Text>{' '}
            • {value}
          </Item>
        );
      })}
    </TooltipWrapper>
  );
};
