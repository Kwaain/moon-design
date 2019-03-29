import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';

const desktopHidden: CSSObject = {
  display: 'inline',
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
};

const rowContent: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing('small'),
  [mq(breakpoints.medium)]: {
    marginBottom: 0,
    justifyContent: 'flex-end',
    '> p': {
      [mq(breakpoints.medium)]: {
        width: rem(244),
        textAlign: 'right',
      },
    },
  },
};

const columnContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  marginBottom: spacing('small'),
};

const desktopMargins: CSSObject = {
  [mq(breakpoints.medium)]: {
    marginBottom: spacing('large'),
  },
};

export const Title = styled.p({
  color: colors.neutral[20],
  marginTop: 0,
  marginBottom: spacing('small'),
  width: 'fit-content',
});

export const Text = styled.p({
  color: colors.neutral[10],
  marginTop: 0,
  marginBottom: spacing('small'),
});

export const DateDetails = styled.div([desktopHidden, rowContent]);

export const CurrencyDetails = styled.div([desktopHidden, rowContent]);

export const Provider = styled.div([columnContent, desktopMargins]);

export const TimeOfTransaction = styled.div([columnContent]);

export const ProcessingFee = styled.div([rowContent]);

export const AmountSpent = styled.div([rowContent]);

export const RateApplied = styled.div([rowContent, desktopMargins]);

export const BalanceAfter = styled.div([rowContent]);

export const ResumeTransaction = styled.div([
  rowContent,
  {
    marginTop: spacing(),
    [mq(breakpoints.medium)]: {
      marginLeft: 'auto',
      width: 'fit-content',
      whiteSpace: 'nowrap',
    },
  },
]);
