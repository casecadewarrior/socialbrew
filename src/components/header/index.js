import React from "react";
import { useState } from "react"; // import state for the hamburger bar
import Logo from "./logo.svg";
import { Link } from "react-router-dom";

import WidthChecker from "../widthChecker";

//This will be replaced by AWS Conigto object
const authenticatedLoggedInUser = [{
  id: 1,
  name: 'Shaun Parker',
  displayName: 'displayNameShaun',
  profileImageSrc: 'https://picsum.photos/200',
  profileImageAlt: "Shauns profile image",
  profileBannerImageSrc: 'https://www.fillmurray.com/640/360', 
  profileBannerImageAlt: "Shauns profile banner image",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur, leo ut molestie aliquet, felis nulla volutpat libero, non gravida nunc mi at ante. Phasellus sed magna blandit, auctor risus ac, aliquet tellus.", 
  profileUrl: "/profile/displayNameShaun",
},]

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // Sets isNavOpen state as false
    const authUser = authenticatedLoggedInUser[0];
    return (
    <>
      <WidthChecker/>
      <nav className="bg-white sticky z-10 top-0 relative flex flex-wrap pt-3 lg:py-3 font-poppins border-red border-b-2">
        <div className="lg:container lg:mx-auto relative flex flex-wrap items-center justify-between w-full">
          <div className={"w-full px-4 relative flex justify-between lg:w-auto lg:block lg:justify-start pb-4 lg:pb-0" + (isNavOpen ? " pb-4" : " ")}>
            <div className="w-16 flex">
                <img src={Logo} alt="Logo" className="w-full"/>
            </div>
            <div className="flex">
              {authUser.profileImageSrc ?
                <a href={authUser.profileUrl}><img className="w-10 h-10 rounded-full border-2 border-red" src={authUser.profileImageSrc} alt="Bordered avatar"></img></a>
              : <div className="overflow-hidden border-red border-2 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div> }
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
          </div>
          <div
           className={
              "lg:flex items-center px-4 bg-red w-full lg:w-auto lg:bg-transparent" +
              (isNavOpen ? " flex absolute lg:relative top-12 lg:top-0" : " hidden") // Applies the correct class based on the navigation state
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto py-2 lg:py-0">
              <li className="nav-item md:mx-2">
                <Link to="/dashboard" className="py-2 flex items-center text-white lg:text-black hover:opacity-75">Dashboard</Link>
              </li>
              <li className="nav-item md:mx-2">
                <Link to="/public-recipes" className="py-2 flex items-center text-white lg:text-black hover:opacity-75">Public Recipes</Link>
              </li>
              <li className="nav-item md:mx-2">
                <Link to="/social-feed" className="py-2 flex items-center text-white lg:text-black hover:opacity-75">Social Feed</Link>
              </li>
              <li className="nav-item md:mx-2">
                <Link to="/brewing-calculators" className="py-2 flex items-center text-white lg:text-black hover:opacity-75">Brewing Calculators</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}