import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const GithubContext = createContext()

const URL = 'https://api.github.com';
const TOKEN = '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';

export const GithubProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${URL}/users`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  return <GithubContext.Provider value={{users, isLoading, fetchUsers}}>
    {children}
  </GithubContext.Provider>
}

GithubProvider.propTypes = {
  children: PropTypes.object.isRequired
}

export default GithubContext