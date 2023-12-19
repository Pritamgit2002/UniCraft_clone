import Card from "@/components/Card/page";
import Carousal from "@/components/Carousal/page";
import Faq from "@/components/Faq/page";
import Footer from "@/components/Footer/page";
import Hero from "@/components/Hero/page";
import Sisyphus from "@/components/Sisyphus/page";
import Work from "@/components/Work/page";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    // <div className="bg--200 mx-auto flex flex-col gap-[800px] ">
    <div className="flex flex-col justify-between">
      <Hero />
      <Carousal />
      <Work />
      <Sisyphus />
      <Card />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
