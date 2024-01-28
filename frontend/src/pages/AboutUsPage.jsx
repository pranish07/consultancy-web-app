import { AboutDesc } from "../components/about/AboutDesc";
import { AboutHeader } from "../components/about/AboutHeader";
import { StudentTestimonial } from "../components/about/StudentTestimonial";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutDesc />
      <StudentTestimonial />
      <Footer />
    </div>
  );
};
