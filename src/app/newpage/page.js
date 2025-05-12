// import Footer from "@/comp/Homecomp/Footer";
import BusinessServicesSection from "@/comp/newpage/BusinessServicesSection";
import CareersBanner from "@/comp/newpage/CareersBanner";
import ContactCTA from "@/comp/newpage/ContactCTA";
import Footer from "@/comp/newpage/Footer";
import Hero from "@/comp/newpage/Hero";
import NewHeader from "@/comp/newpage/NewHeader";
import ResourcesSection from "@/comp/newpage/ResourcesSection";
import WhatWeDoSection from "@/comp/newpage/WhatWeDoSection";
import React from "react";

const page = () => {
  return (
    <>
      <NewHeader />
      <Hero />
      <WhatWeDoSection />
      <BusinessServicesSection />
      <ResourcesSection />
      <CareersBanner />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default page;
