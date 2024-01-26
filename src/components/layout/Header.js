import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className='flex items-center justify-between'>
      <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link href='' className='text-primary font-semibold text-4xl '>
          PIZZA PLACE
        </Link>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link
          href={'/login'}
          className='bg-primary rounded-full text-white px-8 py-2'
        >
          Login
        </Link>
        <Link href={'/signup'}>Sign Up</Link>
      </nav>
    </header>
  );
}
