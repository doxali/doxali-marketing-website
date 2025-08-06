import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Demo from '../components/Demo';
import Difference from '../components/Difference';
import Feature from '../components/Feature'; // 🔁 moved above HowItWorks
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Faq from '../components/FAQHome';
import Newsletter from '../components/Newsletter';
import Trust from '../components/Trust';
import Testimonials from '../components/Testimonials';
import Newsletter2 from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Doxali | AI Powered Document Intelligence</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Demo />
        <Difference />
        <Feature />       {/* ✅ Now above HowItWorks */}
        <HowItWorks />
        <Pricing />       {/* ✅ Still before FAQ */}
        <Faq />
        <Newsletter />
        <Trust />
        <Testimonials />
        <Newsletter2 />
        <Footer />
      </main>
    </>
  );
}