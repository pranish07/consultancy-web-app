import { AboutHeader } from "../components/about/AboutHeader";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <section>
        <div>
          <h4>Welcome to our Virtual Office</h4>
          <p>
            The only place you&apos;ll ever need to visit to clear all your
            study abroad queries. Staying connected with you during all times is
            of utmost importance to us, and we let no obstacle come in the way
            of your dreams. Hence, we&apos;re bringing our services to you,
            online. Meet our education experts at our brand new virtual office
            and get the right guidance for all your study abroad plans. The
            service remains the same, and it&apos;s no different from meeting us
            in person. Rest assured, your study abroad dreams are in good hands.
            All you have to do is:
          </p>
        </div>
        <div>
          <i>icon</i>
          <p>Fill in the details below</p>
          <i>icon</i>
          <p>
            click on the meetus online button and you will be redirected to a
            google meet waiting link on the form
          </p>
          <i>icon</i>
          <p>Connect with an expert education counsellers in a private room</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
