import React from 'react';
import { ServiceData } from '../data/data.js';
import { Layout } from './../components/Layout';
import TitleSection from './../components/TitleSection';
import ItemService from './../components/ItemService';

const Services = () => {
  return (
    <Layout>
      <TitleSection
        title={ServiceData.header.title}
        subTitle={ServiceData.header.subTitle}
      />
      <section className='mb-28'>
        <ul className='flex flex-col px-4 pt-[80px] gap-y-[80px] lg:px-0'>
          {ServiceData.items.map((item) => (
            <ItemService key={item.id} data={item} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Services;
