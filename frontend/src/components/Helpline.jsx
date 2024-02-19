import { SlCalender } from "react-icons/sl";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
export const Helpline = () => {
  return (
    <section className="grid bg-primary grid-cols-3 text-white fixed inset-x-0 z-50 bottom-0">
      <div className="border-r-2 border-white-500 py-3 px-8 flex gap-2 cursor-pointer hover:bg-purple-500">
        <FaSearch className="text-xl" />
        <p className="font-bold">Pranish Search</p>
      </div>
      <div className="border-r-2 border-white-500 p-3 flex gap-2 justify-center cursor-pointer hover:bg-purple-500">
        <SlCalender className="text-xl" />
        <p className="font-bold">Meet us online</p>
      </div>
      <div className="p-3 flex gap-2 justify-end w-[90%] m-auto cursor-pointer hover:bg-purple-500">
        <FaWhatsapp className="text-xl" />
        <p className="font-bold">Chat with us</p>
      </div>
    </section>
  );
};
