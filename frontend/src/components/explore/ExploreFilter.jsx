import Collapsible from "react-collapsible";
import { ExploreUniCard } from "./ExploreUniCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


export const ExploreFilter = () => {
  const [slidesShow, setSlidesShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
       if(window.innerWidth >= 576 && window.innerWidth < 1000) {
        setSlidesShow("2");
      }
      if(window.innerWidth > 200 && window.innerWidth < 576){
        setSlidesShow("1");
      }
      if(window.innerWidth>1000 && window.innerWidth < 2000 )[
        setSlidesShow(3)
      ]
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: slidesShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className=" w-[90%] m-auto">
      <h1 className="text-xl">University Search</h1>
      {/* Filters */}
      <div className="flex gap-4 items-start">
        <div className="max-large:hidden w-1/4 sticky top-10 bottom-0 my-10 drop-shadow-2xl bg-white rounded-b-xl">
          <img
            src="https://search.aeccglobal.com/coursev2/images/add-banner.svg"
            alt=""
          />
          <h3 className="text-2xl p-3">Filters</h3>
          <div className="flex flex-col gap-4 p-3">
            <Collapsible trigger="Destination" className="">
              <div className="flex gap-2 flex-wrap my-2">
                <button className="border border-purple rounded-xl px-3"> Australia</button>
                <button className="border border-purple rounded-xl px-3">US</button>
                <button className="border border-purple rounded-xl px-3">Ireland</button>
                <button className="border border-purple rounded-xl px-3">united Kingdom</button>
                <button className="border border-purple rounded-xl px-3">Germany</button>
                <button className="border border-purple rounded-xl px-3">Singapore</button>
                <button className="border border-purple rounded-xl px-3">New Zealand</button>
              </div>
            </Collapsible>

            <Collapsible trigger="City">
              Please select destination first
            </Collapsible>

            <Collapsible trigger="University type">
              <div>
                <button>University</button>
                <button>College</button>
                <button>private College -Higher Education </button>
                <button>private College - VET</button>
                <button>TAFE</button>
              </div>
            </Collapsible>

            <Collapsible trigger="Ranking">
              <div>
                <p>1-50</p>
                <p>1-50</p>
                <p>1-50</p>
                <p>1-50</p>
                <p>1-50</p>
              </div>
            </Collapsible>

            <Collapsible trigger="On Campus accomodation">
              <div>
                <p>Yes</p>
                <p>No</p>
              </div>
            </Collapsible>
          </div>
        </div>

        <div className="w-3/4 max-large:w-full mb-7">
          <div>
            <h1 className="text-xl py-5 font-bold">Featured universities</h1>

            <Slider {...settings}>
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
            </Slider>
          </div>

          <div>
            <h1 className="text-xl py-5 font-bold">
              Top University in Australia
            </h1>

            <Slider {...settings}>
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
              <ExploreUniCard />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
