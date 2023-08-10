import React from "react";

import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { NewPost } from "../component/newPost";
import { SortPosts } from "../component/sort";
import { Post } from "../component/post";

import "../styles/home.css";
import { usePost } from "../contexts/postContext";
import { useAuth } from "../contexts/authContext";
import { Loader } from "../component/loader";

export const Home = () => {
  const { postData, selectedOption, isLoading } = usePost();
  const { currUser } = useAuth();

  const getTitle = () => (
      <div className="title-container">
          <p className="text">Home</p>
      </div>
  );

  const followingUsernames = currUser?.following?.map((user) => user.username) || [];

  const homePosts = postData?.filter((post) => {
      return followingUsernames.includes(post.username) || post.username === currUser?.username;
  });

  const filteredPosts = selectedOption === "Trending"
      ? homePosts?.filter((post) => post.likes.likeCount >= 5).sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      : homePosts;

  const getPosts = () => {
      if (selectedOption === "Latest") {
          filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (selectedOption === "Oldest") {
          filteredPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }
      return filteredPosts.length > 0 ? filteredPosts.map((post) => (
          <div className="posts-container" key={post._id}>
              <Post post={post} />
          </div>
      )) : <p className="bold center">No posts</p>;
  };

  return (
      <div className="home-page">
          <Nav />
          <div className="home-container">
                {getTitle()}
                <NewPost />
                <SortPosts />
                {isLoading.posts ? <Loader/> : getPosts()}
          </div>
          <SuggestedUsers />
      </div>
  );
};