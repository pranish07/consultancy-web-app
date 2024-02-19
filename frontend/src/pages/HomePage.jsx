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
      <section>
        {" "}
        <h1 className="text-3xl font-bold text-center mt-10 mb-2">
          Guidance provided by us
        </h1>
        <p className="text-lg text-center mb-9">
          You can get these following services by our company
        </p>
        <section className="m-auto w-[90%] ">
          <div className="grid grid-cols-3 gap-9 ">
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
      </section>

      <WhySection />
      <ContactUs />
      <Footer />
    </div>
  );
};
