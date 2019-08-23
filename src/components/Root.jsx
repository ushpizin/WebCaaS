import React from 'react';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: '#02040f',
                },
            },
        },
    },
});

export default function Root(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </MuiThemeProvider>
    );
}
