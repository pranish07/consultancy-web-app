import { LuWarehouse } from "react-icons/lu";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { FaLocationDot, FaUserGraduate } from "react-icons/fa6";

import "./styles.css"
export const ExploreSearch = () => {
  return (
    <div className="pt-16 mb-6 font-bold frame bg-[#f4f5fb]  bg-center">
      <h1 className="text-2xl w-[90%] m-auto p-6">
        Explore courses that match your career{" "}
        <span className="block">aspirations </span>
      </h1>

      <form className="w-[90%] shadow-xl bg-white m-auto my-2 flex gap-4  p-5 rounded-xl ">
        <label htmlFor="" className="w-full relative">
          <ImBooks className="absolute top-4 left-3" />
          <input
            type="text"
            placeholder="What do you want to study?"
            className="border border-purple-500 py-3 px-8 w-full rounded-xl"
          />
        </label>
        <label htmlFor="" className="w-full relative">
          <FaLocationDot className="absolute top-4 left-3" />
          <input
            type="text"
            placeholder="Where do you want to study?"
            className="border border-purple-500 py-3 px-8 w-full rounded-xl"
          />
        </label>
        <label htmlFor="" className="w-full relative">
          <FaUserGraduate className="absolute top-4 left-3" />
          <input
            type="text"
            placeholder="What level do you want to study?"
            className=" border border-purple-500 py-3 px-8 w-full rounded-xl"
          />
        </label>
        <button className="px-5 py-3 bg-primary text-white rounded-xl">
          Search
        </button>
      </form>

      <div className="bg-purple my-8 ">
        <div className="md:flex justify-between w-[90%] m-auto p-8">
          <div className="flex items-center bg-white w-[30%] p-3 rounded-xl hover:bg-lightGreen cursor-pointer max-md:w-full">
            <div className="bg-white p-2 rounded-xl">
            <PiSuitcaseSimpleDuotone className="text-3xl"/>
            </div>
            <div className="ml-2">
              <p className="text-sm font-normal">Search by</p>
              <h3 className="text-lg font-bold">Careers</h3>
            </div>
          </div>

          <div className="flex items-center bg-white w-[30%] p-3 rounded-xl hover:bg-lightGreen cursor-pointer max-md:w-full">
            <div className="bg-white p-2 rounded-xl">
            <LuWarehouse className="text-3xl"/>
            </div>
            <div className="ml-2">
              <p className="text-sm font-normal">Search by</p>
              <h3 className="text-lg font-bold">Universities</h3>
            </div>
          </div>

          <div className="flex items-center bg-white w-[30%] p-3 rounded-xl hover:bg-lightGreen cursor-pointer max-md:w-full">
            <div className="bg-white p-2 rounded-xl">
            <FaLocationDot className="text-3xl" />
            </div>
            <div className="ml-2">
              <p className="text-sm font-normal">Search by</p>
              <h3 className="text-lg font-bold">Destinations</h3>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col justify-center items-center gap-5 pb-8">
          <p>
            Unsure of where to start? Connect with us for FREE study abroad
            advice{" "}
          </p>
          <button className="bg-lightGreen py-3 px-5 rounded-3xl">
            Help me decide
          </button>
        </div>
      </div>
    </div>
  );
};
