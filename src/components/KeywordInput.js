import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Store } from '../store';
import { search } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  input: {
    flexGrow: 1,
    paddingRight: 20
  },
  button: {
    padding: 10,
  },
};

const KeywordInput = props => {
  const { classes } = props;
  const [keyword, setKeyword] = React.useState('');
  const { dispatch } = React.useContext(Store);
  const isEmpty = () => keyword === '';

  return (
    <>
      <TextField label="Keyword" className={classes.input} value={keyword} onChange={e => setKeyword(e.target.value)} />
      <Button variant="contained" color="primary" className={classes.button} disabled={isEmpty()} onClick={() => search(keyword, dispatch)}>
        Search
      </Button>
    </>
  );
};

KeywordInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeywordInput);