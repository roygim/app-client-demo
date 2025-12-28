import { User } from "../../types";

export interface UserStateObj {
    user: User | null;
    isLogin: boolean;
}

export interface UserContextValue {
    user: User | null;
    isUserLogin: boolean;
    saveUser: (user: User) => void;
    removeUser: () => void;
}