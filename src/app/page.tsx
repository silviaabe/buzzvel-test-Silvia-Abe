'use client';

import Hero2 from '@/components/FeaturesSection';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Section from '@/components/Section';
import FeaturesSection from '@/components/FeaturesSection';
//               </summary>
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <Testimonials />
      <Section />
      <FeaturesSection />
      {/* <Footer /> */}
    </>
  );
}
