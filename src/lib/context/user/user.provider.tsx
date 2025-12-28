
import { useState } from "react";
import { User } from "../../types";
import { clone } from "../../utils/common.util";
import { UserContext } from "./user.context";
import { UserStateObj } from "./user.type";
import { initialObj } from "./user.initail";


const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<UserStateObj>(initialObj)

    const saveUser = (userObj: User) => {
        setState({ ...state, isLogin: true, user: userObj })
    }

    const removeUser = () => {
        const userObj = clone<UserStateObj>(initialObj)
        setState(userObj)
    }

    return (
        <UserContext.Provider value={{ user: state.user, isUserLogin: state.isLogin, saveUser, removeUser }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;