import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#02040f',
        },
      },
    },
  },
});

const Root = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
