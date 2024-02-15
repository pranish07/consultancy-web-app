import { Helpline } from "../components/Helpline"
import { Navbar } from "../components/Navbar"
import { BlogHeader } from "../components/blogs/BlogHeader"
import { BlogInfo } from "../components/blogs/BlogInfo"
import {Footer} from "../components/Footer"
export const BlogsPage = () => {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <Helpline />
      <BlogInfo />
      <Footer />
      </div>
  )
}
