import Image from "next/image";
import React from "react";

type Props = {};

const Sisyphus = (props: Props) => {
  return (
    <div
      className=" px-[30px] xl:px-[96px] py-[90px] flex flex-col items-center bg-[#F9FAFB] text-center gap-10
    "
    >
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/Logomark.png"
          alt="done"
          width={1000}
          height={1000}
          className="w-8 h-8 object-contain"
        />
        <div className="font-bold text-gray-900 ">Sisphus</div>
      </div>
      <div className="text-[38px] sm:text-[48px] font-semibold text-gray-800 text-center w-full xl:w-[1260px]">
        We’ve been with unicraft to kick start every new project and can’t
        imagine working without it.
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/Avatar.png"
          alt="done"
          width={1000}
          height={1000}
          className="w-12 h-12 rounded-full object-contain cursor-pointer"
        />
        <div className="text-gray-900 text-[18px] font-medium">Candice Wu</div>
        <div className="text-gray-500 text-[20px]">
          Product Manager, Sisyphus
        </div>
      </div>
    </div>
  );
};

export default Sisyphus;
