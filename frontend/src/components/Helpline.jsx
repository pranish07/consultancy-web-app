import { SlCalender } from "react-icons/sl";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
export const Helpline = () => {
  return (
    <section className="grid bg-primary grid-cols-3 text-white fixed inset-x-0 z-50 bottom-0 max-sm:text-sm ">
      <div className="border-r-2 border-white-500 py-3 px-8 flex gap-2 cursor-pointer hover:bg-purple-500 max-sm:p-1">
        <FaSearch className="text-xl" />
        <p className="font-bold text-wrap">Pranish Search</p>
      </div>
      <div className="border-r-2 border-white-500 p-3 flex gap-2 justify-center cursor-pointer hover:bg-purple-500 max-sm:p-1">
        <SlCalender className="text-xl" />
        <p className="font-bold text-wrap">Meet us online</p>
      </div>
      <div className="p-3 flex gap-2 justify-end  cursor-pointer hover:bg-purple-500 px-8 max-sm:p-1">
        <FaWhatsapp className="text-xl" />
        <p className="font-bold text-wrap">Chat with us</p>
      </div>
    </section>
  );
};
