import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';

import GithubContext from '../context/github/GithubContext';
import { getUser, getRepos } from '../context/github/GithubActions';

import { BsPeople, BsPerson, BsBraces, BsShopWindow } from 'react-icons/bs';

const User = () => {
  const { user, repos, isLoading, dispatch } = useContext(GithubContext);

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
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({ type: 'GET_USER', payload: userData });

      const reposData = await getRepos(params.login);
      dispatch({ type: 'GET_REPOS', payload: reposData });
    };

    getUserData();
  }, [dispatch, params.login]);

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
            <div className='rounded-lg shadow-md bg-base-100 flex flex-col md:flex-row gap-4 md:gap-8'>
              {location && (
                <div className='px-2 pb-1'>
                  <h4 className='stat-title text-md'>Location</h4>
                  <p className='text-base stat-value'>{location}</p>
                </div>
              )}
              {blog && (
                <div className='px-2 pb-1'>
                  <h4 className='stat-title text-md'>Website</h4>
                  <a
                    href={`https://${blog}`}
                    target='_blank'
                    rel='noreferrer'
                    className='text-base stat-value'>
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className='px-2 pb-1'>
                  <h4 className='stat-title text-md'>Twitter</h4>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                    className='text-base stat-value'>
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='stats flex flex-col lg:flex-row gap-4 py-4 mb-6 rounded-lg shadow-md bg-base-100'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <BsPeople className='text-3xl' />
          </div>
          <h4 className='stat-title pr-5'>Followers</h4>
          <p className='stat-value pr-5 text-3xl'>{followers}</p>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <BsPerson className='text-3xl' />
          </div>
          <h4 className='stat-title pr-5'>Following</h4>
          <p className='stat-value pr-5 text-3xl'>{following}</p>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <BsBraces className='text-3xl' />
          </div>
          <h4 className='stat-title pr-5'>Public Repos</h4>
          <p className='stat-value pr-5 text-3xl'>{public_repos}</p>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <BsShopWindow className='text-3xl' />
          </div>
          <h4 className='stat-title pr-5'>Public Gists</h4>
          <p className='stat-value pr-5 text-3xl'>{public_gists}</p>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
};

export default User;
