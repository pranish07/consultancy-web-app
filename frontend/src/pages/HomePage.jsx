import { Navbar } from "../components/Navbar";
import { Header } from "../components/home/Header";
import { FreeConsultant } from "../components/home/FreeConsultant";
import { WhereYouWantToGo } from "../components/home/WhereYouWantToGo";
import { WhySection } from "../components/home/WhySection";
import { ContactUs } from "../components/home/ContactUs";
import { Footer } from "../components/Footer";
import { ApplicationProcess } from "../components/home/ApplicationProcess";
import { Helpline } from "../components/Helpline";

export const HomePage = () => {
  return (
    <div>
      <Helpline />
      <Navbar />
      <Header />
      <section className="bg-purple-100">
      <FreeConsultant />
      </section>
      <WhereYouWantToGo />

      <h1 className="text-2xl font-bold text-center my-4">
        Guidance provided by us
      </h1>
      <p className="text-lg text-center">
        You can get these following services by our company
      </p>
      <section className="m-auto w-[70%] ">
        <div className="grid grid-cols-3 gap-5 m-5">
          <ApplicationProcess
            topic="Education Counselling"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate deleniti nisi optio officiis aliquam cumque iusto qui sit ut."
          />
          <ApplicationProcess
            topic="Application Process"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate deleniti nisi optio officiis aliquam cumque iusto qui sit ut."
          />
          <ApplicationProcess
            topic=" Scholarship Guidance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate deleniti nisi optio officiis aliquam cumque iusto qui sit ut."
          />
        </div>
      </section>
      
      <WhySection />
      <ContactUs />
      <Footer />
    </div>
  );
};
