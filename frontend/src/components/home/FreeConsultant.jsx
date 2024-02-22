import Slider from "react-slick";

import styles from "./Styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const FreeConsultant = () => {
  const [centerPadding, setCenterPadding] = useState("180px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        // Assuming 'sm' breakpoint in Tailwind CSS is  576px
        setCenterPadding("0");
      } else {
        setCenterPadding("180px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set the initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: centerPadding,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="  py-16 w-[90%]  m-auto p-4 large:grid large:grid-cols-2 gap-4 justify-center max-sm:py-6">
      <div className="max-large:m-auto flex flex-col items-start gap-4 sm:w-2/3 max-sm:my-8 justify-center ">
        <h3 className="text-xl">
          With you at every step of your study abroad journey
        </h3>
        <p className="text-md">
          Get personalised, friendly, honest guidance for free from the top
          consultancy in Nepal
        </p>
        <button className="bg-primary full text-white px-4 py-2 rounded-full">
          Book a consultation
        </button>
      </div>

      <div
        className={`${styles.sliderWrapper} flex flex-col  justify-center max-large:max-w-[600px] large:max-w-[550px]  xl:max-w-[600px] m-auto large: py-10 max-large:my-4`}
      >
        <div>
          <Slider {...settings} className="cursor-pointer focus:outline:none">
            <div className="">
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/university-admission.svg"
                alt=""
                className="m-auto"
                height={200}
                width={200}
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/student-accomodation-1.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/education-counseling-1.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/frame-1000001138.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/scholarship-guidance.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/test-preparation-programs-1.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/student-health-insurance-1.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/education-counseling-1.svg"
                alt=""
                height={200}
                width={200}
                className="m-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
