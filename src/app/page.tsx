import Card from "@/components/Card/page";
import Faq from "@/components/Faq/page";
import Footer from "@/components/Footer/page";
import Hero from "@/components/Hero/page";
import Sisyphus from "@/components/Sisyphus/page";
import Work from "@/components/Work/page";
import React from "react";
import Gallery from "@/components/Gallery/page";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <Hero />
      <Gallery />
      <Work />
      <Sisyphus />
      <Card />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
