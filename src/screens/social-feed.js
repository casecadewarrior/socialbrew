import React from 'react';
import Header from './../components/header';
import SocialPosts from '../components/socialPosts';
import SharePostForm from "../components/sharePostForm";

import postData from "../data/posts";

const currentPost = postData; // Add logic to set recipe id

/* 

The logic to set the user needs to be created so the user
can be sent to the social post component

*/

export default function SocialFeed() {
    return (
        <div>
            <Header/>
            <SharePostForm/>
            {currentPost.map((data, idx) => (
                <SocialPosts {...data}/>
            ))}
        </div>
    );
}