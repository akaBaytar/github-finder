import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GithubContext;
