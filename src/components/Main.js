import React from 'react';
import { Store } from '../store';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import SearchResult from '../components/SearchResult';
import SearchBox from '../components/SearchBox';

const styles = {
  root: {
    padding: '10px 20px',
  },
};

const Main = props => {
  const { classes } = props;
  const { state } = React.useContext(Store);

  return (
    <div className={classes.root}>
      <SearchBox />
      <SearchResult repositories={state.repositories} sort={state.sort} />
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
