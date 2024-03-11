import { Form } from "../../Form";
import { studyAbroadData } from "../data"
export const StudyInUSAInfo = () => {
  return (
    <div className=" ">
    <nav className="shadow-lg">
      <ul className="flex flex-wrap gap-1 p-3 justify-around">
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          <a href="#study-in-usa">
          Why study in USA
          </a>
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          <a href="#benefits">
          benefits
          </a>
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          <a href="#top-university">
          College & Universities
          </a>
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          <a href="#requirements">
          Requirements
          </a>
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          Cost
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          Scholarship
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          Living
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          Work
        </li>
        <li className="hover:bg-primary hover:text-white cursor-pointer py-1 px-2 rounded-lg">
          FAQ
        </li>
      </ul>
    </nav>
    <div className="large:flex w-[90%] m-auto my-9 gap-6">
      <div className="large:w-[70%]">
        <div className="" id="study-in-usa">
          <h1 className="text-3xl text-primary my-6">
            Study in USA from Nepal
          </h1>
          <p>
            USA is a contemporary, democratic nation with excellent
            healthcare, top-notch educational institutions, and a unique
            geography. Studying in USA is particularly a terrific option
            for students to advance their education and professional
            opportunities, whether it&apos;s because of the exciting way of
            life, welcoming culture, or excellent educational resources.
          </p>
          <div className="my-6">
            <p>
              <iframe
                src="https://www.youtube.com/embed/xMFFfStvml0?si=OOq_K-P9eIvI_C_C"
                className="w-[90%] m-auto block object-cover bg-cover"
                height={400}
              />
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2" colSpan={2}>
                      Key Facts to Study in USA
                    </th>
                  </tr>
                </thead>
                <tbody className="text-normal">
                  {studyAbroadData?.studyInUSA?.studyInUSAFromNepal?.keyFacts?.tableData?.map(
                    ({ title, desc }, idx) => {
                      return (
                        <tr className=" bg-white" key={idx}>
                          <td className="border px-3 py-2 w-1/4">{title}</td>
                          <td className="border px-3 py-2 w-3/4">{desc}</td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* table */}
        <div></div>

        <div>
          <div id="benefits">
            <h1 className="text-3xl text-primary my-6">
              Benefits of Studying in USA for Nepalese Students
            </h1>
            <p>
              In recent years, the number of students from around the world
              pursuing their studies in the Land Down Under has increased
              tremendously. This influx of foreign students into Australian
              higher education can be attributed to a variety of factors. Here
              is a list of benefits of Studying in USA as a Nepali
              student:{" "}
            </p>
            {studyAbroadData.studyInAus.benefitsOfStudyingInAus.information.map(
              ({ title, desc }, idx) => {
                return (
                  <p key={idx} className="my-3">
                    <strong>{title}:</strong>
                    {desc}
                  </p>
                );
              }
            )}
          </div>
        </div>
        {/* popular courses to study */}
        <div>
          <div id="popular-courses">
            <h1 className="text-3xl text-primary my-6">
              Popular Courses to Study in USA for Nepalese Students
            </h1>
            <p>
              Attracting students from all corners of the globe, studying in
              American universities is a dream come true for many. Here are
              seven popular courses in American that many international
              learners choose to pursue:
            </p>

            {/* table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto rounded-xl my-3 shadow-lg ">
                <thead className="">
                  <tr className="bg-green ">
                    <th className="px-4 py-2 border">Field of Study</th>
                    <th className="px-4 py-2 border ">Courses/Programs</th>
                    <th className="px-4 py-2 border">
                      Average Tuition Fees(per year)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-normal">
                  {studyAbroadData.studyInAus.popularCourses.informationOfCourses.map(
                    ({ field, courses, avgTuition }, idx) => {
                      return (
                        <tr
                          className={`${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-100"
                          }`}
                          key={idx}
                        >
                          <td className="border px-3 py-2 w-1/5">{field}</td>
                          <td className="border px-3 py-2 w-3/5">
                            {courses}
                          </td>
                          <td className="border px-3 py-2 w-1/5">
                            {avgTuition}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-around my-6 bg-purple p-10 rounded-xl">
              {studyAbroadData.studyInAus.benefitsOfStudyingInAus.data.map(
                ({ icon, numbers, title }, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex max-md:flex-col max-md:justify-center gap-8 min-h-[50px] items-center w-[200px]"
                    >
                      <div className="">
                        <img src={icon} alt="" />
                      </div>
                      <div className="max-md:text-center max-md: h-[80px]">
                        <h2 className="font-bold text-xl">{numbers}</h2>
                        <p>{title}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <small>
              Need to learn more about Applying to Study in America and all
              the benefits that you can gain by it? Contact AECC, the best
              education consultancy in Nepal for American!
            </small>
            <div className="flex justify-center my-4">
              <button className="bg-primary rounded-full text-white py-2 px-4 block">
                Want to study in America? Get Free Counselling
              </button>
            </div>
          </div>
        </div>

        {/* top university */}
        <div id="top-university">
          <h1 className="text-3xl text-primary my-6">
            Top Universities to Study in America for Nepalese Students
          </h1>
          <p>
            America is home to several top-ranked universities that offer
            high-quality education and research opportunities. While rankings
            may vary depending on the criteria used, here are some of the top
            universities in Australia based on global rankings and reputation:
          </p>
        </div>

        {/* requirements to study */}

        <div id="requirements">
          <h1 className="text-3xl text-primary my-6">
            Requirements to Study in USA for Nepalese Students
          </h1>
          <p>
            To understand how to study in USA, you must also understand
            the admission requirements for different courses in Australia:
          </p>
          <div>
            {studyAbroadData.studyInUSA.requirements.map(
              ({ title, desc }, idx) => {
                return (
                  <div key={idx}>
                    <p>
                      {idx + 1}. <strong>{title}</strong>:{desc}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* documents required to study in australian university */}
        <div>
          <h1 className="text-3xl text-primary my-6">
            Documents Required to Study in American Universities
          </h1>
          <p>
            You are expected to meet a few requirements to Study in American
            Universities. Though there can be minor variations in the
            criteria, depending on the university you apply to, most of them
            will be asked for. They are as follows: -
          </p>
          <div></div>
        </div>
        {/* SOP */}
        <div>
          <h1 className="text-3xl text-primary my-6">Statement of Purpose</h1>
          <p>
            A statement of purpose is a written essay that allows an applicant
            to communicate their professional and academic qualifications,
            motivations for wanting to take on the programme, and ambitions
            for the future. The SOP is an important tool that allows
            admissions committees to gain insight into your personality, any
            special traits that set you apart from others, and any past
            experience relevant to the chosen course. It serves as the perfect
            opportunity for you to express your enthusiasm and show why you
            would make an ideal student.
          </p>
        </div>

        {/* intakes */}
        <div>
          <h1 className="text-3xl text-primary my-6">
            Intake to study in USA for Nepalese Students
          </h1>
        </div>

        {/* Cost of studying */}
        <div>
          <h1 className="text-3xl text-primary my-6">
            Cost of Studying in USA for Nepalese Students
          </h1>
          <p>
            Choosing to pursue a degree in Australia is no small decision, and
            it&apos;s important for students to understand the full costs
            associated with studying in Australia. From tuition fees to living
            expenses, textbooks, and more, here is an overview of what one can
            expect when calculating the expense of gaining a higher education
            in USA:
          </p>
        </div>

        {/* Scholarship */}
        <div>
          <h1 className="text-3xl text-primary my-6">
            Scholarships to Study in USA for Nepalese Students
          </h1>
          <p>
            For Nepalese students considering higher education in USA,
            it is of the utmost importance to assess the financial components
            associated with this decision. Along with tuition fees and living
            expenses, various other costs, such as textbooks, must be taken
            into account. Fortunately, there are numerous scholarships to
            provide financial aid for Nepalese students. Here is a list of
            scholarship in USA:
          </p>
        </div>

        {/* Living in aus */}

        <div>
          <h1 className="text-3xl text-primary my-6">
            Living in USA for Nepalese Students
          </h1>
        </div>

        {/* post work */}
        <div>
          <h1 className="text-3xl text-primary my-6">
            Post-study Work Opportunities in USA for Nepalese Students
          </h1>
        </div>

        {/* FAQ */}
        <div>
          <div className="join join-vertical w-full bg-green">
            <h1 className="text-center text-2xl my-4">
              Frequently Asked Questions
            </h1>
            {studyAbroadData.studyInAus.FAQ.map(({ title, content }, idx) => {
              return (
                <div
                  className="collapse collapse-arrow join-item border border-base-300 font-bold"
                  key={idx}
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={idx === 0}
                  />
                  <div className="collapse-title text-xl font-medium">
                    <h3>{title}</h3>
                  </div>
                  <div className="collapse-content">
                    <p>{content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="large:w-[30%]">
        <Form />
      </div>
    </div>
  </div>
  )
}

