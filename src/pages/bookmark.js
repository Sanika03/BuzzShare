import { Nav } from "../component/nav";
import { Post } from "../component/post";
import { SuggestedUsers } from "../component/suggestedUsers";
import { useUser } from "../contexts/userContext";

import "../styles/bookmarks.css";

export const Bookmark = () => {
    const { bookmarks } = useUser();

    const getTitle = () => (
        <div className="title-container">
        <p className="text">Bookmarks</p>
        </div>
    );

    const getBookmarkedPosts = () =>
        bookmarks.map((post) => (
          <div className="posts-container" key={post._id}>
            <Post post={post} />
          </div>
        ));
    return (
        <div className="bookmarks-page">
            <Nav />
            <div className="bookmarks-container">
                {getTitle()}
                <div className="sub-containers">
                    {bookmarks.length > 0 ? getBookmarkedPosts() : <h3 className="center">No Bookmarks</h3>}
                </div>
            </div>
            <SuggestedUsers />
        </div>
    )
}