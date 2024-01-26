import { Header, Hero } from '@/components/layout';
import AboutSection from '@/components/layout/AboutSection';
import ContactSection from '@/components/layout/ContactSection';
import Footer from '@/components/layout/Footer';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />

      <section className='text-center mt-20'>
        <SectionHeaders subheader={'our Story'} mainHeader={'About Us'} />
        <AboutSection />
      </section>

      <section className='text-center mt-20'>
        <SectionHeaders
          subheader={"don't hesitate"}
          mainHeader={'Contact Us'}
        />
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}
