import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaAngellist,
  FaDribbble,
} from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="  flex flex-col gap-y-12 items-center text-center relative h-[748px] lg:h-full bg-[#ECEBFE]   ">
      {/* <Image
        src="/Gradient.png"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full hidden sm:inline-block  object-cover "
      /> */}

      <Image
        src="/BG (1).png"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full inline-block sm:hidden object-cover "
      />
      {/* 
      <Image
        src="/Gradient (1).png"
        alt="done"
        width={2000}
        height={2000}
        className="w-full h-full bg-black xl:hidden sm:inline-block  object-cover "
      /> */}

      <div className="absolute flex flex-col  bg--200 w-full h-[748px] lg:h-full pt-20 pb-10 sm:pt-60   ">
        <div className="bg-[#FFF9FF] pt-20">
          <div className="font-bold text-[40px] lg:text-[72px] ">
            No long-term contracts.
          </div>
          <div className="font-bold text-[40px] lg:text-[72px] ">
            No catches. Simple.
          </div>
          <div className="font-medium text-[20px] text-gray-500 py-4 px-5">
            Start your 30-day free trial. Cancel anytime.
          </div>
          <div className="text-white bg-gray-800 rounded-[8px] text-[18px] py-[16px] px-[34px] w-[215px] mx-auto my-12 cursor-pointer">
            Contact us
          </div>
        </div>

        <div>
          {/* <Separator className="w-[380px] sm:w-[700px] xl:w-[1600px] mx-auto " /> */}

          <div
            className="flex flex-col items-start 
           gap-y-8 bg--200 px-3 sm:px-10 xl:px-32 sm:py-10  bg-[#FFF9FF]  "
          >
            <div className="flex flex-col bg--200 w-full border-t pt-12 sm:pt-20 border-green-400">
              <div className="font-semibold text-[24px] bg--200 w-full text-left text-gray-700 cursor-pointer ">
                UniCraft
              </div>
              <div className=" text-[18px] text--400 w-96 text-left text-gray-400">
                Design amazing digital experiences that create more happy in the
                world.
              </div>
            </div>
            <div className="w-full bg--200 flex items-center justify-between pb-4">
              <div className="text-[16px] text-gray-400 bg--200 text-left sm:text-center">
                © 2077 Untitled UI. All rights reserved.
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-6 gap-y-3 text-2xl text-gray-400 cursor-pointer">
                <FaTwitter />
                <FaLinkedin />
                <FaFacebook />
                <FaGithub />
                <FaAngellist />
                <FaDribbble />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
