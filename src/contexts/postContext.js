import { createContext, useContext, useEffect, useState } from "react";
import { createPostService, getAllPostsService } from "../services/postServices"

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [ posts, setPosts ] = useState([]);

    console.log(posts)

    const getPostsHandler = async () => {
        try {
            const {data: { posts }, status} = await getAllPostsService();
            if(status === 200) {
                setPosts(posts);
            }  
        }
        catch (e) {
            console.error(e);
        }
    }

    const addPostHandler = async (input, image, token, currUser) => {
        try {
            const {data: { posts }, status} = await createPostService({input, postImage: image, token, user: currUser});
            if(status === 200) {
                setPosts(posts);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getPostsHandler();
    }, [])

    return (
        <PostContext.Provider value={{ posts, addPostHandler }}>
            {children}
        </PostContext.Provider>
    )
}

const usePost = () => useContext(PostContext);

export { usePost, PostProvider };