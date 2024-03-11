import { Navbar } from "../components/Navbar";
import { StudyInUSAHeader } from "../components/studyabroad/study in usa/StudyInUSAHeader";
import { StudyInUSAInfo } from "../components/studyabroad/study in usa/StudyInUSAInfo";
import { Footer } from "../components/Footer";
import { Helpline } from "../components/Helpline";
export const StudyAbroadInUSA = () => {
  return (
    <div>
      <Navbar />
      <StudyInUSAHeader />
      <StudyInUSAInfo />
      <Footer />
      <Helpline />
    </div>
  );
};
