import React from 'react';
import classNames from '../../private/utils/classnames';

interface SlideProps {
  className?: string;
  slidesOnly?: boolean;
  children: React.ReactNode;
  ref: any;
}

const Slide: React.FC<SlideProps> = ({ className = '', slidesOnly, children, ref }) => {
  return (
    <li className={classNames(
        'h-full bg-popo text-gohan flex items-center justify-center w-20 mr-2',
        className,
        slidesOnly ? 'w-full' : '',
        slidesOnly ? '' : 'rounded-xl'
      )}
    >
      {children}
    </li>
  );
};

export default Slide;