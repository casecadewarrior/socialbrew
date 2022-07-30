import React from "react";
import data from "../../data/user-data.js";
const profileUser = data[2]; // sets user for the profile, this means we can access data connected to the user
const bannerImage = profileUser.profileBannerImageSrc;

const bannerBackgroundImage = {
  backgroundImage: 'url(' + bannerImage + ')',
};





export default function ProfileHeader() {
    console.log('Profile URL: ' + bannerImage);
    return (
    <>
      <div className="font-poppins bg-red w-full h-40 md:h-50 lg:h-48 bg-cover bg-center" style={bannerBackgroundImage}></div>
      <div className="w-full relative bg-red p-4">
        <div className="lg:container lg:mx-auto w-full flex items-center">
          <img className="w-20 h-20 absolute bottom-5 rounded-full border-white border-2" src={profileUser.profileImageSrc} alt={profileUser.profileImageAlt}></img>
          <div className="flex items-center ml-auto">  
            <button className="mx-4 text-xs uppercase text-white font-bold">Follow</button>
            <button className="mx-4 text-xs uppercase text-white font-bold">Message</button>
          </div>
        </div>
      </div>
      <div className="font-poppins bg-slate-100 w-full">
        <div className="lg:container lg:mx-auto w-full p-4">
          <h1 className="text-red font-bold">{profileUser.name}</h1>
          <p className="mb-4 text-xs">@{profileUser.displayName}</p>
          <p className="text-xs">{profileUser.bio}</p>
        </div>
      </div>
    </>
  );
}