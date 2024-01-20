import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogsPage } from "./pages/BlogsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ExploreUniPage } from "./pages/ExploreUniPage";
import { StudyAbroadPage } from "./pages/StudyAbroadPage";
import { TestPrepPage } from "./pages/TestPrepPage";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutUsPage /> }/>
      <Route path="/blogs" element={<BlogsPage />}/>
      <Route path="/explore" element={<ExploreUniPage />}/>
      <Route path="/studyabroad" element={<StudyAbroadPage />}/>
      <Route path="/testprep" element={<TestPrepPage />}/>
      
      </Routes>
    </div>
  );
};

export default App;
