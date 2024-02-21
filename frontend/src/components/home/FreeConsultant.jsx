import Slider from "react-slick";

import styles from "./Styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FreeConsultant = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "180px",
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className=" py-16 w-[90%] m-auto p-4 grid grid-cols-2 gap-4 justify-center">
      <div className="flex flex-col items-start gap-4 w-2/3 justify-center ">
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

      <div className={`${styles.sliderWrapper} flex flex-col justify-center md:min-w-[300px] w-full`}>
        <div>
          <Slider {...settings} className="cursor-pointer focus:outline:none">
            <div >
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/university-admission.svg"
                alt=""
                height={200}
                width={200}
                className=""
              />
            </div>
            <div >
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/student-accomodation-1.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div >
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/education-counseling-1.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/frame-1000001138.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div >
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/scholarship-guidance.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/test-preparation-programs-1.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/student-health-insurance-1.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
            <div>
              <img
                src="https://www.aeccglobal.com.np/images/2023/08/14/education-counseling-1.svg"
                alt=""
                height={200}
                width={200}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
