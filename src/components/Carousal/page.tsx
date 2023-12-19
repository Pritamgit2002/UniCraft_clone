import "./style.css";
import Image from "next/image";
import React from "react";

type Props = {};

const Carousal = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-12 mx-auto sm:pt-10">
      <div className=" w-[400px] sm:w-[600px] xl:w-full bg--200 h-[500px] flex items-center justify-center gap-8 overflow-x-auto mx-auto body ">
        <Image
          src="/c.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/a.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/b.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/c.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/a.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/b.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain  cursor-pointer"
        />
        <Image
          src="/c.png"
          alt="done"
          width={4000}
          height={4000}
          className="w-[360px] h-[420px] object-contain cursor-pointer "
        />
      </div>
      <div className="border border-gray-300 text-gray-600 text-[20px] font-medium px-[34px] py-[16px] w-[273px] mx-auto  text-center rounded-[13px] cursor-pointer bg--200 hover:scale-105 duration-200 ease-in">
        View recent work
      </div>
    </div>
  );
};

export default Carousal;
