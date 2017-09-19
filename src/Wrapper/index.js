import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'glamorous';
import { defaultTheme } from '../themes/';

const Wrapper = ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;

Wrapper.propTypes = {
  children: PropTypes.any
};

export default Wrapper;
