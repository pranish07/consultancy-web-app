import { Form } from "../Form";

const data = [
  {
    title: "Student Visa Services for Nepalese students",
    info: `When it comes to visas, the process and outcomes can be very daunting for a lot of people. You need a team you can trust to give you the right guidance on documentation and process.

    At AECC Nepal, we’ve got years of experience in handling visa applications. Requirements vary by country and change often. We are always updated about the changes and equipped to support you. While our counsellors can guide you on general visa documents if you are managing your own application, you have the support of our in-house migration agents if you need help with a more complex question.`,

    btn: "want to get more latest news and updates? Contact AECCC today",
  },
  {
    title: "Study Visa for Australia from Nepal",
    info: "Australia is home to over 40 universities, each offering diverse educational programs to international students across the world. The beautiful weather and spectacular beaches make Australia a popular destination for students dreaming of a unique international study experience. When it comes to educational excellence, Australia boasts of Go8 Universities, owing to the immense research contribution from the Go8 students to the world. Every year, over 3,00,000 international students apply for a student visa to study in Australia",
    btn: "Student Visa for Australia",
  },
  {
    title: "Study Visa for Canada from Nepal",
    info: "With over 100+ universities, Canada is known for providing quality education with high-end, research facilitated campuses to international students. A total of 30 Canadian institutions have been featured in Times Higher Education’s World University Rankings 2020, out of which 3 are in the world’s top 50- a feat successfully accomplished by only a handful of countries. Every year, over 6,00,000 international students apply for a student visa to study in Canada.",
    btn: "Student visa for Canada",
  },
  {
    title: "Student Visa for New Zealand from Nepal",
    info: "New Zealand universities have several dynamic and distinct, layered, quality assurance systems, which ensure learning and teaching are of a superior standard. Besides the fact that it’s probably one of the most beautiful places to live in, the prodigious reputation of New Zealand universities is one of the reasons why over 90% of international students chose to study in the country. Every year, over 2,00,000 international students apply for a student visa to study in New Zealand.",
    btn: "Student Visa for New zealand",
  },
  {
    title: "Study Visa for UK from Nepal",
    info: "With over 300 universities and colleges offering 50,000+ undergraduate level higher education courses, the UK is one of the leading study destinations for international students in the world. Besides, the course span of any university in the UK is shorter than that of many developed countries, in turn helping international students reduce their accommodation and tuition fees while gaining the maximum knowledge. Every year, over 4,00,000 international students apply for a student visa to study In UK.",
    btn: "Student Visa for UK",
  },
];

export const StudyAbroadInfo = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex gap-2 p-3 justify-around">
          <li>Student Visa Services</li>
          <li>Australia Visa</li>
          <li>Canada Visa</li>
          <li>New Zealand Visa</li>
          <li>UK Visa</li>
          <li>USA Visa</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="">
          {data.map(({ title, info, btn }, idx) => {
            return (
              <div key={idx}>
                <h1>{title}</h1>
                <p>{info}</p>
                <button>{btn}</button>
              </div>
            );
          })}
        </div>
        <div className="w-30%">
          <Form />
        </div>
      </div>
    </div>
  );
};
