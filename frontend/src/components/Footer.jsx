import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const country = [
  "Australia",
  "Canada",
  "USA",
  "Belguim",
  "Bangaladesh",
  "India",
  "Vietnam",
];
export const Footer = () => {
  return (
    <section className="bg-primary">
      <div className="flex w-[90%] m-auto py-5 gap-8">
        {" "}
        <div className="w-[30%] text-white text-right mr-5">
          <h1 className="text-5xl">Pranish.</h1>
          <p>Lets get started</p>
          <div className="flex gap-3 justify-end my-3">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaYoutube className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-4">
          <div>
            <h3 className="font-bold text-white">Aboutus</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Courses Abroad</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Study Destinations</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Our Services</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Our Branches</h3>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Our Timelines</a>
            </p>
            <p className="text-gray-500">
              <a href="/">Partner with us</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
            <p className="text-gray-500">
              <a href="/">who we are</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto text-gray-500 pb-20 ">
        <hr className="m-3" />
        <div className="flex gap-6 justify-center ">
          {country.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </div>
      </div>
    </section>
  );
};
