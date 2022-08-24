import React from 'react';
import { rem } from '@heathmont/moon-utils';

const Footer: React.FC<FooterProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'sticky z-1 t-0'}
      style={
        selectable
          ? {
              paddingLeft: rem(46),
              backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

type FooterProps = {
  ref: React.RefObject<any>;
  headerBackgroundColor: string;
  selectable?: boolean;
};

// [HeaderTR]: {
//   '&:first-child': {
//     [TH]: {
//       boxShadow: `inset 0 1px 0 ${rgba(colorNew.trunks, 0.2)}`,
//       '&:first-child': {
//         borderTopLeftRadius: newTokens.borderRadius.surface.small,
//       },
//       '&:last-child': {
//         borderTopRightRadius: newTokens.borderRadius.surface.small,
//       },
//     },
//   },
// },
export default Footer;
