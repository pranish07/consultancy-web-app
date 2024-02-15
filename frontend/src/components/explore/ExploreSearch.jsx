export const ExploreSearch = () => {
  return (
    <div>
      <h1>Explore courses that match your career aspirations</h1>

      <div>
        <input type="text" placeholder="What do you want to study?" />
        <input type="text" placeholder="Where do you want to study?" />
        <input type="text" placeholder="What level do you want to study?" />
        <button>Search</button>
      </div>

      <div>
        <div>
          <i>icon</i>
          <div>
            <p>Search by</p>
            <h3>Careers</h3>
          </div>
        </div>

        <div>
          <i>icon</i>
          <div>
            <p>Search by</p>
            <h3>Universities</h3>
          </div>
        </div>

        <div>
          <i>icon</i>
          <div>
            <p>Search by</p>
            <h3>Destinations</h3>
          </div>
        </div>
        <p>Unsure of where to start? Connect with us for FREE study abroad advice </p>
        <button>Help me decide</button>
      </div>
    </div>
  );
};
