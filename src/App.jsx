import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <div>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Gallery />
          <Testimonials />
          <InstagramSection />
          <Footer />
        </main>
        <WhatsAppFloat />
      </div>
    </>
  );
}
