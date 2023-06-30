import { createContext, useContext, useEffect, useState } from "react";
import { getAllUserService, getBookmarkService, removeBookmarkService, addBookmarkService } from "../services/userServices"
import { useAuth } from "./authContext";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [ users, setUsers ] = useState([]);
    const [ bookmarks, setBookmarks ] = useState([]);
    const { token } = useAuth();

    const getUserHandler = async () => {
        try {
            const {data: { users }, status} = await getAllUserService();
            if(status === 200) {
                setUsers(users);
            }  
        }
        catch (e) {
            console.error(e);
        }
    }

    const getBookmarksHandler = async () => {
        try {
            const {data: { bookmarks }, status} = await getBookmarkService(token);
            if(status === 200) {
                setBookmarks(bookmarks);
            }  
        }
        catch (e) {
            console.error(e);
        }
    }

    const addBookmarkHandler = async (token, _id) => {
        try {
            const {data: { bookmarks }, status} = await addBookmarkService({token, _id});
            if(status === 200) {
                setBookmarks(bookmarks);
            }  
        }
        catch (e) {
            console.error(e);
        }
    }

    const removeBookmarkHandler = async (token, _id) => {
        try {
            const {data: { bookmarks }, status} = await removeBookmarkService({token, _id});
            if(status === 200) {
                setBookmarks(bookmarks);
            }  
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getUserHandler();
        getBookmarksHandler()
    }, [])

    return (
        <UserContext.Provider value={{ users, bookmarks, addBookmarkHandler, removeBookmarkHandler }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };