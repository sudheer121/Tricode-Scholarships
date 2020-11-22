import { useState , useCallback , useEffect } from 'react';


export const useAuth = () => {
    const [token, setToken] = useState();
    const [tokenExpirationDate , setTokenExpirationDate] = useState();
    const [role, setRole] = useState();

    const login = useCallback((token, expiresIn, role) => {
      setToken(token);
      setRole(role);
      const tokenExpirationDate = expiresIn || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: token,
          expiresIn: tokenExpirationDate.toISOString(),
          role: role
        })
      );
    }, []);
    
    const logout = useCallback(() => {
      setToken(null);
      setTokenExpirationDate(null);
      setRole(null);
      localStorage.removeItem("userData");
    }, []);
    
    
    // useEffect(() => {
    //   if(token && tokenExpirationDate){
    //     const remianingTime = tokenExpirationDate.getTime() - new Date().getTime();
    //   } else {

    //   }
    // } ,[token , logout , tokenExpirationDate]);
    
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (storedData && storedData.token && new Date(storedData.expiresIn) > new Date()) {
        login(storedData.token ,  new Date(storedData.expiresIn), storedData.role);
      }
    }, [login]);
    
    return { token, role, login, logout };
};