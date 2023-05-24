import React from 'react';

export const LayoutHeader = ({ children }) => {
  return (
    <div className='flex justify-between items-center mx-auto px-4 max-w-[1140px] font-roboto xl:px-0'>
      {children}
    </div>
  );
};

export const LayoutHero = ({ children }) => {
  return <div className='mx-auto max-w-[990px] lg:px-5'>{children}</div>;
};

export const Layout = ({ children, black = false }) => {
  // return <main className='mx-auto max-w-[990px]'>{children}</main>;
  return (
    <div
      className={`w-full pt-28 ${
        black ? 'bg-app-black-901' : 'bg-app-black-900'
      }`}
    >
      <main className='mx-auto max-w-[990px]'>{children}</main>
    </div>
  );
};
