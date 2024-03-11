import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <ul className="font-black flex flex-wrap gap-4 font-normal text-white justify-center bg-black p-5">
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
        </ul> */}

      <div className="navbar bg-black bg-opacity-90 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999999] p-2 shadow rounded-box bg-black w-[95vw] h-[82vh] sticky text-lg"
              >
                <NavLink to={"/"}>
                  <li className="p-3">Home</li>
                </NavLink>

                <NavLink to={"/studyabroad"}>
                  <li className="p-3">Study Abroad</li>
                </NavLink>
                <ul className="px-3">
                  <NavLink to={"/studyinaus"}>
                    <li>Study In Australia</li>
                  </NavLink>

                  <NavLink to={"/studyinusa"}>
                    <li>Study in USA</li>
                  </NavLink>

                  <NavLink to={"/studyincanada"}>
                    <li>Study in Canada</li>
                  </NavLink>
                </ul>

                <NavLink to={"/explore"}>
                  <li className="p-3">Explore</li>
                </NavLink>

                <NavLink to={"/aboutus"}>
                  <li className="p-3">About</li>
                </NavLink>

                <NavLink to={"/testprep"}>
                  <li className="p-3">Test prep</li>
                </NavLink>

                <NavLink to={"/blogs"}>
                  <li className="p-3">blog</li>
                </NavLink>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl">Pranish</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to={"/"}>
              <li className="p-2">Home</li>
            </NavLink>

            <li>
              <details>
                <summary>
                  <NavLink to={"/studyabroad"}>
                    <li>Study in Abroad </li>
                  </NavLink>
                </summary>
                <ul className="p-2 bg-black">
                  <NavLink to={"/studyinaus"}>
                    <li className="p-2">Study in Australia</li>
                  </NavLink>

                  <NavLink to={"/studyinusa"}>
                    <li className="p-2">Study in USA</li>
                  </NavLink>

                  <NavLink to={"/studyincanada"}>
                    <li className="p-2">Study in Canada</li>
                  </NavLink>
                </ul>
              </details>
            </li>

            <NavLink to={"/explore"}>
              <li className="p-2">Explore</li>
            </NavLink>

            <NavLink to={"/about"}>
              <li className="p-2">About</li>
            </NavLink>

            <NavLink to={"/testprep"}>
              <li className="p-2">Test prep</li>
            </NavLink>

            <NavLink to={"/blogs"}>
              <li className="p-2">Blog</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="p-2">Login</a>
        </div>
      </div>
    </div>
  );
};
