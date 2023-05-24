import React from 'react';

const ItemService = ({ data }) => {
  const orientation =
    data.orientation === 'left'
      ? 'md:flex-row md:text-left'
      : 'md:flex-row-reverse md:text-right';

  return (
    <aside
      className={`flex flex-col items-center text-center px-4 ${orientation} md:px-0 md:gap-x-4`}
    >
      <img src={data.icon} alt={data.title} className='max-w-[180px]' />
      <section className={`mt-6 max-w-lg md:mt-0`}>
        <h2 className='text-app-white font-extrabold text-lg'>{data.title}</h2>
        <p className={`mt-3 text-app-white font-light text-sm`}>
          {data.subTitle}
        </p>
      </section>
    </aside>
  );
};

export default ItemService;
