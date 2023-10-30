import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter username.');
    } else {
      searchUsers(text);
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
          <button type='button' className='btn w-24' onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
