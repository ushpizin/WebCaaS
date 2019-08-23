import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Card, CardContent } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    minHeight: 150,
    margin: theme.spacing(1),
  },
}));

const ActiveContainer = () => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom>10 minutes ago</Typography>
        <Typography variant="h5" component="h2">Container</Typography>
      </CardContent>
    </Card>
  );
};

export default ActiveContainer;
