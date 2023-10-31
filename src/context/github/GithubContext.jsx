import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const URL = 'https://api.github.com';
const TOKEN = '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';

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${URL}/users/${login}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: 'GET_USER',
      payload: data,
    });
  };

  // clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
  //set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        getUser,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GithubContext;
