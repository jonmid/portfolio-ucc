import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Experience from '../sections/Experience';

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Layout> */}
      <Services />
      <Experience />
      {/* </Layout> */}
    </>
  );
}

export default App;
