const blog = {
  toppost: [
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/19/navitas-pathway-programs.webp",
      heading:
        "How Navitas Pathway Programs Make University Education Possible?",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/11/how-much-gap-is-accepted-for-study-in-australia.webp",
      heading:
        "How Much Gap is acceptable in Australia for International Students",
    },
  ],
  studyInCanada: [
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/11/affordable-colleges-in-canada.webp",
      heading: "Top 10 Cheapest Colleges in Canada for International Students",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/03/fall-intake-in-canada.webp",
      heading: "Fall Intake in Canada | Timeline, Universities &",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/12/26/ielts-band-requirements-for-canada.webp",
      heading: "Minimum IELTS Requirements for",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/08/18/b2ap3_large_Blog-1-IM-1024x727.webp",
      heading: "Cost Of living in Canada for international students",
    },
  ],
  studyInUSA: [
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/11/pte-accepting-university-in-usa.webp",
      heading: "Top PTE Accepted University in USA in 2024",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/10/summer-intake-in-usa.webp",
      heading: "May/Summer Intake in USA | Timeline,",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/15/spring-intake-in-usa.webp",
      heading: "Spring Intake in USA | Application Deadlines,",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2024/01/10/fall-intake-in-usa.webp",
      heading: "Fall Intake in USA 2024 | Timeline, Required",
    },
  ],
  Courses: [
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/11/27/PTE-to-IELTS-Score-Conversion.webp",
      heading: "PTE to IELTS Score Conversion and Charts",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/08/18/b2ap3_large_5-Best-Mass-Communication-Courses-to-Study-in-Canada.webp",
      heading: "Top 5 Journalism and Mass Communication",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/08/18/b2ap3_large_study-mechanical-engineering-overseas.webp",
      heading: "Why study Mechanical Engineering? Benefits of",
    },
    {
      image:
        "https://www.aeccglobal.com.np/images/2023/08/18/b2ap3_large_computer-science-course-_20220422-105752_1.webp",
      heading: "Top 7 Computer Engineering Courses for",
    },
  ],
  Services: [
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon1.svg",
      heading: "Education Counselling",
    },
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon2.svg",
      heading: "Visa Application",
    },
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon3.svg",
      heading: "Application Process",
    },
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon4.svg",
      heading: "Student Health Insurance",
    },
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon5.svg",
      heading: "Scholarship Guidance",
    },
    {
      image: "https://www.aeccglobal.com.np/images/2023/08/08/service-icon6.svg",
      heading: "Student Accommodation",
    },
    
  ],
};

export const BlogInfo = () => {
  return (
    <section className="flex justify-between items-start gap-2 w-[90%] m-auto">
      {/* info */}
      <div className="w-2/3">
        <div>
          <h1>Top Posts</h1>
          <div className="bg-[url(https://www.aeccglobal.com.np/images/2024/01/19/keele-university.webp)] h-[400px] w-full bg-no-repeat bg-cover relative rounded-xl">
            <div className="absolute bottom-0 text-white inset-x-0 bg-gradient-to-t from-primary to-transparent p-3 rounded-b-xl">
              <h1 className="text-3xl font-bold w-2/3">
                Keele University UK | Rankings, Admission Process, Scholarships
              </h1>
              <p className="pb-2">AECC Nepal</p>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            {blog.toppost.map(({ image, heading }, idx) => {
              return (
                <div
                  key={idx}
                  className="shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)]"
                >
                  <img src={image} alt="" />
                  <h1 className="font-bold text-2xl">{heading}</h1>
                  <p>Pranish</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Study in canada */}
        <div className="">
          <h1 className="text-xl font-bold">Study to canada</h1>
          <div className="grid grid-cols-2 gap-4">
            {blog.studyInCanada.map(({ image, heading }, idx) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-2 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)] my-2"
                >
                  <div className="">
                    <img
                      src={image}
                      alt=""
                      className="bg-cover bg-no-repeat w-full "
                    />
                  </div>
                  <div className="m-auto">
                    <h3 className="font-bold text-primary text-sm">
                      {heading}
                    </h3>
                    <p className="text-sm">Pranish</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          {/* Study in USA */}
          <h1>Study in USA</h1>
          <div className="grid grid-cols-2 gap-4">
            {blog?.studyInUSA?.map(({ image, heading }, idx) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-2 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)] my-2"
                >
                  <div className="">
                    <img
                      src={image}
                      alt=""
                      className="bg-cover bg-no-repeat w-full "
                    />
                  </div>
                  <div className="m-auto">
                    <h3 className="font-bold text-primary text-sm">
                      {heading}
                    </h3>
                    <p className="text-sm">Pranish</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {/* Courses */}
          <h1>Courses</h1>
          <div className="grid grid-cols-2 gap-4">
            {blog?.Courses?.map(({ image, heading }, idx) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-2 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)] my-2"
                >
                  <div className="h-[80%] m-auto">
                    <img
                      src={image}
                      alt=""
                      className="bg-cover bg-no-repeat w-full h-full "
                    />
                  </div>
                  <div className="m-auto">
                    <h3 className="font-bold text-primary text-sm">
                      {heading}
                    </h3>
                    <p className="text-sm">Pranish</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">{/* Services */}
        <h1>Services</h1>
        <div className="grid grid-cols-2 ">
        {blog.Services.map(({image,heading},idx)=>{
          return(
            <div key={idx} className="flex gap-3">
                <img src={image} alt="" />
                <h4>{heading}</h4>
            </div>
          )
        })}
        </div>
        </div>
      </div>

      {/* form */}
      <div className="w-1/3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded p-8 sticky top-0 bottom-50">
        <h4 className="text-xl text-primary font-bold p-2">
          Fulfill your futuristic Academic Goals with Pranish.
        </h4>
        <input
          type="text"
          placeholder="Name"
          className="border border-black-900 w-full p-2 my-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-black-900 p-2 w-full my-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border border-black-900 w-full p-2 my-2 rounded-xl"
        />
        <div>
          <input type="checkbox" className="mr-2" />
          by clicking you agree to our Privacy Policy and terms and conditions*
        </div>
        <button className="bg-primary text-white px-3 py-2 rounded-2xl mt-3">
          Get Started for free
        </button>
      </div>
    </section>
  );
};
