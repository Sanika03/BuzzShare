import { createContext, useContext, useEffect, useState } from "react";
import { createPostService, getAllPostsService, likePostService, dislikePostService } from "../services/postServices"

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [ postData, setPosts ] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Latest");

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

    const addPostHandler = async ({input, image, token, currUser}) => {
        try {
            const {data: { posts }, status} = await createPostService({input, postImage: image, token, user: currUser});
            if(status === 201) {
                setPosts(posts);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    const likePostHandler = async ({_id, token}) => {
        try {
            const {data: { posts }, status} = await likePostService({_id, token});
            if(status === 201) {
                setPosts(posts);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    const dislikePostHandler = async ({_id, token}) => {
        try {
            const {data: { posts }, status} = await dislikePostService({_id, token});
            if(status === 201) {
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
        <PostContext.Provider value={{ postData, addPostHandler, selectedOption, setSelectedOption, likePostHandler, dislikePostHandler }}>
            {children}
        </PostContext.Provider>
    )
}

const usePost = () => useContext(PostContext);

export { usePost, PostProvider };