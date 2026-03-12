import ContactPage from "@/components/ContactPage";
import Careers from "@/components/Careers";
import BlogPage from "./blog/page";

import TestimonialSlider from "@/components/Testimonals";
import StatsSection from "@/components/StatsSection";
import AIServicesSection from "@/components/AIServicesSection";
import AIVoiceFeatures from "@/components/AIVoiceFeature";
import RevenueCalculator from "@/components/RevenueCalculator";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

     <Hero />
    <StatsSection />
    <AIVoiceFeatures />
    <RevenueCalculator />
    <AIServicesSection />
    

     <section id="testimonials" className="scroll"> <TestimonialSlider /></section>
     <section id="insights"> <BlogPage /></section>
   <section id="careers"> <Careers /></section>
     <section id="contact"> <ContactPage /></section>
     
     
    </div>
  );
}

