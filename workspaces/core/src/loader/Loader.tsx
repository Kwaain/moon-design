import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import setDivBorder from './private/utils/setDivBorder';
import setSize from './private/utils/setSize';
import type LoaderProps from './private/types/LoaderProps';

const Loader: React.FC<LoaderProps> = ({
  color = 'border-hit',
  size = 'md',
  ariaLabel = 'loading',
}) => (
  <div
    aria-label={ariaLabel}
    aria-busy="true"
    className={mergeClassnames(setSize(size), 'relative rounded-full')}
  >
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.45s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.3s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      style={{ animationDelay: '-0.15s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'block absolute w-full h-full rounded-[50%] animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-r-transparent border-b-transparent border-l-transparent'
      )}
      role="presentation"
    />
  </div>
);

export default Loader;
