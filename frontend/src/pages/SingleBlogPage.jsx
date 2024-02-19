import { useParams } from "react-router-dom";
import { useGetBlogsQuery } from "../api/apiSlice";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const SingleBlogPage = () => {
  const { id } = useParams();
  const {
    data: blogData,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetBlogsQuery(id);

  const topData = blogData?.toppost?.find((item) => item.id == id);
  // const getCategory= (id)=>{
  //     if(blogData && blogData.toppost){
  //         const topPost = blogData.toppost.find((item) => item.id == id);
  //         if(topPost){
  //             return topPost;
  //         }
  //     }
  // }
  // const category = getCategory(parseInt(id))
  return (
    <div>
        <Navbar />
      <h1>Single page</h1>
      {/* Render the blog content */}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {isSuccess && (
        <div>
          <h2>{topData.id}</h2>
          <img src={topData.image} alt="" />
          <h3>{topData.heading}</h3>
          {/* <p>{blogData.content}</p> */}
        </div>
      )}
      {/* {category && <div>Category:{category}</div>} */}
      <Footer />
    </div>
  );
};
