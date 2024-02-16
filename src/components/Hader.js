import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./header.css";
import {Menu as MenuPro,} from "react-pro-sidebar";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Sidebar, SubMenu } from "react-pro-sidebar";
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
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { faCommentDots, faL } from "@fortawesome/free-solid-svg-icons";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import { createContext, useContext } from "react";
export const stateContext = createContext();
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import HomeComponent from "./HompeComponent";
const style = {
  position: "absolute",
  top: "51%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "19%",
  left: "90%",
  transform: "translate(-50%, -50%)",
  width: 190,
  height: 100,
  bgcolor: "background.paper",
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
  const [User , SetUser]= useState("");
  const  handeldropdown = (e) => {
    SetdrowpOpen(true);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };
  const handelLogin = () => {
    setOpen(true);
    SetdrowpOpen(false);
    settoggel(true);
  };
  const handleOpen = () => {
    setOpen(true);
    settoggel(true);
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
      if(data.status === "success")
      {
        alert("Your sign up is successful move backe for login");
      }
      SetJwt(data.token);
      // Handle success as needed
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Handle the error as needed
    }
  };
  const loginUser = async () => {
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
        // Handle login failure
        throw new Error("Login failed");
      }

      // Assuming the server returns JSON data, you can parse it
      const data = await response.json();
      console.log("Login successful:", data);
      console.log("Setting isloggedin to true", isloggedin);
      if (data.status === "success") {
        setIsUserLoggedIn(true)
        Setisloggedin(true);
        setloginjwt(data.token);
        setLoginjwt(data.token);
        console.log("user nme ",data.data.name);
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
        <div className="headerrightpart">
          <p className="redditRecape">🍌</p>
          <span className="bar"> </span>
          <div className="barcodelogo">
            <QrCode2OutlinedIcon className="barcode" />
            Get App
          </div>
          <button className="LOginbtn" onClick={handleOpen}>
            Login In
          </button>
          <MoreHorizOutlinedIcon
            onClick={handeldropdown}
            className="SettingMenu"
          />
        </div>
        <Modal
          open={drowpOpen}
          onClose={handleClosedropw}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            top: `${modalPosition.y}px`,
            left: `${modalPosition.x}-10px`,
          }}
        >
          <Box sx={style2} className="dropdown">
            <div className="dropdownitem" onClick={handelLogin}>
              <ExitToAppSharpIcon />
              <a className="name">Login / Sign Up</a>
            </div>
            <div className="dropdownitem">
              <AdsClickOutlinedIcon />
              <a className="name">Adverties On reddit</a>
            </div>
            <div className="dropdownitem">
              <WorkOutlineOutlinedIcon />
              <a className="name">Shop Collection Avatars</a>
            </div>
          </Box>
        </Modal>
      </>
    );
  };
  const WithLogin = () => {
    console.log("User:",usernamelogin);

    return (
      <>
        <div className="withloginresult">
        <div className="withloginheader">
          <div className="logoinlogindiv">
          <OutboundOutlinedIcon className="loginheadbar" />
          <p className="redditrecap">🍌</p>
          <FontAwesomeIcon icon={faCommentDots} className="loginheadbar" />
          <NotificationsNoneOutlinedIcon className="loginheadbar" />
          <AddOutlinedIcon className="loginheadbar" />
          <div className="Adverties">
            <CampaignOutlinedIcon className="iconad" /> <p>Adverties</p>
          </div>
          </div>
        </div>
        <div className="username">
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
      <div className="usernameinlogin">
        <div className="loginuserName" onClick={handleMenuClick}>
          <p>{usernamelogin}</p>
        </div>
        <div className="menuinusername">
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
                <MenuItem icon={<AccountCircleOutlinedIcon />}>
                  My Staff
                </MenuItem>
                <MenuItem>Online Status</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Create Avatar</MenuItem>
                <MenuItem>User Setting</MenuItem>
                <MenuItem>View Option</MenuItem>
                <MenuItem>Dark Mode</MenuItem>
                <MenuItem>Create a Community</MenuItem>
                <MenuItem>Adverties on reddit</MenuItem>
                <MenuItem>Premium</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>Help Center</MenuItem>
                <MenuItem onClick={Handellogout}>Log out</MenuItem>

              </div>
              {/* Add more menu items as needed */}
            </Menu>
          </Sidebar>
        </div>
      </div>
    );
  }
  function MobileviewSideBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="">
        <MenuIcon  className="Menuicon" onClick={handleMenuClick}/>        
        <div className="">
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
              <HomeComponent/>
              
             </Menu>
          </Sidebar>
        </div>
      </div>
    );
  }
  const Handellogout=()=>{
    setIsUserLoggedIn(false);
    Setisloggedin(false);
    localStorage.setItem("login",false);
    console.log("after logout lgn stst",localStorage.getItem("login"));
  }
  return (
    <>
      <div className="header">
        <div className="headerlogodiv">
        <div className="MenuIcon">
        <MobileviewSideBar/>
        </div>
          <img
            className="headerlogo"
            src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
          />
          <span className="headerlogoname">reddit</span>
        </div>
        {/* <input
            type="text"
            name=""
            placeholder="Search reddit"
            onChange={(e) => SetSdearchValue(e.target.value)}
          /> */}
        <div className="headerserchinput">
          <SearchIcon className="serchicon" onClick={fetchRedditPosts} />
          <input
            type="text"
            name=""
            placeholder="Search reddit"
            onChange={(e) => SetSdearchValue(e.target.value)}
          />
        </div>
        <div className="rightsidefromloginhed">
        {isloggedin ? <WithLogin /> : <Withoutloggin handleOpen={handleOpen} />}

        </div>

      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="PopupBox">
            {toggel ? (
              <Box sx={style} className="PopupBox">
                <h8 className="LOgintext"> Log in</h8>
                <p className="paragraph">
                  By continuing, you agree to our User Agreement and acknowledge
                  that you understand the Privacy Policy.
                </p>
                <button className="LoginPageButton">
                  Continue With Googel
                </button>
                <button className="LoginPageButton">Continue With Apple</button>
                {loginjwt}
                <div className="forOrword">
                  <span className="forOr"></span>
                  OR
                  <span className="forOrone"></span>
                </div>
                <input
                  className="LoginInputFeild"
                  type="text"
                  placeholder="user Email"
                  onChange={(e) => SetLoginEmail(e.target.value)}
                />
                <input
                  className="LoginInputFeild"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => SetLoginPassword(e.target.value)}
                />
                <a className="forgetPassword" href="#">
                  forget password?
                </a>
                <p className="Signup">
                  New to Reddit?
                  <span
                    className="signupinlogin"
                    onClick={() => settoggel(false)}
                  >
                    Sign in
                  </span>
                </p>
                <button className="LoginButton" onClick={loginUser}>
                  Login
                </button>
              </Box>
            ) : (
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
            )}
          </Box>
        </Modal>
      </div>
    </>
  );
}
export default Hader;
