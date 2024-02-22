import propTypes from "prop-types";

export const ApplicationProcess = ({ topic, desc }) => {
  return (
    <div className="rounded-xl max-large:w-[40%]  max-md:w-[50%] max-sm:w-full relative my-10 ">
      <img
        className="rounded-tr-xl rounded-tl-xl  max-md:w-full "
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt=""
      />
      <div className="rounded-bl-xl rounded-br-xl bg-green-200 p-4 min-h-48 max-md:w-full ">
        <h3 className="text-2xl font-bold min-h-16 w-[60%]">{topic}</h3>
        <p>{desc}</p>
      </div>
      <button className="rounded-3xl bg-primary text-white px-6 py-2 absolute -bottom-5 left-5">
        Learn More
      </button>
    </div>
  );
};

ApplicationProcess.propTypes = {
  topic: propTypes.string,
  desc: propTypes.string,
};
