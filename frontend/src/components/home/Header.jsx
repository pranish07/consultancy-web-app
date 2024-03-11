import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "relative", right: "10px" }}
      onClick={onClick}
    />
  );
}
SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "relative", left: "30px", zIndex: "99" }}
      onClick={onClick}
    />
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="h-[418px]">
      <Slider {...settings} className="">
        <div>
          <div className="relative">
            <div>
              <img
                className=" object-cover bg-cover w-full h-[418px]"
                src="https://www.idp.com/medias/Aus-VF-banner-Feb.jpg?context=bWFzdGVyfHJvb3R8Nzc4MjB8aW1hZ2UvanBlZ3xhRGt6TDJoa01TOHhNVEk1TVRRNE1ETTVNVGN4TUM5QmRYTXRWa1l0WW1GdWJtVnlMVVpsWWk1cWNHY3w0NmQ5NmZjYmVhMzRjZTJhNzc4NmUzODIzMDVmNjI4ZDBiMTM2YTVlNzg1OTk3NjEwODEwMjY3N2MxZmQ0NmNj"
                alt=""
              />

              <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Study in Australia</h3>
                <p className="text-xl">
                  Ready for an Aussie adventure? Apply for Feb/July 2024
                  intakes!
                </p>
                <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative ">
            <img
              className="object-cover w-full  h-[418px]"
              src="https://www.idp.com/medias/Carousal-Canada-Banner-New-Sep.jpg?context=bWFzdGVyfHJvb3R8MTExNTQ2fGltYWdlL2pwZWd8YURSbEwyZzRNQzh4TVRRMU5EWXlNRFk1TmpZd05pOURZWEp2ZFhOaGJDMURZVzVoWkdFdFFtRnVibVZ5TFU1bGR5MVRaWEF1YW5CbnxhYzBjODNlODNiMjdiYTdlMWIwODEwNDEyMWVlNTNiMGM5ODc5ZjIzMzA1MjY0NjA2ZjYwMzZhNTU5ZDBkN2Qx"
              alt=""
            />

            <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Study in Australia</h3>
              <p className="text-xl">
                Ready for an Aussie adventure? Apply for Feb/July 2024 intakes!
              </p>
              <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative ">
            <img
              className="object-cover w-full  h-[418px]"
              src="https://www.idp.com/medias/IDP-Live-Events-Homepage-Banner-Desktop-1366x570-Asian-Man-Clean.png?context=bWFzdGVyfGltYWdlc3wxMjA2MzN8aW1hZ2UvcG5nfGFHTTNMMmhtT0M4eE1UYzROamsxTlRjeE9EWTROaTlKUkZBdFRHbDJaVjlGZG1WdWRITmZTRzl0WlhCaFoyVXRRbUZ1Ym1WeVgwUmxjMnQwYjNCZk1UTTJObmcxTnpCZlFYTnBZVzR0VFdGdVgwTnNaV0Z1TG5CdVp3fDE0YWU3ZWQxYmViMGE2OGM4M2QxNDViYmYxMGE5OTQ3MGU4MmJiOGE2NzgzNGQyMjJlODNkZmExNzk5NTQ3YTQ"
              alt=""
            />

            <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Study in Australia</h3>
              <p className="text-xl">
                Ready for an Aussie adventure? Apply for Feb/July 2024 intakes!
              </p>
              <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative ">
            <img
              className="object-cover w-full  h-[418px]"
              src="https://www.idp.com/medias/Carousal-UK-Banner-New-Aug.jpg?context=bWFzdGVyfHJvb3R8MTI3ODI4fGltYWdlL2pwZWd8YUdVNUwyZzVNQzh4TVRRMU5ESXpOell3TlRreE9DOURZWEp2ZFhOaGJDMVZTeTFDWVc1dVpYSXRUbVYzTFVGMVp5NXFjR2N8YTUwZGM4ZTcyOTU5YzYyZmI5NmU0NzYyMDllZjcwZTVjMjk3OTI1NjUyNWE2YjQ0YzMyZGMwMGQ2M2RlNGQ3Zg"
              alt=""
            />

            <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Study in Australia</h3>
              <p className="text-xl">
                Ready for an Aussie adventure? Apply for Feb/July 2024 intakes!
              </p>
              <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative ">
            <img
              className="object-cover w-full  h-[418px]"
              src="https://www.idp.com/medias/pswbanner.jpg?context=bWFzdGVyfHJvb3R8NzczNDl8aW1hZ2UvanBlZ3xhRFV5TDJnek5TODVPVEEzT1RJd05EQTBOVEV3TG1wd1p3fGVkZGY5NTdiNGVmNTA0N2Q2MTI3NzZiZmI4NjViNmY3OWJmYWUxYjIzNGQ5ZDMyMzU1MWY0YWUxNmVjMzk4ZjQ"
              alt=""
            />

            <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Study in Australia</h3>
              <p className="text-xl">
                Ready for an Aussie adventure? Apply for Feb/July 2024 intakes!
              </p>
              <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="max-h-[300vh]">
          <div className="relative ">
            <img
              className="object-cover bg-cover w-full  h-[418px]"
              src="https://www.idp.com/medias/Canada-admission-Day-SE-Carousal-Banner-7Oct.jpg?context=bWFzdGVyfGltYWdlc3w2ODc0NnxpbWFnZS9qcGVnfGFETTVMMmczTkM4eE1UYzVOVFV6TkRZM05UazVPQzlEWVc1aFpHRXRZV1J0YVhOemFXOXVMVVJoZVMxVFJTMURZWEp2ZFhOaGJDMUNZVzV1WlhJdE4wOWpkQzVxY0djfDMzNzE2NTM5YzBhZGQ2MDVkNzc1MTY5OGQ3MWYwNWQ3MzczNjJjMTcyYTFlNTgwN2I0YmMxZmQ5MTJiNTVlNzY"
              alt=""
            />

            <div className="absolute top-36 text-white left-20 items-start flex flex-col gap-4">
              <h3 className="text-3xl font-bold">Study in Australia</h3>
              <p className="text-xl">
                Ready for an Aussie adventure? Apply for Feb/July 2024 intakes!
              </p>
              <button className="bg-orange-500  rounded-full py-1 px-7 border-slate-500 inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-100 text-xl hover:orange">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};
