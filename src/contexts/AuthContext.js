import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
}

export const AuthProvider = ({children}) => {
    // Persistance, if not needed use usestate
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={ { user, login, logout, isAuthenticated: Boolean(user.email) } }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}