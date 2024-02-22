export const AboutHeader = () => {
  return (
    <section className=" py-5 w-full m-auto bg-[url(https://www.aeccglobal.com.np/images/2023/12/20/top.webp)] relative">
      <div className="max-md:flex-col-reverse  flex items-start gap-6 m-auto w-[90%] pt-8">
        <div className=" max-md:m-auto m-6 flex flex-col gap-3">
          <div>
            <h2 className="text-3xl font-bold">Talk to your expert</h2>
            <h3 className="text-lg">
              counsellers in our{" "}
              <span className="text-purple-500">
                {" "}
                Virtual Office right away{" "}
              </span>
            </h3>
          </div>
          <ul className="list-disc flex flex-col gap-3 text-lg">
            <li className="list-disc">
              Learn about benefits, courses, eligibility and scholarships
            </li>
            <li className="list-disc">
              Get started on your start abroad journey process right away with
              us
            </li>
          </ul>
          <div className="bg-purple-500 text-center py-4 px-2 w-48 rounded-xl relative text-white cursor-default">
            <i>icon</i> <span className="pb-2 inline-block">Sunday - Friday</span>
            <p className="absolute top-6 left-4">__________________</p>
            <p>10:30 A.M. - 5:00 PM</p>
          </div>
        </div>
        <div className="right-0 max-w-[600px]">
          <img
            src="https://www.aeccglobal.com.np/images/2023/12/20/banner-6-1.webp"
            alt=""
            className="w-[50%] m-auto "
          />
        </div>
      </div>
    </section>
  );
};
