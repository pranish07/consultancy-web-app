import { ApplicationProcess } from "../components/ApplicationProcess/ApplicationProcess"
import { ContactUs } from "../components/ContactUs/ContactUs"
import { Footer } from "../components/Footer/Footer"
import { FreeConsultant } from "../components/FreeConsultant/FreeConsultant"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/Navbar/Navbar"
import { WhereYouWantToGo } from "../components/WhereYouWantToGo/WhereYouWantToGo"
import { WhySection } from "../components/WhySection/WhySection"


export const HomePage = () => {
  return (
    <div>
         <Navbar />
      <Header />
      <FreeConsultant /> 
      <WhereYouWantToGo />
      <WhySection />
      <ContactUs />
      <ApplicationProcess />
      <ContactUs />
      <Footer />
    </div>
  )
}
