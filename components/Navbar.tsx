import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4'>
       <Link href="/" className='flex justify-center item-center'>
        <Image
         src="/logo.svg"
         alt="navbar-logo"
         width={118}
         height={118}
        ></Image>
       </Link>

      <CustomButton
       title="Sign In"
       containerStyle="text-primary-blue bg-white rounded full mit-w-[130px]"
      btnType='button'
      ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;