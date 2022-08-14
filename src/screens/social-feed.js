import React from 'react';
import Header from './../components/header';
import SocialPosts from '../components/socialPosts';
import SharePostForm from "../components/sharePostForm";

export default function SocialFeed() {
    return (
        <div>
            <Header/>
            <SharePostForm/>
            <SocialPosts/>
        </div>
    );
}