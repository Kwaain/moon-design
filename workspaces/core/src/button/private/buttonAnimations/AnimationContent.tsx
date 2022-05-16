import React from 'react';
import Loader from '../../../loader/Loader';
import GenericCheckAlternative from '../../../private/icons/GenericCheckAlternative';
import type { ButtonProps } from '../../Button';

const AnimationContent: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  animation,
}) => (
  <div className="relative h-full pointer-events-none">
    <div className="flex absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] content-center justify-center">
      {animation === 'progress' && (
        <Loader color="currentColor" size="xsmall" />
      )}
      {animation === 'success' && <GenericCheckAlternative fontSize="1.5rem" />}
    </div>
    <div className="opacity-0">
      {iconLeft}
      {children}
      {iconRight}
      {iconOnly}
    </div>
  </div>
);

export default AnimationContent;
