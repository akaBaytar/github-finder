/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { getUser, user, isLoading } = useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='mx-2 px-2'>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn'>
            Back to Search
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='card-img mb-6 md:mb-0'>
            <div className='card rounded-lg shadow-xl image-full'>
              <figure>
                <img src={avatar_url} alt={login} />
              </figure>
              <div className='card-body justify-end'>
                <div className='card-title flex-col items-start gap-0 text-white'>
                  <h2 className='text-2xl'>{name}</h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'>
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
