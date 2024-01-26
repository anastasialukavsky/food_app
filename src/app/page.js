import { Header, Hero } from '@/components/layout';
import HomeMenu from '@/components/layout/HomeMenu';
import React from 'react';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu/>
    </>
  );
}
