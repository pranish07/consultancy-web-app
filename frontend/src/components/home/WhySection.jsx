export const WhySection = () => {
  return (
    <div className="flex bg-blue-900 text-white mt-7 p-8">
      <div className="w-4/5 m-6">
        <h1 className="text-5xl block">
          WHY <span className="block text-7xl">Pranish.</span>
        </h1>
      </div>
      <div className="p-4 m-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illum
          sint voluptates sed libero! Perferendis aliquam nobis accusamus earum
          saepe voluptate atque quibusdam blanditiis. Eum impedit, ratione magni
          sit voluptate fugit a aliquam deserunt aut porro saepe alias dolorem
          tempore.
        </p>
        <section className="flex gap-4">
          <div>
            <p>located in 15 countries</p>
          </div>
          <div>
            {/* <GrServ/ices className='w-full text-xl'/> */}
            <p>End to End Services</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>750+ partner Institutions</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>High visa rate success</p>
          </div>
        </section>
      </div>
    </div>
  );
};
