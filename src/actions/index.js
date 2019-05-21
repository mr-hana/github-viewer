import GithubSearch from '../api/GithubSearch';

export const search = async (keyword, dispatch) => {
  const result = await GithubSearch().fetchRepository(keyword);
  dispatch({
    type: 'SET_REPOSITORY',
    payload: result
  });
};

export const setSortKey = (sortKey, dispatch) => {
  dispatch({
    type: 'SET_SORT',
    payload: {key: sortKey}
  });
};

export const setSortOrder = (order, dispatch) => {
  dispatch({
    type: 'SET_SORT',
    payload: {order: order}
  });
};