import React from "react";
import postData from "../../data/posts.js";
import StarRating from '.././starRating';

/* 

New logic needs to be added that returns the social posts 
for the following use cases : 

1) All posts from the logged in user (for profile page)
2) All posts from a specific user
3) All posts from a following list (only shows posts from 
the people a user follows) this will build the social feed.

*/

function handleReplySubmit(e) {
    e.preventDefault();
}

const posts = postData;

export default function SocialPosts() {
    return (
    <>
      <section className="post-container w-full font-poppins">
                {posts.map((post) => (
                    <article key={post.id} className="post-item w-full flex flex-col border-b border-grey">
                        <div className="p-4 w-full flex flex-col border-b border-grey">
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
                            : null }
                            {post.videoPath ? 
                            <div className="post-item__content--video w-full">
                                <video src={post.videoPath} width="600" height="300" controls="controls" autoPlay={true} />
                            </div>
                            : null }
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
                            : null }
                            <form className="w-full bg-input pl-4 mt-4 bg-input flex" onSubmit={handleReplySubmit}>
                                <input type="text" className="w-full bg-transparent" placeholder="Write a comment"/>
                                <button type="submit" className="bg-red p-2 px-4 text-sm text-white">Reply</button>
                            </form>
                        </div>
                        <div className="w-full border-t border-grey">
                            <div className="w-full text-red px-4 py-2 flex justify-between">
                                <p>Replies: <span className="font-bold">2</span></p>
                                <button>+</button>
                            </div>
                            {/*
                                Add replies per post and output them here
                            */}
                        </div>
                    </article>
                ))} 
            </section>
    </>
  );
}