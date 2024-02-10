import propTypes from "prop-types";

export const TestPrepExamCard = ({ image, exam }) => {
  return (
    <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl my-4">
      <div className="">
        <img src={image} alt="" width={400} height={400} />
        <button className="p-2 bg-blue-500 rounded-3xl flex justify-center mx-auto my-4 text-white">
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
