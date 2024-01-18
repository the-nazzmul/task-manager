import Image from "next/image";
import React from "react";
import BannerImage from "../../../public/assets/banner.svg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-teal-300 to-teal-800 flex items-center justify-center p-24 ">
      <div className="flex items-center justify-between w-full px-24">
        <div>
          <h1 className="text-4xl font-bold text-white">
            <span className="text-5xl">cler<span className="text-orange-400">K</span> </span> brings all your
            tasks together
          </h1>
          <h3 className="font-normal text-white mt-2">
            Keep everything in the same place. Track and monitor progress..
          </h3>
          <button className="btn bg-gradient-to-l from-orange-300 to-orange-500 py-2 px-6 rounded-md text-white mt-4 text-xl font-semibold">
            <Link href={"/login"}>Get Started</Link>
          </button>
        </div>
        <div>
          <Image src={BannerImage} height={400} width={400} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
