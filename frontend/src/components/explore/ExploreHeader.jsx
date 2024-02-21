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

      <div className="shadow-md bg-white w-[90%] m-auto bg-white p-4 rounded-xl flex gap-2 text-black justify-center absolute -bottom-10 left-[5%] ">
        <div className="border-black border-2 p-3 flex rounded-xl w-[30%]">
          <i>icon</i>
          <div>
            <h3>800,000+</h3>
            <p>Students Helped</p>
          </div>
        </div>

        <div className="border-black border-2 rounded-xl p-3 flex w-[30%]">
          <i>icon</i>
          <div>
            <h3>140,000+</h3>
            <p>Program Offered</p>
          </div>
        </div>
        <div className="border-black border-2 p-3 flex rounded-xl w-[30%] ">
          <i>icon</i>
          <div>
            <h3>1,500+</h3>
            <p>Institutions</p>
          </div>
        </div>
        <div className="border-black border-2 p-3 flex rounded-xl w-[30%]">
          <i>icon</i>
          <div>
            <h3>5</h3>
            <p>Destination Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};
