export const ExploreFilter = () => {
  return (
    <div className="mb-9">
        <hr />
      <h1>University Search</h1>
      {/* Filters */}
      <div>
        <h3>Filters</h3>
        <div >
          <h3>Destination</h3>
          <div className="flex gap-6">
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
      <div>
        <h1>Featured universities</h1>
      </div>
    </div>
  );
};
