import { Helpline } from "../components/Helpline";
import { Navbar } from "../components/Navbar";
import { ExploreFilter } from "../components/explore/ExploreFilter";
import { ExploreHeader } from "../components/explore/ExploreHeader";
import { ExploreSearch } from "../components/explore/ExploreSearch";

export const ExploreUniPage = () => {
  return (
    <div>
      <Navbar />
      <ExploreHeader />
      <ExploreSearch />
      <ExploreFilter />
      <Helpline />
    </div>
  );
};
