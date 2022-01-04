import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonCommonStyles = ({ iconSize, disabled }: ButtonProps) => {
  const theme = useTheme();
  return [
    {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: theme.newTokens.fontWeight.semibold,
      borderRadius: rem(theme.radius.largest),
      textDecoration: 'none',
      fontFamily: 'inherit',
      overflow: 'hidden',
      userSelect: 'none',
      outline: 'none',
      transition: `all ${theme.newTokens.transition.default}`,
      '&:active': {
        transform: theme.newTokens.transform.active,
      },
      img: {
        display: 'block',
        width: rem(iconSize),
        height: rem(iconSize),
      },
      svg: {
        display: 'block',
        width: rem(iconSize),
        height: rem(iconSize),
      },
      '&:focus': {
        boxShadow: theme.newTokens.focus,
      },
    },
    disabled && {
      opacity: theme.newTokens.opacity.disabled,
      cursor: 'not-allowed',
    },
  ];
};

export default buttonCommonStyles;