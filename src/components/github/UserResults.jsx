import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

export const URL = 'https://api.github.com';
export const TOKEN = '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';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

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

  if (!isLoading) {
    return (
      <div className='grid gap-8 mx-2 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map(({ id, login }) => (
          <h3 key={id}>{login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
