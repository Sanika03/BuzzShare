import React from "react";

import { Nav } from "../component/nav";
import { SuggestedUsers } from "../component/suggestedUsers";
import { NewPost } from "../component/newPost";

import "../styles/home.css";

export const Home = () => {
    const getTitle = () => (
        <div className="title-container">
        <p className="text">Home</p>
        </div>
    );

    return (
        <div className="home-page">
        <Nav />
        <div className="home-container">
            {getTitle()}
            <div className="sub-containers">
                <NewPost />
            </div>
        </div>
        <SuggestedUsers />
        </div>
    );
};
