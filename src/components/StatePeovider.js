// StateProvider.js
import { createContext, useContext, useState ,useEffect } from "react";

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const [isloggedin, Setisloggedin] = useState(false);

  useEffect(() => {
    const saved_isloggedin = window.sessionStorage.getItem("isloggedin");
    if (saved_isloggedin != null) Setisloggedin(JSON.parse(saved_isloggedin))
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("isloggedin", JSON.stringify(isloggedin))
  }, [isloggedin])

  // const [LoginJwt, setLoginjwt] fbwhjlvrhbhgrlhb bhvbjjrl
  // jkhlgeorwygbvlgo  
  const [LoginUserId, SetLoginUserId] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem("login") === 'true');
  const [nmberOfcomment , SetnmberOfcomment]=useState("");
  const [cCount, SetcCount] = useState(nmberOfcomment);


  return (
    <stateContext.Provider
      value={{
        isloggedin,
        Setisloggedin,
        // LoginJwt,
        // setLoginjwt,
        LoginUserId,
        SetLoginUserId,
        isUserLoggedIn, setIsUserLoggedIn,
        cCount, SetcCount,
        SetnmberOfcomment,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);

export default StateProvider;
