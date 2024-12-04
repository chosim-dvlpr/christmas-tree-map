import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const Layout = style({
  height: '100%',
  zIndex: 100,
});

export const BarContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '0',
  left: '0',

  width: '100%',
  height: '33px',
  padding: '10px 0',

  borderRadius: '30px 30px 0 0',

  backgroundColor: vars.colors.white,
});

export const Bar = style({
  width: '50px',
  height: '2px',

  borderRadius: '1px',
  backgroundColor: vars.colors.primary[800],
});

export const Backdrop = style({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 100,

  width: '100%',
  height: '100%',
});

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'fixed',
  top: '20vh',
  zIndex: 200,

  width: '100%',
  height: '100%',

  padding: '33px 24px',

  borderRadius: '30px 30px 0 0',

  boxShadow: '6px 0 30px 0 rgba(0, 0, 0, 0.12), 12px 0px 38px 0 rgba(0, 0, 0, 0.08)',
  backgroundColor: vars.colors.primary[900],
});

export const ContentWrapper = style({
  overflowY: 'scroll',
  msOverflowStyle: 'none' /* 엣지 */,
  scrollbarWidth: 'none' /* 파이어폭스 */,
  WebkitOverflowScrolling: 'touch',

  zIndex: 300,

  width: '100%',
  height: '100%',
  padding: '17px 0',

  /* 크롬, 사파리, 오페라 */
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
