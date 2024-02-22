import { GiPassport } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { PiPath } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
export const WhySection = () => {
  return (
    <div className="large:flex bg-primary text-white mt-7 p-8">
      <div className="w-4/5 m-6">
        <h1 className="text-5xl block">
          WHY <span className="block text-7xl">Pranish.</span>
        </h1>
      </div>
      <div className="p-4 m-4 flex flex-col gap-8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illum
          sint voluptates sed libero! Perferendis aliquam nobis accusamus earum
          saepe voluptate atque quibusdam blanditiis. Eum impedit, ratione magni
          sit voluptate fugit a aliquam deserunt aut porro saepe alias dolorem
          tempore.
        </p>
        <div className="sm:flex gap-4 justify-center">
          <div>
            <div className="flex justify-center mb-4">
              <IoLocation className=" text-6xl text-center bg-green-500 rounded-full p-2 text-white " />
            </div>
            <p>located in 15 countries</p>
          </div>
          <div>
            {/* <GrServ/ices className='w-full text-xl'/> */}
            <div className="flex justify-center mb-4">
              {" "}
              <PiPath className=" text-6xl text-center bg-green-500 rounded-full p-2 text-white " />
            </div>
            <p>End to End Services</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              {" "}
              <BsBank2 className=" text-6xl text-center bg-green-500 rounded-full p-2 text-white " />
            </div>
            <p>750+ partner Institutions</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              {" "}
              <GiPassport className=" text-6xl text-center bg-green-500 rounded-full p-2 text-white " />
            </div>
            <p>High visa rate success</p>
          </div>
        </div>
      </div>
    </div>
  );
};
