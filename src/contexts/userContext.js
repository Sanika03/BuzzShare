import { createContext, useContext, useEffect, useState } from "react";
import { getAllUserService, getBookmarkService, removeBookmarkService, addBookmarkService, unfollowUserService, followUserService } from "../services/userServices"
import { useAuth } from "./authContext";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [ users, setUsers ] = useState([]);
    const [ bookmarks, setBookmarks ] = useState([]);
    const { token, currUser, setCurrUser } = useAuth();

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

    const followUserHandler = async (token, _id) => {
        try {
          const { data: { user, followUser }, status } = await followUserService({ token, followUserId: _id });
          if (status === 200) {
            setUsers((prevUsers) =>
              prevUsers.map((curr) => {
                if (curr.username === user.username) {
                    setCurrUser(user);
                  return { ...user };
                } else if (curr.username === followUser.username) {
                  return { ...followUser };
                }
                return curr;
              })
            );
          }
        } catch (e) {
          console.error(e);
        }
    };      

  
    const unfollowUserHandler = async (token, _id) => {
        try {
            const {data: { user, followUser }, status} = await unfollowUserService({token, followUserId: _id});
            if (status === 200) {
                setUsers((prevUsers) =>
                  prevUsers.map((curr) => {
                    if (curr.username === user.username) {
                        setCurrUser(user);
                        return { ...user };
                    } else if (curr.username === followUser.username) {
                        return { ...followUser };
                    }
                    return curr;
                  })
                );
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
        <UserContext.Provider value={{ users, bookmarks, addBookmarkHandler, removeBookmarkHandler, followUserHandler, unfollowUserHandler }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };