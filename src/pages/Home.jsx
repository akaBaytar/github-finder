import UserResults from '../components/user/UserResults';
import UserSearch from '../components/user/UserSearch';

const Home = () => {
  return (
    <div className='flex flex-col gap-6 px-2 mx-2'>
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
