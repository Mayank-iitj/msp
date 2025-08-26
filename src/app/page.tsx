import Navigation from '@/components/sections/navigation';
import ServicesTicker from '@/components/sections/services-ticker';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import KeyMetrics from '@/components/sections/key-metrics';
import Awards from '@/components/sections/awards';
import Testimonials from '@/components/sections/testimonials';
import Services from '@/components/sections/services';
import PriceRequestSection from '@/components/sections/price-request';
import Projects from '@/components/sections/projects';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20">
        <ServicesTicker />
        <HeroSection />
        <AboutSection />
        <KeyMetrics />
        <Awards />
        <Testimonials />
        <Services />
        <PriceRequestSection />
        <Projects />
      </div>

      {/* Watermark */}
      <div className="fixed bottom-4 right-4 z-40 text-white/50 text-sm font-body">
        Led by Mayank Sharma
      </div>
    </main>
  );
}