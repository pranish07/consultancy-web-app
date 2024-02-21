export const ExploreSearch = () => {
  return (
    <div className="mt-16 mb-6 font-bold bg-url([])">
      <h1 className="text-2xl w-[90%] m-auto p-6">
        Explore courses that match your career{" "}
        <span className="block">aspirations </span>
      </h1>

      <div className="w-[90%] shadow-lg bg-white m-auto flex gap-4  p-5 rounded-xl ">
        <input
          type="text"
          placeholder="What do you want to study?"
          className="border border-purple-500 py-3 px-2 w-full rounded-xl"
        />
        <input
          type="text"
          placeholder="Where do you want to study?"
          className="border border-purple-500 py-3 px-2 w-full rounded-xl"
        />
        <input
          type="text"
          placeholder="What level do you want to study?"
          className=" border border-purple-500 py-3 px-2 w-full rounded-xl"
        />
        <button className="px-5 py-3 bg-primary text-white rounded-xl">
          Search
        </button>
      </div>

      <div className="bg-purple-500 my-8 ">
        <div className="flex justify-between w-[90%] m-auto p-8">
          <div className="flex bg-white w-[30%] p-3 rounded">
            <i>icon</i>
            <div>
              <p>Search by</p>
              <h3>Careers</h3>
            </div>
          </div>

          <div className="flex bg-white w-[30%] p-3 rounded">
            <i>icon</i>
            <div>
              <p>Search by</p>
              <h3>Universities</h3>
            </div>
          </div>

          <div className="flex bg-white w-[30%] p-3 rounded">
            <i>icon</i>
            <div>
              <p>Search by</p>
              <h3>Destinations</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 pb-8">
          <p>
            Unsure of where to start? Connect with us for FREE study abroad
            advice{" "}
          </p>
          <button className="bg-green-500 py-3 px-5 rounded-3xl">
            Help me decide
          </button>
        </div>
      </div>
    </div>
  );
};
