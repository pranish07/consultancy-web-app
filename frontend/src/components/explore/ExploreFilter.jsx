export const ExploreFilter = () => {
  return (
    <div className=" w-[90%] m-auto">
      <h1 className="text-xl">University Search</h1>
      {/* Filters */}
      <div className="flex gap-4">
        <div className="w-1/4">
          <img src="https://search.aeccglobal.com/coursev2/images/add-banner.svg" alt="" />
          <h3>Filters</h3>
          <div>
            <h3>Destination</h3>
            <div className="flex gap-4 flex-wrap">
              <button>Australia</button>
              <button>US</button>
              <button>Ireland</button>
              <button>united Kingdom</button>
              <button>Germany</button>
              <button>Singapore</button>
              <button>New Zealand</button>
            </div>
            
          </div>
        </div>

        <div className="w-3/4">
          <h1>Featured universities</h1>
        </div>
      </div>
    </div>
  );
};
