import { Form } from "../Form";

const studyAbroadData = {
  studyInAus: {
    studyInAusFromNepal: {
      keyFacts: {
        tableHeading: "key facts to study in Australia",
        tableData: [
          { title: "Language spoken", desc: "English" },
          {
            title: "cost of study",
            desc: "Undergraduate- AUD 20,000 to AUD 45,000 per year, \n Post-graduate- AUD 22,000 to AUD 50,000 per year.",
          },
          {
            title: "Source of funding",
            desc: "Scholarships, personal savings, part-time work, educational loans, and sponsorships",
          },
          { title: "Exams required", desc: "IELTS, TOEFL, or PTE Academic" },
          {
            title: "Degrees",
            desc: "Undergraduate, post-graduate, Doctoral, vocational courses.",
          },
          { title: "Intakes", desc: "February/March and July/August. " },
          { title: "Visa", desc: "Student visa subclass 500." },
        ],
      },
    },
    benefitsOfStudyingInAus: {
      information: [
        {
          title: "World-class education system",
          desc: "Australian institutions are renowned for their world-class standards of education, robust educational standards which equip students with the knowledge and skills sought by employers worldwide. Studying in this country can therefore provide both personal enrichment and the opportunity for a successful career path.",
        },
        {
          title: "Easy to adapt culture for Nepalese students",
          desc: " For Nepali students, Australia is a great option to consider when deciding on a study destination. With its safe and secure atmosphere, the country provides peace of mind for those who are interested in studying abroad. Furthermore, it has modern infrastructure and top-notch healthcare services that guarantee a high standard of living. The friendly culture in Australia also means that Nepali students can easily integrate into their new environment with greater ease compared to many other countries.",
        },
        {
          title: "Best courses to study in Australia",
          desc: "When it comes to choosing a course in Australia, there are plenty of options. Engineering, business administration, information technology, healthcare (such as nursing and medical sciences), environmental studies, and hospitality management are among some of Australia's most popular courses. These outstanding fields of study offer excellent career prospects within thriving industries while also providing students with ample opportunity for personal and professional growth.",
        },
        {
          title: "A lifetime of experience",
          desc: "The breathtaking scenery and remarkable geography of the Land Down Under offer a lifetime of experience for Nepali students. From the awe-inspiring Great Barrier Reef to the iconic Sydney Opera House, as well as the magnificent outback, there are numerous wonders that make studying in Australia an unforgettable experience. With its vibrant culture and diverse lifestyle, Australia successfully complements a student's academic journey.",
        },
      ],
      data: [
        { icon: "", numbers: "50,000+", title: "Nepalese Students" },
        { icon: "", numbers: "22,000+", title: "Courses" },
        { icon: "", numbers: "1,100+", title: "Institutions" },
      ],
    },
    popularCourses: {
      informationOfCourses: [
        {
          field: "Engineering",
          courses:
            "Civil, Mechanical, Electrical, Computer-related specialisations",
          avgTuition: "AUD 30,000 - AUD 45,000",
        },
        {
          field: "Commerce and Management",
          courses:
            "Entrepreneurship, Finance, Marketing, International Trade, Administration",
          avgTuition: "AUD 25,000 - AUD 40,000",
        },
        {
          field: "Information Technology",
          courses:
            "Computer Science, Software Engineering, Information Systems, Data Science, Cybersecurity",
          avgTuition: "AUD 25,000 - AUD 40,000",
        },
        {
          field: "Healthcare",
          courses:
            "Medicine, Nursing, Pharmacy, Public Health, Allied Health Professions",
          avgTuition: "AUD 30,000 - AUD 55,000",
        },
        {
          field: "Accounting and Finance",
          courses:
            "	Accounting, Finance, Certified Public Accountant (CPA), Chartered Accountant (CA)",
          avgTuition: "AUD 25,000 - AUD 45,000",
        },
        {
          field: "Hospitality and Tourism",
          courses:
            "Hospitality Management, Tourism Management, Event Management, Hotel Administration",
          avgTuition: "AUD 20,000 - AUD 35,000",
        },
      ],
    },
    topUni: {
      informationofTopUni: [
        {
          uni: "Monash University",
          avgTuition: "AUD 25,000 - AUD 40,000",
          coursesOffered: "Wide range of programmes across various disciplines",
        },
        {
          uni: "Deakin University",
          avgTuition: "AUD 25,000 - AUD 35,000",
          coursesOffered:
            "Industry-aligned courses, practical learning, work-integrated experiences",
        },
        {
          uni: "Australian Catholic University",
          avgTuition: "AUD 20,000 - AUD 30,000",
          coursesOffered:
            "Programmes in various disciplines, emphasis on social justice, community engagement",
        },
        {
          uni: "Bond University",
          avgTuition: "	AUD 38,000 - AUD 46,000",
          coursesOffered:
            "High-quality programmes in business, law, health sciences, and more",
        },
        {
          uni: "Carnegie Mellon University, Australia",
          avgTuition: "AUD 20,000 - AUD 30,000",
          coursesOffered:
            "Specialised programmes in information technology, business, public policy",
        },
        {
          uni: "Charles Darwin University",
          avgTuition: "AUD 40,000 - AUD 50,000",
          coursesOffered:
            "Programmes in indigenous studies, environmental sciences, healthcare, vocational education",
        },
        {
          uni: "Charles Sturt University",
          avgTuition: "AUD 20,000 - AUD 30,000",
          coursesOffered:
            "Programmes in agriculture, education, business, healthcare",
        },
        {
          uni: "CQ University Australia",
          avgTuition: "AUD 20,000 - AUD 30,000",
          coursesOffered:
            "Programmes in education, business, engineering, health sciences",
        },
        {
          uni: "Curtin University",
          avgTuition: "AUD 25,000 - AUD 40,000",
          coursesOffered:
            "Strong industry connections, programmes in engineering, business, health sciences, technology",
        },
      ],
    },
    requirements: [
      {
        title: "Admission to a Course",
        desc: "It's crucial to be accepted into an Australian educational institution with national recognition. To achieve this, both the institution itself and the course you want to take must meet certain academic and English language proficiency requirements.",
      },
      {
        title: "Financial Capacity",
        desc: "To study in Australia, you must show that you are able to meet the expenses associated with your stay. In particular, the Australian government requires evidence of funds sufficient to cover tuition fees, living costs, and health insurance. This is necessary to ensure that students are able to support themselves during their time here.",
      },
      {
        title: "Genuine Temporary Entrant (GTE) Requirement",
        desc: "When applying for a student visa, your documentation must include a statement verifying your genuine temporary entrant (GTE) status. This statement is intended to demonstrate that your purpose in studying in Australia is only temporary and that you intend to return home following the successful completion of your studies.",
      },
      {
        title: "English Language Proficiency",
        desc: "When applying to Australian universities, it is necessary to provide evidence of proficiency in English. IELTS, TOEFL, or PTE Academic are the accepted standardised tests for language ability; however, each institution and course has its own individual requirements.",
      },
      {
        title: "Health and Character Requirements",
        desc: "In order to meet the necessary requirements set forth by Australia, an individual must obtain a health examination and provide proof of good character. This can be accomplished by submitting a police clearance certificate or other evidence that demonstrates moral standing.",
      },
      {
        title: "Overseas Student Health Cover (OSHC)",
        desc: " To ensure adequate medical care during your stay in Australia, Overseas Student Health Cover (OSHC) is a necessity. This health insurance coverage is a prerequisite for obtaining a student visa and offers protection against any unexpected medical costs.",
      },
      {
        title: "Student Visa",
        desc: "Once you have a Confirmation of Enrollment (CoE) from your selected educational institution, it is time to submit an application for a student visa (subclass 500). In order to be considered for the visa, applicants should make sure they comply with certain criteria, such as possessing valid health insurance coverage, proof of financial resources, and meeting the Genuine Temporary Entrant (GTE) requirement.S",
      },
    ],
  },
};

export const StudyAbroadInfo = () => {
  return (
    <div className="">
      <nav className="shadow-lg">
        <ul className="flex gap-2 p-3 justify-around">
          <li>Why study in Australia</li>
          <li>benefits</li>
          <li>College & Universities</li>
          <li>Requirements</li>
          <li>Cost</li>
          <li>Scholarship</li>
          <li>Living</li>
          <li>Work</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className="flex w-[90%] m-auto my-9 gap-6">
        <div>
          <div className="">
            <h1 className="text-3xl text-primary my-6">
              Study in Australia from Nepal
            </h1>
            <p>
              Australia is a contemporary, democratic nation with excellent
              healthcare, top-notch educational institutions, and a unique
              geography. Studying in Australia is particularly a terrific option
              for students to advance their education and professional
              opportunities, whether it&apos;s because of the exciting way of
              life, welcoming culture, or excellent educational resources.
            </p>
            <div className="my-6">
              <p>
                <iframe
                  src="https://www.youtube.com/embed/xMFFfStvml0?si=OOq_K-P9eIvI_C_C"
                  className="w-full m-auto block object-cover bg-cover"
                  height={400}
                />
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2" colSpan={2}>
                        Key Facts to Study in Australia
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xl">
                    {studyAbroadData?.studyInAus?.studyInAusFromNepal?.keyFacts?.tableData?.map(
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
            <div>
              <h1 className="text-3xl text-primary my-6">
                Benefits of Studying in Australia for Nepalese Students
              </h1>
              <p>
                In recent years, the number of students from around the world
                pursuing their studies in the Land Down Under has increased
                tremendously. This influx of foreign students into Australian
                higher education can be attributed to a variety of factors. Here
                is a list of benefits of Studying in Australia as a Nepali
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
            <div>
              <h1 className="text-3xl text-primary my-6">
                Popular Courses to Study in Australia for Nepalese Students
              </h1>
              <p>
                Attracting students from all corners of the globe, studying in
                Australian universities is a dream come true for many. Here are
                seven popular courses in Australia that many international
                learners choose to pursue:
              </p>

              {/* table */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Field of Study</th>
                      <th className="px-4 py-2">Courses/Programs</th>
                      <th className="px-4 py-2">
                        Average Tuition Fees(per year)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xl">
                    {studyAbroadData.studyInAus.popularCourses.informationOfCourses.map(
                      ({ field, courses, avgTuition }, idx) => {
                        return (
                          <tr
                            className={`${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-300"
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

              <div></div>
            </div>
          </div>

          {/* top university */}
          <div>
            <h1 className="text-3xl text-primary my-6">
              Top Universities to Study in Australia for Nepalese Students
            </h1>
            <p>
              Australia is home to several top-ranked universities that offer
              high-quality education and research opportunities. While rankings
              may vary depending on the criteria used, here are some of the top
              universities in Australia based on global rankings and reputation:
            </p>
          </div>

          {/* requirements to study */}

          <div>
            <h1 className="text-3xl text-primary my-6">
              Requirements to Study in Australia for Nepalese Students
            </h1>
            <p>
              To understand how to study in Australia, you must also understand
              the admission requirements for different courses in Australia:
            </p>
          </div>

          {/* documents required to study in australian university */}
          <div>
            <h1 className="text-3xl text-primary my-6">
              Documents Required to Study in Australian Universities
            </h1>
            <p>
              You are expected to meet a few requirements to Study in Australian
              Universities. Though there can be minor variations in the
              criteria, depending on the university you apply to, most of them
              will be asked for. They are as follows: -
            </p>
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
              Intake to study in Australia for Nepalese Students
            </h1>
          </div>

          {/* Cost of studying */}
          <div>
            <h1 className="text-3xl text-primary my-6">
              Cost of Studying in Australia for Nepalese Students
            </h1>
            <p>
              Choosing to pursue a degree in Australia is no small decision, and
              it&apos;s important for students to understand the full costs
              associated with studying in Australia. From tuition fees to living
              expenses, textbooks, and more, here is an overview of what one can
              expect when calculating the expense of gaining a higher education
              in Australia:
            </p>
          </div>

          {/* Scholarship */}
          <div>
            <h1 className="text-3xl text-primary my-6">
              Scholarships to Study in Australia for Nepalese Students
            </h1>
            <p>
              For Nepalese students considering higher education in Australia,
              it is of the utmost importance to assess the financial components
              associated with this decision. Along with tuition fees and living
              expenses, various other costs, such as textbooks, must be taken
              into account. Fortunately, there are numerous scholarships to
              provide financial aid for Nepalese students. Here is a list of
              scholarship in Australia:
            </p>
          </div>

          {/* Living in aus */}

          <div>
            <h1 className="text-3xl text-primary my-6">
              Living in Australia for Nepalese Students
            </h1>
          </div>

          {/* post work */}
          <div>
            <h1 className="text-3xl text-primary my-6">
              Post-study Work Opportunities in Australia for Nepalese Students
            </h1>
          </div>

          {/* FAQ */}
          <div></div>
        </div>
        <div className="w-30%">
          <Form />
        </div>
      </div>
    </div>
  );
};
