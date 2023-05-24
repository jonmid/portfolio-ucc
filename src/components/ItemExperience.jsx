import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

const ItemExperience = ({ data }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <article className='flex justify-center'>
            <aside className='flex flex-col items-center px-6 py-8 w-96 bg-app-accent-500 rounded-lg'>
              <p className='text-center text-base font-semibold text-app-accent-800'>
                {item.description}
              </p>
              <img src={item.icon} alt='avatar' className='mt-8 w-16 h-16' />
              <h6 className='mt-3 font-semibold text-app-accent-900'>
                {item.clientName}
              </h6>
            </aside>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemExperience;
