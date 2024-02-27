import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./header.css";
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
import MenuIcon from "@mui/icons-material/Menu";
import HomeComponent from "./HompeComponent";
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
  const handeldropdown = (e) => {
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
    const HandelViewprofile = () => {
      SetProfile(true);
      SetBooking(false);
      navigate("/BookingPageDetail");
    };
    const HandelViewBooking = () => {
      SetProfile(false);
      SetBooking(true);
      navigate("/BookingPageDetail");
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
    console.log("User:", usernamelogin);

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
        <MenuIcon className="Menuicon" onClick={handleMenuClick} />
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
              <HomeComponent />
            </Menu>
          </Sidebar>
        </div>
      </div>
    );
  }
  const Handellogout = () => {
    setIsUserLoggedIn(false);
    Setisloggedin(false);
    localStorage.setItem("login", false);
    console.log("after logout lgn stst", localStorage.getItem("login"));
  };
  const HandelSignInPopUpBox = () => {
    SetopenSignUp(true);
    setOpen(false);
  };
  const handleCloseSignUp =()=>{
    SetopenSignUp(false);
  }
  return (
    <>
      <div className="header">
        {/* <MobileviewSideBar className="MenuIcon"/> */}

        <div className="LogoAndName">
          <img
            className="headerlogo"
            src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
          />
          <span className="headerlogoname">reddit</span>
        </div>

        <div className="headerserchinput">
          <SearchIcon className="serchicon" onClick={fetchRedditPosts} />
          <input
            type="text"
            name=""
            placeholder="Search reddit"
            onChange={(e) => SetSdearchValue(e.target.value)}
          />
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
