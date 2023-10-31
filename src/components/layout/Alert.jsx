import { useContext } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className='flex items-center mx-2 px-2 mb-2 gap-1 text-warning'>
        {alert.type === 'error' && <BiInfoCircle className='text-xl' />}
        <strong className='text-sm font-semibold italic'>
          {alert.message}
        </strong>
      </p>
    )
  );
};

export default Alert;
