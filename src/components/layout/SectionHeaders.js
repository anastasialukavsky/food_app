import React from 'react'

export default function SectionHeaders({subheader, mainHeader}) {
  return (
    <>
      <h3 className='uppercase text-gray-500 font-semibold leading-4 '>
        {subheader}
      </h3>
      <h2 className='font-bold text-primary text-4xl '>{mainHeader}</h2>
    </>
  );
}
