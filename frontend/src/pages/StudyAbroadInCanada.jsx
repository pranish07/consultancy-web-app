import { Navbar } from "../components/Navbar";
import { StudyInCanadaHeader} from "../components/studyabroad/study in canada/StudyInCanadaHeader";
import { Footer } from "../components/Footer";
import { Helpline } from "../components/Helpline";
import { StudyInCanadaInfo } from "../components/studyabroad/study in canada/StudyInCanadaInfo";
export const StudyAbroadInCanada = () => {
  return (
    <div>
      <Navbar />
      <StudyInCanadaHeader />
      <StudyInCanadaInfo />
      <Footer />
      <Helpline />
    </div>
  );
};
