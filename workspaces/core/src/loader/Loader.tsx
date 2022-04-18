import React from 'react';
import classNames from '../private/utils/classnames';

export type Size = 'twoxsmall' | 'xsmall' | 'small' | 'medium' | 'large';

export type LoaderProps = {
  color?: string;
  size?: string;
};

const loaderSize = (size?: string) => {
  switch (size) {
    case 'twoxsmall':
      return 'w-4 h-4';
    case 'xsmall':
      return 'w-6 h-6';
    case 'small':
      return 'w-8 h-8';
    case 'medium':
      return 'w-10 h-10';
    case 'large':
      return 'w-12 h-12';
    default:
      return;
  }
};

const loaderDivBorder = (size?: string) => {
  switch (size) {
    case 'twoxsmall':
    case 'xsmall':
    case 'small':
      return 'border-2 border-solid';
    case 'medium':
    case 'large':
      return 'border-4 border-solid';
    default:
      return;
  }
};

const Loader: React.FC<LoaderProps> = ({
  color = 'border-hit',
  size = 'medium',
}) => (
  <div className={classNames(loaderSize(size), 'relative rounded-full')}>
    <div
      className={classNames(
        loaderDivBorder(size),
        color,
        'spinner-border animate-spin inline-block w-full h-full rounded-full border-r-transparent'
      )}
    />
  </div>
);
export default Loader;
