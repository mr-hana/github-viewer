import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeywordInput from './KeywordInput';
import SortSelection from './SortSelection';
import OrderSelection from './OrderSelection';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    padding: '10px 20px',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  input: {
    flexGrow: 1,
    paddingRight: 20
  },
  button: {
    padding: 10,
  },
};

const SearchBox = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h6">Search the repository from Github.</Typography>
          <Typography variant="body1">Get up to 30 repositories with matching keywords and names.</Typography>
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
          <KeywordInput />
        </Grid>
        <Grid item xs={9}>
          <SortSelection />
        </Grid>
        <Grid item xs={3}>
          <OrderSelection />
        </Grid>
      </Grid>
    </Paper>
  );

}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBox);