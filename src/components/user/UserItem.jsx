import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Link className='card shadow-md compact bg-base-200' to={`/users/${login}`}>
      <div className='flex-row items-center gap-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full ring-2 w-12 h-12'>
            <img src={avatar_url} alt='User Avatar' />
          </div>
        </div>
        <div>
          <h2 className='card-title w-32'>{login}</h2>
          <p className='text-base-content text-opacity-40'>Visit Profile</p>
        </div>
      </div>
    </Link>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
