import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='sticky bottom-0 mx-auto text-center mt-4 p-2 flex flex-col'>
      <hr className='bg-gradient-to-br from-black to-indigo-700' />
      <div>
        <h3 className='font-light text-zinc-400 text-lg'>Copyrights &copy; 2023.</h3>
        <Link to="/about" className='font-serif text-black hover:text-blue-800 hover:ring-blue-600'>About</Link>
      </div>
    </footer>
  )
}

export default Footer;
