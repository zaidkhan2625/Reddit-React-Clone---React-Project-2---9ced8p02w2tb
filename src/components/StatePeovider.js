// StateProvider.js
import { createContext, useContext, useState ,useEffect } from "react";

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const [isloggedin, Setisloggedin] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved_isloggedin = window.localStorage.getItem("isloggedin");
    if (saved_isloggedin != null) Setisloggedin(JSON.parse(saved_isloggedin))
  }, [])

  useEffect(() => {
    window.localStorage.setItem("isloggedin", JSON.stringify(isloggedin))
  }, [isloggedin])
  const [LoginUserId, SetLoginUserId] = useState("");


  // const [LoginJwt, setLoginjwt] fbwhjlvrhbhgrlhb bhvbjjrl
  // jkhlgeorwygbvlgo  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem("login") === 'true');
  const [nmberOfcomment , SetnmberOfcomment]=useState("");
  const [cCount, SetcCount] = useState(nmberOfcomment);
  const [update , Setupdate]= useState(false);
  const [creatPost ,SetcreatPost]=useState(false);
  const [searchValue, SetSdearchValue] = useState("");
  const [openCreateCommunity, SetopenCreateCommunity] = useState(false);

  const [PostBox, SetPostBox] = useState(true);

  return (
    <stateContext.Provider
      value={{
        isloggedin,
        Setisloggedin,
        open, setOpen,
        LoginUserId,
        SetLoginUserId,
        isUserLoggedIn, setIsUserLoggedIn,
        cCount, SetcCount,
        SetnmberOfcomment,
        update , Setupdate,
        creatPost ,SetcreatPost,
        PostBox, SetPostBox,
        searchValue, SetSdearchValue,
        openCreateCommunity, SetopenCreateCommunity

      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);

export default StateProvider;
