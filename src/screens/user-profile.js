import React from 'react';

import data from "./../data/user-data.js";
import postData from "./../data/posts.js";

import Header from './../components/header';
import ProfileHeader from './../components/profileHeader';
import StarRating from './../components/starRating';

const profileUser = data[2]; // sets user for the profile, this means we can access data connected to the user
const posts = postData;

export default function SocialFeed() {
    return (
        
        <div>
            <Header/>
            <ProfileHeader/>
            <section className="post-container w-full font-poppins">
                {posts.map((post) => (
                    <article key={post.id} className="post-item w-full lg:w-3/5 lg:mx-auto w-full p-4 flex flex-col border-b border-grey">
                        <div className="post-item__header w-full mb-4 flex items-center">
                            <img className="w-14 h-14 rounded-full border-red border-2 mr-4" src="https://www.fillmurray.com/200/200" alt="{profileUser.profileImageAlt}"/>
                            <div className="">
                                <p className="font-bold text-xs">{post.authordisplayName}</p>
                                <p className="text-xs">{post.creationTimeStamp}</p>
                            </div>
                        </div>
                        <div className="post-item__body text-xs leading-5 mb-4">
                            <p>{post.postBodyText}</p>
                        </div>
                        {post.postImageSrc ? 
                        <div className="post-item__content--image w-full">
                            <img src={post.postImageSrc} alt="random alt"/>
                        </div>
                        : ''}
                        {post.videoPath ? 
                        <div className="post-item__content--video w-full">
                            <video src={post.videoPath} width="600" height="300" controls="controls" autoPlay={true} />
                        </div>
                        : '' }
                        {post.recipeId ? 
                        <div className="post-item__content--recipe w-full">
                            <div className="w-full border-2 border-red">
                                <div className="w-full p-2 flex">
                                    <div className="w-1/2">
                                        <img src="https://image.shutterstock.com/image-photo/handsome-adult-brewer-inspecting-process-600w-1433953739.jpg" alt="random alt"/>
                                    </div>
                                    <div className="w-1/2 pl-2 text-xs">
                                        <h2 className="font-bold text-sm">{post.recipeName}</h2>
                                        <h3><span className="font-bold">Style:</span> {post.recipeBeerStyle}</h3>
                                        <h4><span className="font-bold">ABV:</span> {post.recipeAbv}%</h4>
                                        <div className="text-xs mt-2">
                                            <p>{post.recipeSummary}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex border-red border-t-2">
                                    <div className="w-full text-xs border-r-2 border-red p-2 w-2/3 flex items-center">
                                        <p className="mr-2">Public Rating:</p>
                                        <StarRating />
                                    </div>
                                    <div className="w-1/3 flex">
                                        <a href={post.recipeUrl} className="uppercase text-red font-bold text-sm p-2 text-center w-full">View Recipe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : '' }
                    </article>
                ))} 
            </section>
        </div>
    );
}