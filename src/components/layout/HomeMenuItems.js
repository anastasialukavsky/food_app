import React from 'react';

export default function HomeMenuItems() {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-gray-800'>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={'/pp_product.png'} alt='pizza' />
      <h4 className='font-semibold my-4 text-gray-700 text-xl'>
        Pepperoni Pizza
      </h4>
      <p className='text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id deserunt
        nam, repudiandae delectus asperiores accusamus eum velit maxime totam
        iusto magnam, aperiam mollitia beatae sed! Esse exercitationem debitis
        corporis voluptatum.
      </p>
      <button className='btn-styles mt-4'>Add to cart $12</button>
    </div>
  );
}
