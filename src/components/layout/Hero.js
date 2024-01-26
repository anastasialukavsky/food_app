import React from 'react';
import Image from 'next/image';
import RightArrow from '../icons/RightArrow';

export function Hero() {
  return (
    <section className='hero px-10 pt-16'>
      <div className='py-20 pr-10'>
        <h1 className='text-5xl font-semibold text-gray-800 leading-[50px]'>
          Everything is better with a{' '}
          <span className='text-primary'>pizza</span>
        </h1>
        <p className='my-10 text-gray-500 text-sm'>
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className='flex gap-4 items-center text-sm'>
          <button className='bg-primary uppercase items-center  flex gap-2 text-white px-4 py-2 rounded-full'>
            Order Now
            <RightArrow />
          </button>
          <button className='flex items-center gap-2 text-gray-400 font-semibold'>
            Learn More
            <RightArrow />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/hero_p.png'}
          className=''
          // height={600}
          // width={400}
          objectFit='contain'
          layout={'fill'}
          alt='Margherita Pizza'
        />
      </div>
    </section>
  );
}
