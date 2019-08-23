import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box, Container } from '@material-ui/core';

import NewContainerForm from './NewContainerForm';
import ActiveContainer from './ActiveContainer';

const useStyle = makeStyles(theme => ({
    content: {
        padding: theme.spacing(8, 0, 6),
    },
}));

const Home = () => {
    const classes = useStyle();

    return (
        <React.Fragment>
            <Container component="main" className={classes.content}>
                <Typography variant="h2">New Container</Typography>
                <br/>
                <NewContainerForm />
            </Container>

            <Container component="main" className={classes.content}>
                <Typography variant="h2">
                    Active Containers
                </Typography>

                <Box display="flex" flexWrap="wrap">
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                    <ActiveContainer />
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Home;
