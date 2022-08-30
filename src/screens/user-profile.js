import React from 'react';

import postData from "./../data/posts.js";

import Header from './../components/header';
import ProfileHeader from './../components/profileHeader';
import SocialPosts from '../components/socialPosts';

//const profileUser = data[2]; // sets user for the profile, this means we can access data connected to the user
const posts = postData;

export default function SocialFeed() {
    return (
        
        <div>
            <Header/>
            <ProfileHeader/>
            {posts.map((data, idx) => (
                <SocialPosts {...data}/>
            ))}
        </div>
    );
}