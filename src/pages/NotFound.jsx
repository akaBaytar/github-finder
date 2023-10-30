import { Link } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-4xl font-bold mb-4'>Oops!</h1>
          <p className='text-2xl mb-4'>
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <span className='text-sm text-gray-600'>Error code: 404</span>
          <Link to='/' className='flex w-fit mx-auto mt-4 btn btn-primary'>
            <BsHouse className='text-2xl' />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
