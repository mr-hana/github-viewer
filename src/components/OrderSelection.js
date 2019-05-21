import React from 'react';
import { Store } from '../store';
import { setSortOrder } from '../actions';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const SortSelection = () => {
  const { state, dispatch } = React.useContext(Store);

  return (
    <>
      <Typography variant="caption">Order by</Typography>
      <RadioGroup
        name="orderRadio"
        value={state.sort.order}
        onChange={e => setSortOrder(e.target.value, dispatch)}
        row
      >
        <FormControlLabel value="asc" control={<Radio />} label="ASC" />
        <FormControlLabel value="desc" control={<Radio />} label="DESC" />
      </RadioGroup>
    </>
  );
};

export default SortSelection;