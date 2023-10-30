import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-screen'>
      <img
        className='mx-auto'
        src={spinner}
        alt='Loading...'
        width={180}
      />
    </div>
  );
};

export default Spinner;
