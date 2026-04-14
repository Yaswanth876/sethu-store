import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { HeroSection } from '@/sections/HeroSection';
import { StatsSection } from '@/sections/StatsSection';
import { LegacySection } from '@/sections/LegacySection';
import { ProductsMarqueeSection } from '@/sections/ProductsMarqueeSection';
import { FeaturesSection } from '@/sections/FeaturesSection';

import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { LocationSection } from '@/sections/LocationSection';
import { CTASection } from '@/sections/CTASection';
import { BrandsSection } from '@/sections/BrandsSection';


function App() {
  return (
    <MainLayout>
      <HeroSection />
      <StatsSection />
      <LegacySection />
      <ProductsMarqueeSection />
      <FeaturesSection />

      <BrandsSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
    </MainLayout>
  );
}

export default App;
