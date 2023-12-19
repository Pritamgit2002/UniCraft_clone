import Image from "next/image";
import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center rounded-2xl shadow-xl text-center py-10 my-20 mx-10 sm:mx-20 lg:mx-20 xl:mx-40 border-[2px] border-gray-200 "
      id="work"
    >
      <div>
        <div className="text-[48px] font-semibold">How it works</div>
        <div className="text-[16px] sm:text-[20px] text-gray-600">
          Premium designs, unlimited requests, super fast delivery, for one flat
          monthly fee.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-2 lg:gap-16 xl:gap-24">
        <div className="relative flex items-center justify-center bg--200">
          <div className="text-[100px] sm:text-[125px] xl:text-[200px] font-semibold bg-gradient-to-b from-[#D8B4FE]  to-[#ffffff] bg-clip-text text-transparent">
            1
          </div>

          <div className="absolute bg--200">
            <div className="text-[28px] xl:text-[40px] font-bold">Subcribe</div>
            <div className="text-[12px] xl:text-[15px] text-gray-500 w-[250px] xl:w-[339px] bg--200">
              Subscribe to a plan & you’ll get an instant access to your private
              Slack channel.
            </div>
          </div>
        </div>
        <Image
          src="/arrow.png"
          alt="done"
          width={1000}
          height={1000}
          className="h-16 w-20 object-contain hidden lg:inline-block"
        />
        <div className="relative flex items-center justify-center bg--200">
          <div className="text-[100px] sm:text-[125px] xl:text-[200px] font-semibold bg-gradient-to-b from-[#D8B4FE]  to-[#ffffff] bg-clip-text text-transparent">
            2
          </div>

          <div className="absolute bg--200">
            <div className="text-[28px] xl:text-[40px] font-bold">Request</div>
            <div className="text-[12px] xl:text-[15px] text-gray-500 w-[250px] xl:w-[339px] bg--200">
              Submit any number of requests. We'll work through them, one at a
              time, ensuring consistent updates every 24-48 hours.
            </div>
          </div>
        </div>
        <Image
          src="/arrow.png"
          alt="done"
          width={1000}
          height={1000}
          className="h-16 w-20 object-contain hidden lg:inline-block"
        />
        <div className="relative flex items-center justify-center bg--200">
          <div className="text-[100px] sm:text-[125px] xl:text-[200px] font-semibold bg-gradient-to-b from-[#D8B4FE]  to-[#ffffff] bg-clip-text text-transparent">
            3
          </div>

          <div className="absolute bg--200">
            <div className="text-[28px] xl:text-[40px] font-bold">Revise</div>
            <div className="text-[12px] xl:text-[15px] text-gray-500 w-[250px] xl:w-[339px] bg--200">
              Need changes? We guarantee unlimited revisions until you're 200%
              satisfied.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
