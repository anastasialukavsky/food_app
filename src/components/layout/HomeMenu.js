import React from 'react';
import Image from 'next/image';
import HomeMenuItems from './HomeMenuItems';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section className='pt-20'>
      <div className='absolute left-0 right-0 justify-start  w-full'>
        <div className='h-[450px] w-[450px] absolute -left-36'>
          <Image
            src={'/salad_left_2.png'}
            layout={'fill'}
            objectFit={'contain'}
            alt={'salad'}
          ></Image>
        </div>
        <div className='h-[450px] w-[450px] absolute -right-48 '>
          <Image
            src={'/salad_right_2.png'}
            layout={'fill'}
            objectFit={'contain'}
            alt={'salad'}
          ></Image>
        </div>
      </div>
      <div className='text-center'>
        <SectionHeaders subheader={'check out'} mainHeader={'Menu'} />
      </div>
      <div className='grid grid-cols-3 gap-4 pt-20'>
        <HomeMenuItems />
        <HomeMenuItems />
        <HomeMenuItems />
        <HomeMenuItems />
        <HomeMenuItems />
        <HomeMenuItems />
      </div>
    </section>
  );
}
