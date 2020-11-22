import React, { createContext } from 'react';

import { useAuth } from "../hooks/auth-hook";

export const AuthContext = createContext({
    isLoggedIn: false,
    token : null,
    role: null,
    login: () => {},
    logout: () => {}
  });

export const Provider = props => {

    const { token, role, login, logout } = useAuth();

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                role: role,
                token: token,
                login: login,
                logout: logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}