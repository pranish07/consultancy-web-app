import { Navbar } from "../components/Navbar"
import { TestPrepExam } from "../components/testprep/TestPrepExam"
import { TestPrepHeader } from "../components/testprep/TestPrepHeader"
import { TestprepInfo } from "../components/testprep/TestprepInfo"
import {Footer} from "../components/Footer"
import {Helpline} from "../components/Helpline"
export const TestPrepPage = () => {
  return (
    <div>
      <Navbar />
      <TestPrepHeader />
      <div className="w-[90%] m-auto">
      <TestprepInfo />
      <TestPrepExam />
      </div>
      <Footer />
      <Helpline />
    </div>
  )
}
