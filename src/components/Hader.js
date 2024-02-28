import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./header.css";
import { Sidebar, SubMenu } from "react-pro-sidebar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useState } from "react";
import { useStateValue } from "./StatePeovider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { fa0, faCommentDots, faL } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from '@mui/icons-material/Menu';
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const stateContext = createContext();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Hader() {
  const {
    isloggedin,
    Setisloggedin,
    setLoginjwt,
    LoginUserId,
    SetLoginUserId,
    setIsUserLoggedIn,
  } = useStateValue();
  const [signEmail, setsignEmail] = useState("");
  const [SignPassword, SetSignPassword] = useState("");
  const [Signusername, SetSignusername] = useState("");
  const [jwt, SetJwt] = useState("");
  const [open, setOpen] = useState(false);
  const [toggel, settoggel] = useState(false);
  const [LoginEmail, SetLoginEmail] = useState("");
  const [LoginPassword, SetLoginPassword] = useState("");
  const [loginjwt, setloginjwt] = useState("");
  const [drowpOpen, SetdrowpOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [searchValue, SetSdearchValue] = useState("");
  const [logindata, Slogindata] = useState([]);
  const [User, SetUser] = useState("");
  const [openSignUp, SetopenSignUp] = useState(false);
  const [EmailError , SetEmailError]= useState("");
  const [PasswordError ,SetPasswordError]=useState("");
  const [commonError , SetcommonError]=useState("");
  const navigate=useNavigate();
  const handeldropdown = (e) => {
    SetdrowpOpen(true);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };
  const isValid=()=>{
    let valid =true ;
    if(LoginEmail.trim() === "")
    {
      valid =false;
      SetEmailError("Hey Email is requierd")
    }
    else{
      SetEmailError("");
    }
    if(LoginPassword.trim()=== ""){
      valid = false;
      SetPasswordError("Hello Password is requierd");
    }
    else{
      SetPasswordError("");
    }
    return valid;
  }
  const handelLogin = () => {
    setOpen(true);
    SetdrowpOpen(false);
    settoggel(true);
  };
  const handleOpen = () => {
    setOpen(true);
    SetopenSignUp(false);
  };
  const handleClose = () => setOpen(false);
  const handleClosedropw = () => SetdrowpOpen(false);
  const signupUser = async () => {
    const apiUrl = "https://academics.newtonschool.co/api/v1/user/signup";
    const projectId = "pvxi7c9s239h";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectId,
        },
        body: JSON.stringify({
          name: Signusername,
          email: signEmail,
          password: SignPassword,
          appType: "reddit",
        }),
      });
      // Assuming the server returns JSON data, you can parse it
      const data = await response.json();
      console.log("Signup successful:", data);
      if (data.status === "success") {
        alert("Your sign up is successful move backe for login");
        handleOpen();
      }
      SetJwt(data.token);
      // Handle success as needed
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Handle the error as needed
    }
  };
  const loginUser = async () => {
    if(!isValid()){
      return;
    }
    const apiUrl = "https://academics.newtonschool.co/api/v1/user/login";
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectId,
        },
        body: JSON.stringify({
          email: LoginEmail,
          password: LoginPassword,
          appType: "reddit",
        }),
      });

      // Log the entire response object
      // console.log("Login response:", response);

      if (!response.ok) {
        SetcommonError("hey something is wrong");
        return ;
      }

      // Assuming the server returns JSON data, you can parse it
      const data = await response.json();
      console.log("Login successful:", data);
      console.log("Setting isloggedin to true", isloggedin);
      if (data.status === "success") {
        setIsUserLoggedIn(true);
        Setisloggedin(true);
        setloginjwt(data.token);
        setLoginjwt(data.token);
        console.log("user nme ", data.data.name);
        SetUser(data.data.name);
        console.log("jwt token:", data.token);
        localStorage.setItem("login", true);
        console.log("login status", localStorage.getItem("login"));
        localStorage.setItem("loginuserid", data.data._id);
        localStorage.setItem("loginuserName", data.data.name);
        console.log("user login id:", localStorage.getItem("loginuserid"));
        SetLoginUserId(localStorage.getItem("loginuserid"));
        console.log(
          "login user id after setting from local storage",
          LoginUserId
        );
      }

      // Handle success as needed
      return data;
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle the error as needed
      throw error;
    }
  };
  const usernamelogin = localStorage.getItem("loginuserName");
  const Withoutloggin = () => {
    return (
      <>
        <div className="WithoutLoginPartHandel">
          <p className="redditRecape">🍌</p>
          <span className="bar"> </span>
          <div className="barcodelogo">
            <QrCode2OutlinedIcon className="barcode" />
            Get App
          </div>
          <button className="LOginbtn" onClick={handleOpen}>
            Login In
          </button>
          <p>
            {" "}
            <YourComponentNoneCommentinLoging />
          </p>
        </div>
      </>
    );
  };
  function YourComponentNoneCommentinLoging() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="">
        <div className="" onClick={handleMenuClick}>
          <MoreHorizOutlinedIcon />
        </div>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handelLogin}>Login / Sign Up</MenuItem>
          <MenuItem>View Popular raddit</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  const WithLogin = () => {
    return (
      <>
        <div className="withloginresult">
          <div className="pp">
            <OutboundOutlinedIcon className="loginheadbar" />
          </div>
          <p className="redditrecap">🍌</p>
          <div className="pp">
            {" "}
            <FontAwesomeIcon icon={faCommentDots} className="loginheadbar" />
          </div>
          <div className="pp">
            {" "}
            <AddOutlinedIcon className="loginheadbar" />
          </div>
          <div className="pp">
            {" "}
            <NotificationsNoneOutlinedIcon className="loginheadbar" />
          </div>
          <div className="Adverties">
            <CampaignOutlinedIcon className="" /> <p>Adverties</p>
          </div>
          <div className="logindiv">
            <YourComponentNoneComment />
          </div>
        </div>
      </>
    );
  };
  async function fetchRedditPosts() {
    const apiUrl = "https://academics.newtonschool.co/api/v1/reddit/post";
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(
        `${apiUrl}?search={"field":"${searchValue}"}`,
        {
          method: "GET",
          headers: {
            projectID: projectId,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Reddit posts");
      }
      const data = await response.json();
      console.log("search data is :", data);
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
  function YourComponentNoneComment() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        <div onClick={handleMenuClick} className="ProfileLoginName">
          <PersonOutlineIcon />
          <p>{usernamelogin}</p>
        </div>
        <div>
          {/* className="menuinusername" */}
          <Sidebar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              getContentAnchorEl={null}
            >
              <div>
                <MenuItem icon={<AccountCircleOutlinedIcon />} onClick={()=>alert("Still Working On it")}>
                  My Staff
                </MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Online Status</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Profile</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Create Avatar</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>User Setting</MenuItem>

                <MenuItem onClick={Handellogout}>Log out</MenuItem>
              </div>
              {/* Add more menu items as needed */}
            </Menu>
          </Sidebar>
        </div>
      </div>
    );
  }
  function YourComponentForHamburgerIcon() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        <div onClick={handleMenuClick} className="">
        <MenuIcon className="MenuIcon"/>
        </div>
        <div>
          {/* className="menuinusername" */}
          <Sidebar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              getContentAnchorEl={null}
            >
              <div>
                <MenuItem icon={<AccountCircleOutlinedIcon />} onClick={()=>alert("Still Working On it")}>
                  My Staff
                </MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Home</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Popular Community</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>Creat Post</MenuItem>
                <MenuItem  onClick={()=>alert("Still Working On it")}>User </MenuItem>

                <MenuItem onClick={()=>alert("Still Working On it")}>Premiumn Reddit</MenuItem>
              </div>
              {/* Add more menu items as needed */}
            </Menu>
          </Sidebar>
        </div>
      </div>
    );
  }

  const Handellogout = () => {
    if(!isloggedin){
      alert("Hey LOg in First");
      return ;
    }
    setIsUserLoggedIn(false);
    Setisloggedin(false);
    localStorage.setItem("login", false);
  };
  const HandelSignInPopUpBox = () => {
    SetopenSignUp(true);
    setOpen(false);
  };
  const handleCloseSignUp = () => {
    SetopenSignUp(false);
  };
  const HandelLOgoClick =()=>{
    navigate("/");
  }
  return (
    <>
      <div className="header">
        <div className="MenuIcon">
        <YourComponentForHamburgerIcon/>
        </div>
       

        <div className="LogoAndName" onClick={HandelLOgoClick}>
          <img
            className="headerlogo"
            src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
          />
          <span className="headerlogoname">reddit</span>
        </div>

        <div className="headerserchinput">
          
          <input
            type="text"
            name=""
            placeholder="Search reddit"
            onChange={(e) => SetSdearchValue(e.target.value)}
          />
          <SearchIcon className="serchicon" onClick={fetchRedditPosts} />
        </div>
        <div className="rightSideFortheloginHeader">
          {isloggedin ? (
            <WithLogin />
          ) : (
            <Withoutloggin handleOpen={handleOpen} />
          )}
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="PopupBoxLogi">
            <h5 className="LOgintext"> Log in</h5>
            <p style={{color:"red"}}>{EmailError}</p>
            <p style={{color:"red"}}>{commonError}</p>

            <input
              className="LoginInputFeild"
              type="text"
              placeholder="user Email"
              onChange={(e) => SetLoginEmail(e.target.value)}
            />
            <p style={{color:"red"}}>{EmailError}</p>
            <input
              className="LoginInputFeild"
              type="password"
              placeholder="Password"
              onChange={(e) => SetLoginPassword(e.target.value)}
            />
                        <p style={{color:"red"}}>{PasswordError}</p>

            <a className="forgetPassword" href="#">
              forget password?
            </a>
            <p className="Signup">
              New to Reddit?
              <span className="signupinlogin" onClick={HandelSignInPopUpBox}>
                Sign in
              </span>
            </p>
            <button className="LoginButton" onClick={loginUser}>
              Login
            </button>
          </Box>
        </Modal>
        <Modal
          open={openSignUp}
          onClose={handleCloseSignUp}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="SignUpPopupBox">
            <input
              type="text"
              placeholder="Name/Username"
              onChange={(e) => SetSignusername(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setsignEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwpord"
              onChange={(e) => SetSignPassword(e.target.value)}
            />
            <p>
              already a reddit ?
              <span onClick={handleOpen} className="logininsignup">
                login
              </span>
            </p>
            <button onClick={signupUser}>Sign in</button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
export default Hader;
