import { css } from 'glamor';

const globalStyle = {
  'body, html': {
    margin: 0,
    boxSizing: 'border-box',
    backgroundColor: '#FAFAFA'
  },
  a: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit',
    padding: 0,
    fontFamily: 'Helvetica',
    boxSizing: 'border-box',
  },
  '*': {
    boxSizing: 'inherit',
  }
};

Object.keys(globalStyle).forEach((selector) => {
  const style = globalStyle[selector];

  css.global(selector, style);
});
