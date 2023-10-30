import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const URL = 'https://api.github.com';
const TOKEN = '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';

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const {items} = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, searchUsers, clearUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GithubContext;
