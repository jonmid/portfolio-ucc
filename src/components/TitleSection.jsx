import React from 'react';

const TitleSection = ({ title, subTitle }) => {
  return (
    <section className='flex justify-center text-app-white'>
      <aside className='max-w-[680px] text-center'>
        <h1 className='font-semibold text-5xl'>{title}</h1>
        <p className='mt-4 text-lg'>{subTitle}</p>
      </aside>
    </section>
  );
};

export default TitleSection;
