import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyle = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    minHeight: 150,
    margin: theme.spacing(1),
  },
}));

const ActiveContainerSkeleton = () => {
  const classes = useStyle();

  return (
    <Skeleton variant="rect" className={classes.card} />
  );
};

const ActiveContainer = (props) => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom>{props.container.uptime}</Typography>
        <Typography variant="h5" component="h2">{props.container.name}</Typography>
      </CardContent>
    </Card>
  );
};

export {
  ActiveContainer,
  ActiveContainerSkeleton,
};
