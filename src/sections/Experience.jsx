import React from 'react';
import { Layout } from './../components/Layout';
import { ExperienceData } from '../data/data.js';
import TitleSection from '../components/TitleSection';
import ItemExperience from '../components/ItemExperience';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Experience = () => {
  return (
    <Layout black={true}>
      <TitleSection
        title={ExperienceData.header.title}
        subTitle={ExperienceData.header.subTitle}
      />
      <section className='pt-[80px] pb-28'>
        <ItemExperience data={ExperienceData.items} />
      </section>
    </Layout>
  );
};

export default Experience;
