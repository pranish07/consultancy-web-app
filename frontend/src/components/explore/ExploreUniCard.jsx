export const ExploreUniCard = () => {
  return (
    <div className="drop-shadow-xl bg-white mb-4 pb-5 rounded-b-xl mx-2">
      <div>
        <div className="relative">
          <img
            src="https://search.aeccglobal.com/app/provider/deakinjpg--glide?w=375&h=148&fit=crop"
            alt=""
          />
        </div>
        <div className="">
          <div className="absolute top-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Deakin_University_Logo_2017.svg/1200px-Deakin_University_Logo_2017.svg.png"
              alt=""
              height={40}
              width={40}
            />
          </div>
          <div className="absolute right-0 top-14 text-sm text-right text-white">
            <p className="bg-[#4B4000] rounded-l-xl mb-1 px-2">Featured</p>
            <p className="bg-[#333739] rounded-l-xl px-2 ">Scholarship available</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="text-lg">Deaken University</h2>
        <h4 className="text-sm">Melbourne, Australia</h4>

        <div className="grid grid-cols-2 gap-3 px-2">
          <div className="flex items-center gap-2">
            <div>logo</div>
            <div>
              <h4 className="text-purple text-sm">Rankings</h4>
              <p>251-300</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>logo</div>
            <div>
              <h4 className="text-purple text-sm">On Campus Accomodation</h4>
              <p>Available</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>logo</div>
            <div>
              <h4 className="text-purple text-sm">Year Established</h4>
              <p>1974</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>logo</div>
            <div>
              <h4 className="text-purple text-sm">Students</h4>
              <p>61k+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
