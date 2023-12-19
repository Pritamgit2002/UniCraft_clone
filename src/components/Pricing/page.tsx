import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const arr = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const Pricing = () => {
  return (
    <div
      className="flex flex-col gap-y-10 items-center text-center py-20 bg-[#FDF5FF]"
      id="pricing"
    >
      <div>
        <div className=" text-[40px] xl:text-[50px] w-full  text-[#262E35] font-semibold mx-auto">
          Pricing made for collaborative support.
        </div>
        <div className=" w-[370px] sm:w-[500px] xl:w-[550px] mx-auto text-[16px] text-gray-500 font-medium ">
          Plain is made for your entire company. Only pay for users that
          actually message customers. Everyone else is free, forever.
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 col-span-2 gap-10 ">
        <div className="w-[360px] xl:w-[380px] h-[600px] bg-[#ffffff] text-black rounded-[16px] flex flex-col justify-center text-left pl-6 pr-6 py-6 mx-auto">
          <div className="font-semibold text-[22px] text-[#191D23] ">
            Freebie
          </div>
          <div className="text-[14px] text-gray-500 mt-3 ">
            Ideal for individuals who need quick access to basic features.
          </div>
          <div className="flex items-center justify-start gap-2 mt-3 ">
            <div className="text-[56px] font-medium ">$0</div>
            <div className=" text-[16px]">/Month</div>
          </div>
          <div className="px-[12px] py-[6px] text-gray-600 border border-black mt-6 mb-8 rounded-md text-center cursor-pointer">
            Get Started Now
          </div>
          <div className="flex flex-col items-start gap-y-2 ">
            {arr.map((item, index) => (
              <div
                key={index}
                className={` flex items-center justify-start text-left gap-2  ${
                  index < 2 ? "text-black" : "text-gray-400"
                }`}
              >
                <div className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[360px] xl:w-[380px] h-[600px] bg-gray-800 text-white rounded-[16px] flex flex-col justify-center text-left pl-6 pr-6 py-6 mx-auto">
          <div className="font-semibold text-[22px]  ">Professional</div>
          <div className="font- text-[14px]  mt-3 ">
            Ideal for individuals who who need advanced features and tools for
            client work.
          </div>
          <div className="flex items-center justify-start gap-2 mt-3 ">
            <div className="text-[56px] font-medium ">$25</div>
            <div className=" text-[16px]">/Month</div>
          </div>
          <div className="px-[12px] py-[6px] text-black font-semibold bg-white  mt-6 mb-8 rounded-md text-center cursor-pointer">
            Get Started Now
          </div>
          <div className="flex flex-col items-start gap-y-2 ">
            {arr.map((item, index) => (
              <div
                key={index}
                className={` flex items-center justify-start text-left gap-2  ${
                  index < 5 ? "text-white" : "text-gray-400"
                }`}
              >
                <div className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[360px] h-[600px] bg-[#ffffff] col-span-1 sm:col-span-2 xl:col-span-1 mx-auto text-black rounded-[16px] flex flex-col justify-center text-left pl-6 pr-6 py-6">
          <div className="font-semibold text-[22px] text-[#191D23] ">
            Enterprise
          </div>
          <div className="text-[14px] text-gray-500 mt-3 ">
            Ideal for businesses who need personalized services and security for
            large teams.
          </div>
          <div className="flex items-center justify-start gap-2 mt-3 ">
            <div className="text-[56px] font-medium ">$100</div>
            <div className=" text-[16px]">/Month</div>
          </div>
          <div className="px-[12px] py-[6px] text-gray-600 border border-black mt-6 mb-8 rounded-md text-center cursor-pointer">
            Get Started Now
          </div>
          <div className="flex flex-col items-start gap-y-2 ">
            {arr.map((item, index) => (
              <div
                key={index}
                className={` flex items-center justify-start text-left gap-2  ${
                  index < 10 ? "text-black" : "text-gray-400"
                }`}
              >
                <div className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
