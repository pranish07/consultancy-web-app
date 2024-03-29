export const BlogHeader = () => {
  const blogs = [
    "Courses",
    "University",
    "Admission",
    "Career",
    "Jobs",
    "Student visa",
    "Study in Australia",
  ];
  return (
    <section className="bg-[#EBE8FF] bg-[url(https://www.aeccglobal.com.np/images/2023/08/29/blog-title-bg.webp)] bg-no-repeat bg-right h-[418px]">
      <div className="w-[90%] m-auto py-5 flex flex-col gap-3 ">
        <h2 className="font-bold text-xl">Blogs</h2>
        <p>Read everything about studying abroad</p>
        <input
          type="text"
          placeholder="Search..."
          className="rounded-2xl px-2 py-1 w-[20%]"
        />
        <p>Explore different categories</p>
        <div>
        {blogs.map((item, idx) => {
          return (
            <button
              key={idx}
              className="bg-black rounded-3xl text-white mx-2 my-1 px-3 py-2"
            >
              {item}
            </button>
          );
        })}
        </div>
      </div>
    </section>
  );
};
