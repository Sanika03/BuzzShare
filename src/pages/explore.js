import { Nav } from "../component/nav";
import { Post } from "../component/post";
import { SuggestedUsers } from "../component/suggestedUsers";
import { usePost } from "../contexts/postContext";

import "../styles/explore.css";

export const Explore = () => {
    const { postData } = usePost();

    const getTitle = () => (
        <div className="title-container">
        <p className="text">Explore</p>
        </div>
    );

    const getExplorePosts = () =>
        postData.map((post) => (
          <div className="posts-container" key={post._id}>
            <Post post={post} />
          </div>
        ));
    
    return (
        <div className="explore-page">
            <Nav />
            <div className="explore-container">
                {getTitle()}
                <div className="sub-containers">
                    {getExplorePosts()}
                </div>
            </div>
            <SuggestedUsers />
        </div>
    )
}