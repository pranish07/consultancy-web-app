import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { FreeConsultant } from "../components/FreeConsultant";
import { WhereYouWantToGo } from "../components/WhereYouWantToGo";
import { WhySection } from "../components/WhySection";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";
import { ApplicationProcess } from "../components/ApplicationProcess";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FreeConsultant />
      <WhereYouWantToGo />
      <section className="m-auto w-[70%] ">
        <div className="grid grid-cols-3 gap-5 m-5">
          <ApplicationProcess />
          <ApplicationProcess />
          <ApplicationProcess />
        </div>
      </section>
      <WhySection />
      <ContactUs />
      <Footer />
    </div>
  );
};
