import React from "react";

import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { NewPost } from "../component/newPost";
import { SortPosts } from "../component/sort";
import { Post } from "../component/post";

import "../styles/home.css";
import { usePost } from "../contexts/postContext";
import { useAuth } from "../contexts/authContext";

export const Home = () => {
    const { postData } = usePost();
    const { currUser } = useAuth();

    const getTitle = () => (
        <div className="title-container">
        <p className="text">Home</p>
        </div>
    );

    const getPosts = () => {
        const followingUsernames = currUser.following.map((user) => user.username);
        const homePosts = postData.filter((post) => {
          return followingUsernames.includes(post.username) || post.username === currUser.username;
        });
      
        return homePosts.map((post) => (
          <div className="home-posts-container">
            <Post post={post} />
          </div>
        ));
    };

    return (
        <div className="home-page">
        <Nav />
        <div className="home-container">
            {getTitle()}
            <div className="sub-containers">
                <NewPost />
                <SortPosts/>
                {getPosts()}
            </div>
        </div>
        <SuggestedUsers />
        </div>
    );
};
