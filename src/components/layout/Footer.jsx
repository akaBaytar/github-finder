import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer-center p-2 text-xs bg-neutral text-neutral-content'>
      <BsGithub className='text-4xl mx-auto mb-2' />
      <p className='mb-2'>Copyright &copy; {year} Powered by Burak BİLGİLİ.</p>
    </footer>
  );
};

export default Footer;
