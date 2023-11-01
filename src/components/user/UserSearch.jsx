import { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

import { searchUsers } from '../../context/github/GithubActions';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter an username', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  return (
    <div className='flex gap-4'>
      <div className='w-full'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                id='profile-search'
                type='text'
                className='input w-full text-black bg-gray-200'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='btn w-24 absolute top-0 right-[-1px] rounded-l-none'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            type='button'
            className='btn w-24'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
