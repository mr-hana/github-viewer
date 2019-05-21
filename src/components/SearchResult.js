import React from 'react';
import PropTypes from 'prop-types';
import RepositoryInfo from '../components/RepositoryInfo';

const createCompare = (name, direction) => {
  const comparison = (direction === 'asc') ? 1 : -1;
  return (current, next) => {
    if (current[name] < next[name]) {
      return -comparison;
    } else if (current[name] > next[name]) {
      return comparison;
    } else {
      return 0;
    }
  }
};

const SearchResult = props => {
  const { repositories, sort } = props;
  const compare = createCompare(sort.key, sort.order);
  const items = repositories
    .sort(compare)
    .map(item => <RepositoryInfo key={item.id} data={item} />);

  return (
    <div>
      {items}
    </div>
  );
};

SearchResult.propTypes = {
  repositories: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
};
export default SearchResult;