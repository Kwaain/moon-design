import { ColorNames } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const BodyTR = styled.div<{
  onClick?: () => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastRow?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean;
  customBackground?: boolean;
  backgroundColor?: ColorNames;
  fontColor?: ColorNames;
}>(
  ({
    theme,
    onClick,
    withOffset,
    isExpanded,
    hasChildren,
    hasParent,
    isLastNestedRow,
    isLastRow,
    depth = 0,
  }) => ({
    marginTop: withOffset ? rem(8) : rem(2),
    position: 'relative',
    '&:first-child': {
      marginTop: 0,
    },
    '&:focus-visible': {
      outline: 'none',
      // [TD]: {
      //   borderTop: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
      //   borderBottom: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
      //   boxSizing: 'border-box',
      //   '&:first-child': {
      //     borderLeft: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
      //   },
      //   '&:last-child': {
      //     borderRight: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
      //   },
      // },
    },
    ...(onClick
      ? {
          '&:hover': {
            cursor: 'pointer',
            // [TD]: {
            //   backgroundColor: tint(0.88, theme.colorNew.piccolo),
            //   borderTop: `${rem(4)} solid ${tint(
            //     0.88,
            //     theme.colorNew.piccolo
            //   )}`,
            //   borderBottom: `${rem(4)} solid ${tint(
            //     0.88,
            //     theme.colorNew.piccolo
            //   )}`,
            //   boxSizing: 'border-box',
            //   '&:first-child': {
            //     borderLeft: `${rem(4)} solid ${tint(
            //       0.88,
            //       theme.colorNew.piccolo
            //     )}`,
            //   },
            //   '&:last-child': {
            //     borderRight: `${rem(4)} solid ${tint(
            //       0.88,
            //       theme.colorNew.piccolo
            //     )}`,
            //   },
            // },
          },
        }
      : {}),
    ...((hasChildren && !isExpanded) || isLastNestedRow
      ? {
          position: 'relative',
          '&:after': {
            content: '""',
            height: '1px',
            width: `calc(100% - ${rem(24 + 24 * (depth + 1))})`,
            position: 'absolute',
            bottom: 0,
            right: rem(24),
            background: theme.colorNew.beerus,
          },
        }
      : {}),

    ...(hasParent
      ? {
          marginTop: 0,
        }
      : {}),
    ...(isLastRow
      ? {
          '&:after': {
            display: 'none',
          },
        }
      : {}),
  })
);

export default BodyTR;
