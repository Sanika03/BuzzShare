import React from "react";

import "../styles/sort.css";
import { usePost } from "../contexts/postContext";

export const SortPosts = () => {
    const { selectedOption, setSelectedOption } = usePost();
    
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="horizontal sort-filter-container">
        <button
            className={`filter-option ${selectedOption === "Trending" ? "selected" : ""}`}
            onClick={() => handleOptionSelect("Trending")}
        >
            Trending
        </button>
        <button
            className={`filter-option ${selectedOption === "Latest" ? "selected" : ""}`}
            onClick={() => handleOptionSelect("Latest")}
        >
            Latest
        </button>
        <button
            className={`filter-option ${selectedOption === "Oldest" ? "selected" : ""}`}
            onClick={() => handleOptionSelect("Oldest")}
        >
            Oldest
        </button>
        </div>
    );
};