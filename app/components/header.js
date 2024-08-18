import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Header = ({ username }) => {
  return (
    <nav className='bg-gradient-to-r from-blue-700 to-indigo-800 py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/'>
          <div className='text-xl font-extrabold text-white tracking-widest cursor-pointer hover:text-gray-200 transition duration-200'>
            Clerk App
          </div>
        </Link>
        <div className='flex items-center space-x-6'>
          <Link href='/sign-in'>
            <a className='text-gray-200 hover:text-white transition duration-200 text-sm font-medium'>
              Sign In
            </a>
          </Link>
          <Link href='/sign-up'>
            <a className='bg-white text-blue-700 hover:bg-gray-100 transition duration-200 text-sm font-semibold py-2 px-4 rounded-lg shadow'>
              Sign Up
            </a>
          </Link>
          <div className='ml-4'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
