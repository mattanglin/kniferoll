import palette from './palette';

export const defaultTheme = {
  paddingBase: 1,
  marginBase: 1,
  borderBase: 1,
  fontBase: 1,
  borderRadiusBase: 4.5,
  animationDurationBase: 0,
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.17)',
  colors: {
    primary: palette.black,
    primaryInverse: palette.white,
    primaryLight: palette.grey,
    primaryVeryLight: palette.lightGrey,
    secondary: palette.white,
    secondaryInverse: palette.black,
    tertiary: palette.lightGrey,
    tertiaryInverse: palette.white,
    disabled: palette.lightGrey,
    success: palette.green,
    successInverse: palette.green,
    confirmation: palette.lightGreen,
    confirmationInverse: palette.lightGreen,
    error: palette.red,
    errorInverse: palette.red,
  },
  palette,
  font: {
    baseFamily: 'HelveticaLightCn',
    baseSize: '12px',
    headerFamily: 'TradeGothicLTStd-BdCn20'
  },
};
