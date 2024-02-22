import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul className="font-black flex flex-wrap gap-4 font-normal text-white justify-center bg-black p-5">
        <NavLink to={"/"}>
          <li>Home page</li>
        </NavLink>
        <NavLink to={"/studyabroad"}>
          <li>Study Abroad</li>
        </NavLink>
        <NavLink to={"/explore"}>
          <li>Explore countries</li>
        </NavLink>

        <NavLink to={"/about"}>
          <li>About us page</li>
        </NavLink>
        <NavLink to={"/testPrep"}>
          <li>Test Preparation</li>
        </NavLink>
        <NavLink to={"/blogs"}>
          <li>Blogs page</li>
        </NavLink>
      </ul>
    </div>
  );
};
