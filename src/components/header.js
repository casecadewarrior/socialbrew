import React from "react";
import { useState } from "react"; // import state for the hamburger bar
import Logo from "./logo.svg";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // Sets isNavOpen state as false
    return (
    <>
      <nav className="relative flex flex-wrap pt-3 lg:py-3 mb-3 font-poppins border-red border-b-2">
        <div className="lg:container lg:mx-auto flex flex-wrap items-center justify-between w-full">
          <div className={"w-full px-4 relative flex justify-between lg:w-auto lg:block lg:justify-start pb-4 lg:pb-0" + (isNavOpen ? " pb-4" : " ")}>
            <div className="w-16 flex">
                <img src={Logo} alt="Logo" className="w-full"/>
            </div>
            <button
              className="cursor-pointer pl-6 pr-2 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)} // changes the state of the navigation when clicked
            >
                <div className="space-y-2">
                    <span className="block w-10 h-1 bg-red"></span>
                    <span className="block w-10 h-1 bg-red"></span>
                    <span className="block w-10 h-1 bg-red"></span>
                </div>
            </button>
          </div>
          <div
           className={
              "lg:flex items-center px-4 bg-red w-full lg:w-auto lg:bg-transparent" +
              (isNavOpen ? " flex " : " hidden") // Applies the correct class based on the navigation state
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto py-2 lg:py-0">
              <li className="nav-item md:mx-2">
                <a
                  className="py-2 flex items-center text-white lg:text-black hover:opacity-75"
                  href="/dashboard"
                >
                    Dashboard
                </a>
              </li>
              <li className="nav-item md:mx-2">
                <a
                  className="py-2 flex items-center text-white lg:text-black hover:opacity-75"
                  href="/recipes"
                >
                    Public Recipes
                </a>
              </li>
              <li className="nav-item md:mx-2">
                <a
                  className="py-2 flex items-center text-white lg:text-black hover:opacity-75"
                  href="/calculators"
                >
                    Calculators
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}