import { Navbar } from "../components/Navbar";
import { StudyAbroadHeader } from "../components/studyabroad/StudyAbroadHeader";
import { StudyAbroadInfo } from "../components/studyabroad/StudyAbroadInfo";
import { Footer } from "../components/Footer";
export const StudyAbroadPage = () => {
  return (
    <div>
      <Navbar />
      <StudyAbroadHeader />
      <StudyAbroadInfo />
      <Footer />
    </div>
  );
};
