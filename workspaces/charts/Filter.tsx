import React, { useState, useRef, useEffect } from 'react';
import { FilterDropdown } from '@heathmont/moon-components';
import { ControlsChevronDown } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-themes';
import { useClickAway, useKey } from 'react-use';
import classNames from '../../next-docs/utils/classNames';
import {
  ContainerProps,
  DropdownWrapperProps,
  Props,
  ToggleProps,
} from './private/types/FilterProps';
//check z-index on 35 line

// const Title = styled(Text)(({ theme }) => ({
//   color: theme.colorNew.trunks,
// }));

const Toggle: React.FC<ToggleProps> = ({ isOpen, theme, children }) => {
  return (
    <button
      className={classNames(
        'flex items-center text-xs rounded-moon-s-sm h-max flex flex-col items-center',
        'bg-none border-none p-0 m-0 cursor-pointer',
        isOpen
          ? `text-${theme.colorNew.piccolo}`
          : `text-${theme.colorNre.trunks}`,
        'first:mr-2'
      )}
    >
      {children}
    </button>
  );
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={classNames('inline-block relative')}>{children}</div>;
};

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  theme,
  children,
}) => {
  return (
    <div
      className={classNames(
        'absolute top-full left-1/2	-translate-x-1/2	pt-2 ',
        `text-${theme.colorNew.bulma} z-${theme.newTokens.zIndex.toggle}`
      )}
    >
      {children}
    </div>
  );
};

const Filter: React.FC<Props> = ({ forceOpen = false, title, children }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(forceOpen);
  useClickAway(ref, () => setIsOpen(false));
  useKey('Escape', () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [setIsOpen, forceOpen]);

  return (
    <Container ref={ref}>
      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {/* <Title size={14}> */}
          {title}
          {/* </Title> */}
        <ControlsChevronDown fontSize={rem(24)} />
      </Toggle>
      {isOpen && (
        <DropdownWrapper>
          <FilterDropdown>{children({ setIsOpen })}</FilterDropdown>
        </DropdownWrapper>
      )}
    </Container>
  );
};

export default Filter;
