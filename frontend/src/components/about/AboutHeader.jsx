export const AboutHeader = () => {
  return (
    <section className="flex items-start relative">
      <img
        src="https://www.aeccglobal.com.np/images/2023/12/20/top.webp"
        alt=""
      />

      <div className="absolute m-6">
        <h2 className="text-2xl font-bold">Talk to your expert</h2>
        <h3>
          counsellers in our{" "}
          <span className="text-purple-500"> Virtual Office right away </span>
        </h3>
        <ul className="list-disc">
          <li className="list-disc">
            Learn about benefits, courses, eligibility and scholarships
          </li>
          <li className="list-disc">
            Get started on your start abroad journey process right away with us
          </li>
        </ul>
        <div className="bg-blue-800 text-center py-2 w-48 rounded-xl relative text-white">
          <i>icon</i> <span className="py-2">Sunday - Friday</span>
         <p className="absolute top-3 left-3">___________________</p>
          <p>10:30 A.M. - 5:00 PM</p>
        </div>
      </div>
      <div className="absolute right-0 w-1/2">
        <img
          src="https://www.aeccglobal.com.np/images/2023/12/20/banner-6-1.webp"
          alt=""
          className="w-1/2 m-auto "
        />
      </div>
    </section>
  );
};
