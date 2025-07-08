import React from 'react'
import Hero from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import PhotoSection from '../components/PremiumSection'
import ExtrasUpsellsSection from '../components/ExtrasUpsellsSection'

function LandingPage() {
  
  return (
    <>
        <Hero />
        <ServiceSection />
        <PhotoSection />
        <ExtrasUpsellsSection />
    </>
  )
}

export default LandingPage