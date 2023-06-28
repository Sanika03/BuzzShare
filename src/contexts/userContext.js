import { createContext, useContext, useEffect, useState } from "react";
import { getAllUserService } from "../services/userServices"

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [ users, setUsers ] = useState([])
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

    useEffect(() => {
        getUserHandler();
    }, [])

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };