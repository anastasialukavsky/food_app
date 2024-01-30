'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <section className='mt-20'>
      <h1 className='text-center text-primary text-4xl'>Sign Up</h1>
      <form className='w-96 block mx-auto' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn-styles w-full mx-auto block'>
          Register
        </button>
        <section>
          <p className='text-center pt-2 text-gray-600 text-xs'>
            or login with provider
          </p>
          <button className='form-btn flex justify-center gap-4 items-center font-semibold'>
            <Image
              src={'/google_icon.png'}
              height={'28'}
              width={'28'}
              alt='Google Login'
            />
            Login with Google
          </button>
        </section>
      </form>
    </section>
  );
}
