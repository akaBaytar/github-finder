import { useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (!isLoading) {
    return (
      <div className='user-list'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
