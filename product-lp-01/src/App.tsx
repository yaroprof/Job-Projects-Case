
import Features from "./components/sections/FeatureSection.tsx";
import Navbar from "./components/layout/Navbar.tsx";
import HeroSection from "./components/sections/HeroSection.tsx";
import Workflow from "./components/sections/Workflow.tsx";
import Pricing from "./components/sections/Pricing.tsx";
import Testimonials from "./components/sections/Testimonials.tsx";
import Footer from "./components/layout/Footer.tsx";



function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App

