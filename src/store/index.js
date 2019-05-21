import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  sort: {
    key: 'stargazers_count',
    order: 'desc'
  },
  repositories: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_REPOSITORY':
      return { ...state, repositories: action.payload };
    case 'SET_SORT':
      return {
        ...state,
        sort: { ...state.sort, ...action.payload }
      };
    default:
      return state;
  }
}

export const Store = React.createContext();
export const StoreProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired
};
