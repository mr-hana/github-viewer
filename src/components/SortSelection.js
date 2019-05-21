import React from 'react';
import { Store } from '../store';
import { setSortKey } from '../actions';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const SortSelection = () => {
  const { state, dispatch } = React.useContext(Store);

  return (
    <>
      <Typography variant="caption">Sort by</Typography>
      <RadioGroup
        name="sortKeyRadio"
        value={state.sort.key}
        onChange={e => setSortKey(e.target.value, dispatch)}
        row
      >
        <FormControlLabel value="stargazers_count" control={<Radio />} label="Star" />
        <FormControlLabel value="updated_at" control={<Radio />} label="Updated" />
      </RadioGroup>
    </>
  );
};

export default SortSelection;