import Footer from "@/comp/newpage/Footer";
import NewHeader from "@/comp/newpage/NewHeader";
import Herosam from "@/comp/samc/Herosam";
import IntellectuallyCurious from "@/comp/samc/IntellectuallyCurious";
import SoftwareAssetManagement from "@/comp/samc/SoftwareAssetManagement";
import VerticalSpotlight from "@/comp/samc/VerticalSpotlight";
import React from "react";

const page = () => {
  return (
    <>
      <NewHeader />
      <Herosam />
      <SoftwareAssetManagement />
      <IntellectuallyCurious />
      <VerticalSpotlight />
      <Footer />
    </>
  );
};

export default page;
