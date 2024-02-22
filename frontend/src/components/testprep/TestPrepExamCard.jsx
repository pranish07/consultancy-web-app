import propTypes from "prop-types";

export const TestPrepExamCard = ({ image, exam }) => {
  return (
    <div className="shadow-lg bg-white rounded-xl my-4 max-sm:w-[70%]  max-sm:m-auto ">
      <div className="">
        <img src={image} alt="" width={400} height={400} className="" />
        <button className="p-2 mb-1 bg-blue-500 rounded-3xl flex justify-center mx-auto my-4 text-white">
          {exam} Class in Kathmandu
        </button>
      </div>
    </div>
  );
};
TestPrepExamCard.propTypes = {
  image: propTypes.string,
  exam: propTypes.string,
};
