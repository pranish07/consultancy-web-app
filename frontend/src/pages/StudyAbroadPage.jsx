import { Navbar } from "../components/Navbar";
import { StudyAbroadHeader } from "../components/studyabroad/StudyAbroadHeader";
import { StudyAbroadInfo } from "../components/studyabroad/StudyAbroadInfo";
import { Footer } from "../components/Footer";
import { Helpline } from "../components/Helpline";
export const StudyAbroadPage = () => {
  return (
    <div>
      <Navbar />
      <StudyAbroadHeader />
      <StudyAbroadInfo />
      <Footer />
      <Helpline />
    </div>
  );
};
