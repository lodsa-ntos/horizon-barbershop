import React from 'react'
import Hero from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import PhotoSection from '../components/PremiumSection'
import ExtrasUpsellsSection from '../components/ExtrasUpsellsSection'
import AboutUsSection from '../components/AboutUsSection'
import TestimonySection from '../components/TestimonySection'

function LandingPage() {
  
  return (
    <>
        <Hero />
        <AboutUsSection />
        <ServiceSection />
        <PhotoSection />
        <ExtrasUpsellsSection />
        <TestimonySection />
    </>
  )
}

export default LandingPage