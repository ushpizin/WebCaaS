import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Container } from '@material-ui/core';

import ActiveContainersTable from './ActiveContainersTable';
import NewContainerForm from './NewContainerForm';

const useStyle = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Home = () => {
  const classes = useStyle();

  return (
    <>
      <Container component="main" className={classes.content}>
        <Typography variant="h2">New Container</Typography>
        <br />
        <NewContainerForm />
      </Container>

      <Container component="main" className={classes.content}>
        <Typography variant="h2">
                    Active Containers
        </Typography>

        <ActiveContainersTable />
      </Container>
    </>
  );
};

export default Home;
