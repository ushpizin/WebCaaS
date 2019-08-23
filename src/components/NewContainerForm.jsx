import React from 'react';
import {
  Button, Card, TextField, makeStyles,
} from '@material-ui/core';
import CloudIcon from '@material-ui/icons/CloudQueue';

const useStyles = makeStyles((theme) => ({
  card: {
    background: 'rgba(0,0,0,0.5)',
    padding: theme.spacing(3, 5),
    borderRadius: 3,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rightIcon: {
    marginRight: theme.spacing(1),
  },
}));

const NewContainerForm = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <form noValidate autoComplete="off">
        <TextField margin="normal" fullWidth variant="outlined" label="Container Name" />
        <Button className={classes.submit} fullWidth variant="contained" color="primary">
          <CloudIcon className={classes.rightIcon} />
          {' '}
          Execute
        </Button>
      </form>
    </Card>
  );
};

export default NewContainerForm;
