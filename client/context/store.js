import React, { createContext } from 'react';

import { useAuth } from "../hooks/auth-hook";

export const AuthContext = createContext({
    isLoggedIn: false,
    token : null,
    login: () => {},
    logout: () => {}
  });

export const Provider = props => {

    const { token, login, logout } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                login: login,
                logout: logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}