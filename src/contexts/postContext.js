import { createContext, useContext, useEffect, useState } from "react";
import { createPostService, getAllPostsService, likePostService, dislikePostService, deletePostService, editPostService, getSingleUserPostsService } from "../services/postServices"
import { useUser } from "./userContext";

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [ postData, setPosts ] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Latest");
    const { removeBookmarkHandler } = useUser();

    const getPostsHandler = async () => {
        try {
          const { data: { posts }, status } = await getAllPostsService();
          if (status === 200) {
            setPosts(posts);
          }
        } catch (e) {
          console.error(e);
        }
    }

    const getUserPostsHandler = async (username) => {
        try {
            const {data: {posts}, status} = await getSingleUserPostsService(username);
            if (status === 200) {
                setUserPosts(posts);
            }
        } catch (e) {
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

    const deletePostHandler = async ({_id, token}) => {
        try {
            const {data: { posts }, status} = await deletePostService({_id, token});
            if(status === 201) {
                setPosts(posts);
                removeBookmarkHandler(token, _id);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    const editPostHandler = async ({ token, postImage, post, input }) => {
        try {
            const { data: { posts }, status } = await editPostService({ token, postImage, post, input });
            if (status === 201) {
                setPosts(posts)
            }
        } catch (e) {
          console.error(e);
        }
      };      
      

    useEffect(() => {
        getPostsHandler();
      }, [selectedOption]);

    return (
        <PostContext.Provider value={{ postData, addPostHandler, selectedOption, setSelectedOption, likePostHandler, dislikePostHandler, deletePostHandler, editPostHandler, getUserPostsHandler, userPosts }}>
            {children}
        </PostContext.Provider>
    )
}

const usePost = () => useContext(PostContext);

export { usePost, PostProvider };