// @ts-nocheck
import React from 'react';
import { Loader } from '@heathmont/moon-core-tw';
import {
  GenericDownload,
  ControlsDiagonalsOutsight,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-themes';
import classNames from "./private/classNames"
import { ContainerProps, ButtonProps, Props } from './types/PanelProps';

const Button: React.FC<ButtonProps> = ({ hasUpdates, children, isActive }) => {
  return (
    <button
      className={classNames(
        `border-none bg-none outline-none cursor-pointer flex text-center justify-center relative w-8 h-8 p-2 text-base color-trunks`,
        `before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0`,
        `before:ease-in-out before:duration-200 before:bg-piccolo before:rounded-md before:opacity-0 before:scale-0 before:transition-transform before:transition-opacity`,
        `hover:color-piccolo focus:color-piccolo before:scale-100 before:opacity-10`,
        hasUpdates
          ? `after:content-[''] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:rounded-lg after:bg-piccolo`
          : '',
        isActive ? `color-goten after:bg-goten ` : ``
      )}
    >
      {children}
    </button>
  );
};

const Container: React.FC<ContainerProps> = ({ isActive, children }) => {
  return (
    <button
      className={classNames(
        `flex flex-col p-4`,
        isActive
          ? 'color-goten bg-piccolo'
          : 'color-bulma bg-gohan rounded-2xl w-full'
      )}
    >
      {children}
    </button>
  );
};

const Header = ({ children }) => {
  return (
    <div
      className={classNames(`grid gap-4 shrink-0  grid-cols-4 min-h-[24px]`)}
    >
      {children}
    </div>
  );
};

const IconRefreshStyled = ({ ArrowsUpdate, children }) => {
  return (
    <ArrowsUpdate className={classNames(`rotate-90`)}>{children}</ArrowsUpdate>
  );
};

export const Panel: React.FC<Props> = ({
  onUpdate,
  onShare,
  onExpand,
  children,
  height,
  hasUpdates,
  isUpdating,
  isActive = false,
}) => (
  <Container isActive={isActive} height={{ height }}>
    <Header>
      {onUpdate && (
        <Button
          hasUpdates={hasUpdates && !isUpdating}
          onClick={() => onUpdate()}
        >
          {isUpdating ? (
            <Loader size="twoxsmall" color="piccolo.100" />
          ) : (
            <IconRefreshStyled />
          )}
        </Button>
      )}
      <div />
      {onShare && (
        <Button onClick={() => onShare()}>
          <GenericDownload fontSize={rem(24)} />
        </Button>
      )}
      {onExpand && (
        <Button onClick={() => onExpand()}>
          <ControlsDiagonalsOutsight fontSize={rem(24)} />
        </Button>
      )}
    </Header>
    {children}
  </Container>
);
