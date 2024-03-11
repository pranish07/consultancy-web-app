import { Navbar } from "../components/Navbar";
import { StudyInAusHeader } from "../components/studyabroad/study in australia/StudyInAusHeader";
import { StudyAbroadInfo } from "../components/studyabroad/StudyAbroadInfo";
import { Footer } from "../components/Footer";
import { Helpline } from "../components/Helpline";
export const StudyAbroadInAus = () => {
  return (
    <div>
      <Navbar />
      <StudyInAusHeader />
      <StudyAbroadInfo />
      <Footer />
      <Helpline />
    </div>
  );
};
