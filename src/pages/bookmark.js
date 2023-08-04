import { Loader } from "../component/loader";
import { Nav } from "../component/nav";
import { Post } from "../component/post";
import { SuggestedUsers } from "../component/suggestedUsers";
import { useUser } from "../contexts/userContext";

import "../styles/bookmarks.css";

export const Bookmark = () => {
    const { bookmarks, isLoading } = useUser();

    const getTitle = () => (
        <div className="title-container">
        <p className="text">Bookmarks</p>
        </div>
    );

    const getBookmarkedPosts = () =>
    bookmarks.length > 0 ?
        bookmarks.map((post) => (
          <div className="posts-container" key={post._id}>
            <Post post={post} />
          </div>
        )) : <h3 className="center">No Bookmarks</h3>;
    return (
        <div className="bookmarks-page">
            <Nav />
            <div className="bookmarks-container">
                {getTitle()}
                {isLoading ? <Loader/> : getBookmarkedPosts() }
            </div>
            <SuggestedUsers />
        </div>
    )
}