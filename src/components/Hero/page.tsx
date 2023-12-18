import Image from "next/image";
import React from "react";

type Props = {};

const Hero: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="relative bg-[]  flex items-start justify-center h-[1100px] sm:h-[940px] xl:h-auto bg- ">
        <Image
          src="/BG.png"
          alt="done"
          width={1500}
          height={1500}
          className="w-full h-full object-contain mx-auto  border--300  "
        />
        <div className="absolute py-10 bg--200  flex flex-col justify-evenly bg--400  text-black text-2xl ">
          <div className="sm:flex items-center justify-around hidden pb-24 ">
            <div className="text-[24px] font-semibold cursor-pointer">
              UniCraft
            </div>
            <div className="flex items-center justify-center gap-10 text-[18px]">
              <span className="cursor-pointer">How it works</span>
              <span className="cursor-pointer">Pricing</span>
              <span className="cursor-pointer">FAQ</span>
            </div>
            <div className="border border-black px-[32px] py-[12px] rounded-xl text-[18px] cursor-pointer">
              Contact us
            </div>
          </div>

          <div className=" flex flex-col gap-y-20">
            <div className="flex flex-col justify-center gap-y-3 mx-auto">
              <div className="text-[42px] sm:text-[58px] xl:text-[72px] font-bold text-center mx-auto bg--300 w-[400px] sm:w-[770px] xl:w-[1500px] xl:leading-[70px] text-gray-800 leading-normal  ">
                Elevate Your Presence with Seamless Design and Innovation.
              </div>
              <div className="text-[16px] lg:text-[20px] text-center px-5 sm:px-0 ">
                From strategic planning to digital presence, we're your
                dedicated partner in achieving solo success.
              </div>
              <div className="text-white bg-gray-800 rounded-[8px] px-[34px] py-[16px] mx-auto text-[16px] lg:text-[20px] cursor-pointer">
                View Pricing
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-8 bg--200 h-[500px] sm:h-auto ">
              <span className="text-sm text-gray-400">
                Trusted by 250+ companies
              </span>
              <div className=" grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-6 mx-auto  gap-y-[40px] sm:gap-16 xl:gap-32 bg--200">
                <Image
                  src="/Logo.png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-16 sm:w-28 h-10 object-contain"
                />
                <Image
                  src="/Logo (1).png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-20 sm:w-28 h-10 object-contain"
                />
                <Image
                  src="/Logo (2).png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-16 sm:w-28 h-10 object-contain"
                />
                <Image
                  src="/Logo (3).png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-20 sm:w-28 h-10 object-contain"
                />
                <Image
                  src="/Logo (4).png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-20 sm:w-28 h-10 object-contain sm:col-span-2 xl:col-span-1  mx-0 sm:mx-auto xl:mx-0"
                />
                <Image
                  src="/Logo (5).png"
                  alt="done"
                  width={2000}
                  height={2000}
                  className="w-20 sm:w-28 h-10 object-contain sm:col-span-2  xl:col-span-1 mx-0 sm:mx-auto xl:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
