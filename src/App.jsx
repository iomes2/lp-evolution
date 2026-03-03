import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Evolution from './components/Evolution'
import TrustLogos from './components/TrustLogos'
import ProcessSteps from './components/ProcessSteps'
import Benefits from './components/Benefits'
import CtaBanner from './components/CtaBanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import ScrollIndicator from './components/ScrollIndicator'
import './index.css'

function App() {
  return (
    <div className="font-sans">
      <ScrollIndicator />

      <div id="hero"><Hero /></div>

      <div id="about"><About /></div>

      {/* About (#1C1C1C) → Evolution (black) */}
      <SectionDivider type="curve" from="#1C1C1C" to="#000000" />

      <div id="evolution"><Evolution /></div>

      {/* Evolution (black) → TrustLogos (black) — subtle tilt */}
      <SectionDivider type="tilt" from="#000000" to="#0a0a0a" />

      <div id="trust"><TrustLogos /></div>

      {/* TrustLogos → ProcessSteps — thin gradient accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" style={{ backgroundColor: '#0a0a0a' }} />

      <div id="process"><ProcessSteps /></div>

      <div id="benefits"><Benefits /></div>

      <div id="cta"><CtaBanner /></div>

      <div id="contact"><ContactForm /></div>

      <Footer />
    </div>
  )
}

export default App

