export const ExploreHeader = () => {
  return (
    <section className="text-white bg-cover bg-center h-[70vh] bg-[url(https://radiant-warmth-64b404abdc.media.strapiapp.com/studyabroad_banner_1280_774e6250ce.webp)] relative ">
      <div className="w-[90%] m-auto p-3 flex flex-col items-start gap-6 py-4">
        <p className="rounded-xl bg-white text-sm px-2 py-1 text-black">
          your Study abroad solution
        </p>
        <h1 className="text-3xl">Find your Perfect Program</h1>
        <p className="w-1/3">
          We&apos;ll help you find and get into the perfect program in your
          dream destination.
        </p>
        <div className="w-2/3">
          <input
            type="text"
            placeholder="Search your programs, schools or other keywords"
            className=" w-1/2 p-2 rounded-xl"
          />
          <button className="ml-3 bg-blue-500 text-white py-2 px-6 rounded-xl">
            Search
          </button>
        </div>
      </div>

      <div className="shadow-md bg-white w-[90%] m-auto bg-white p-4 rounded-xl flex flex-wrap gap-2 text-black justify-around max-md:hidden md:absolute -bottom-10 left-[5%] ">
        <div className="shadow-lg bg-white p-3 flex rounded-xl large:w-[22%] max-large:w-[45%] max-md:w-[90%]">
          <img src="https://res.cloudinary.com/dpmijkbpm/image/upload/v1708953114/consulting-web-app/pic1_lzfy08.png" alt="" className="w-[40px] h-[40px] bg-cover" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-primary">800,000+</h3>
            <p>Students Helped</p>
          </div>
        </div>

        <div className="shadow-lg bg-white rounded-xl p-3 flex large:w-[22%] max-large:w-[45%] max-md:w-[90%]">
          <img src="https://res.cloudinary.com/dpmijkbpm/image/upload/v1708953114/consulting-web-app/pic2_esofwf.png" alt="" className="w-[40px] h-[40px] bg-cover" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-primary">140,000+</h3>
            <p>Program Offered</p>
          </div>
        </div>
        <div className="shadow-lg bg-white p-3 flex rounded-xl large:w-[22%] max-large:w-[45%] max-md:w-[90%]  ">
          <img src="https://res.cloudinary.com/dpmijkbpm/image/upload/v1708953114/consulting-web-app/pic3_lwr6kg.png" alt="" className="w-[40px] h-[40px] bg-cover" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-primary">1,500+</h3>
            <p>Institutions</p>
          </div>
        </div>
        <div className="shadow-lg bg-white p-3 flex rounded-xl large:w-[22%] max-large:w-[45%] max-md:w-[90%]">
          <img src="https://res.cloudinary.com/dpmijkbpm/image/upload/v1708953114/consulting-web-app/pic4_imjgly.png" alt="" className="w-[40px] h-[40px] bg-cover"/>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-primary">5</h3>
            <p>Destination Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
