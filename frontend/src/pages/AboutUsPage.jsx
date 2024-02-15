import { AboutDesc } from "../components/about/AboutDesc";
import { AboutHeader } from "../components/about/AboutHeader";
import { StudentTestimonial } from "../components/about/StudentTestimonial";
import { WhoWeAre } from "../components/about/WhoWeAre"
import { Footer } from "../components/Footer";
import { Helpline } from "../components/Helpline";
import { Navbar } from "../components/Navbar";

export const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutDesc />
      <StudentTestimonial />
      <WhoWeAre />
      <Footer />
      <Helpline />
    </div>
  );
};
