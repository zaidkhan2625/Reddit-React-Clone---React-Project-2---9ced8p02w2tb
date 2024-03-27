import React, { Suspense, useEffect } from "react";
import "../styles/LoginResultComponent.css";
import { useStateValue } from "./StatePeovider";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import LoginResultPost from "./LoginResultPost";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HttpsIcon from "@mui/icons-material/Https";
import {
  faFireFlameSimple,
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hoc from "../Hoc/Hoc";
import Noresultcomponent from "./Noresultcomponent";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%", // Position the modal 50% from the top
  left: "45%", // Position the modal 50% from the left
  transform: "translate(-50%, -50%)", // Center the modal horizontally and vertically
  width: 400,
  height: 450,
  bgcolor: "background.paper",
};

function LoginResultComponent() {
  const [data, setData] = useState([]);
  const { searchValue, SetcreatPost, Setupdate, SetPostBox, LoginJwt,openCreateCommunity, SetopenCreateCommunity } =
    useStateValue();
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("hot");
  const [searchres, Setsearch] = useState(false);
  const [filteredPostData, setFilteredPostData] = useState([]); // State for filtered data
  const [communityName , SetcommunityName]=useState("");
  const [nsfwSelected, setNsfwSelected] = useState(true);
  const jwttoken = localStorage.getItem("jwttoken");
  const [communityErro, SetcommunityErro]= useState("");
  const HandelCreatenewPost = () => {
    navigate("/Createpost");
    console.log("bkhdjvveg;lfwbkrnbkhgjv");
    Setupdate(false);
    SetcreatPost(true);
    SetPostBox(true);
  };
  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  const delayedSearch = debounce(() => {
    // Filter post data whenever search value changes
    const filteredData = data.filter((item) => {
      return (
        item.content.toLowerCase().includes(searchValue.trim("").toLowerCase()) ||
        item.author.name.toLowerCase().includes(searchValue.trim("").toLowerCase()) ||
        (item.title &&
          item.title.trim("").toLowerCase().includes(searchValue.toLowerCase()))
      );
    });

    setFilteredPostData(filteredData);
  }, 100);
  useEffect(() => {
    delayedSearch();
  }, [searchValue, data, delayedSearch]);
  useEffect(() => {
    Setsearch(false);
    const projectId = "pvxi7c9s239h";

    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/reddit/post?limit=100",
          {
            headers: {
              projectId: projectId, // Use the same case for headers
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Handle the data as needed
        setData(data.data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
    fetchPost();
  }, []); 
  
  const config = {
    headers: {
      Authorization: `Bearer ${jwttoken}`,
      projectID: "pvxi7c9s239h",
    },
  };
  const formData = new FormData();
  formData.append("name", communityName);
  // console.log(communityName.replace("/r", ""));
  const namecommunityvlid=()=>{
    let v = true;
    if(communityName.trim()==="")
    {
      v =false;
      SetcommunityErro("Please add  name")
    }
    else{
      SetcommunityErro("");
      v = true;
    }
    return v;
  }
  const createCommunity = async () => {
    if(!namecommunityvlid())
    {
      return;
    }
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/reddit/channel/",
        formData,
        config
      );
      console.log("logitdts",res.data.data);
      const namee=res.data.data.name;
      const state={
        namecreate:namee,
      }
      
      navigate("/Subreddit",{state});
      localStorage.setItem("community", JSON.stringify(true));
      SetcommunityErro("");
      // setOpen(false);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request
        SetcommunityErro("Already exists. Please add the new name.");
    } else {
        // Handle other errors
        alert("An error occurred. Please try again later.");
    }
    }
  };
  useEffect(() => {
    if (searchValue.trim() != "") {
      Setsearch(filteredPostData.length === 0);
    }

    const sortData = () => {
      let sortedPosts = [...filteredPostData];
      switch (sortCriteria) {
        case "hot":
          sortedPosts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        case "odlf":
          sortedPosts.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        case "likeIncrease":
          sortedPosts.sort((a, b) => a.likeCount - b.likeCount);
          break;
        case "likeDecrease":
          sortedPosts.sort((a, b) => b.likeCount - a.likeCount);
          break;
        case "CommentIncrese":
          sortedPosts.sort((a, b) => a.commentCount - b.commentCount);
          break;
        case "CommentDecrease":
          sortedPosts.sort((a, b) => b.commentCount - a.commentCount);
          break;
        default:
          break;
      }

      setSortedData(sortedPosts);
    };
    sortData();
  }, [filteredPostData, sortCriteria]);
  const handleLikeIncrease = (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, likeCount: post.likeCount + 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const handleLikedecrese = (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, likeCount: post.likeCount - 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const HandelPostDelete = (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.filter((post) => post._id !== postId);
    setData(updatedData);
  };
  const commenchangefunction = (postId) => {
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, commentCount: post.commentCount + 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const commentDeleteFunction = (postId) => {
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, commentCount: post.commentCount - 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const gotopremium = () => {
    navigate("/premium");
  };
  const handelDead = () => {
    navigate("/Dead");
  };
  const formatCreatedAtDate = (createdAt) => {
    return new Date(createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  const handelCreatecommunity = () => {
    SetopenCreateCommunity(true);
    // navigate("/Dead");
  };
  const handleClose = () => {
    SetopenCreateCommunity(false);
  };
  return (
    <>
      <div className="Logincomponentresult">
        <div className="leftSideofLoginResult">
          <div className="createPostdiv">
            <img
            style={{cursor:"pointer"}}
              className="PostDivLogo"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg"
            />
            <input
            style={{cursor:"pointer"}}
              className="PostDivInput"
              type="text"
              placeholder="Creat Post"
              onClick={() => navigate("/Createpost")}
            />
            {/* <ImageOutlinedIcon className="imagelogo" /> */}
            {/* <AttachFileOutlinedIcon className="imagelogo" /> */}
            <div className="imagelogo">
              {" "}
              <FontAwesomeIcon className="logopost" icon={faImage} />
            </div>
            <div className="imagelogo">
              {" "}
              <FontAwesomeIcon className="logopost" icon={faLink} />
            </div>
          </div>
          <div className="Bestdiv">
            <p
              onClick={() => setSortCriteria("hot")}
              className="FilterFunction"
            >
              Hot
            </p>
            <p
              onClick={() => setSortCriteria("likeIncrease")}
              className="FilterFunction"
            >
              Like Up
            </p>
            <p
              onClick={() => setSortCriteria("likeDecrease")}
              className="FilterFunction"
            >
              Like Down
            </p>
            <p
              onClick={() => setSortCriteria("CommentIncrese")}
              className="FilterFunction"
            >
              Comment Up
            </p>
            <p
              onClick={() => setSortCriteria("CommentDecrease")}
              className="FilterFunction"
            >
              Comment Down
            </p>
            <p
              onClick={() => setSortCriteria("odlf")}
              className="FilterFunction"
            >
              Old First
            </p>
            {/* Add similar lines for other sorting criteria */}
          </div>
          {searchres && sortedData.length === 0 ? (
            <Noresultcomponent />
          ) : (
            sortedData.map((item) => (
              <div className="postdiv">
                <LoginResultPost
                  name={item.author.name}
                  commentCount={item.commentCount}
                  id={item._id}
                  authid={item.author._id}
                  likeCount={item.likeCount}
                  channelid={item.channel ? item.channel._id:"1"}
                  channelName={item.channel?item.channel.name:null}
                  channelImage={item.images}
                  profileImage={item.author.profileImage}
                  onLikeIncrease={() => handleLikeIncrease(item._id)}
                  onLikeIDecrease={() => handleLikedecrese(item._id)}
                  Deltepoat={() => HandelPostDelete(item._id)}
                  content={item.title ? item.title : item.content}
                  createdAt={formatCreatedAtDate(item.createdAt)}
                  Setcommentnumberfunction={() =>
                    commenchangefunction(item._id)
                  }
                  commentDelete={() => commentDeleteFunction(item._id)}
                />
              </div>
            ))
          )}
        </div>
        <div className="rightSideOfLoginResult">
          <div className="redditPrimeiumDiv">
            <div className="logopremeium">
              <div>
                {" "}
                <ParkOutlinedIcon />
              </div>
              <div className="premiumtextbody">
                <p>Reddit Premium</p>
                <p>The best Reddit Experience</p>
              </div>
            </div>
            <button
              className="premiumButton"
              onClick={async () => await gotopremium()}
            >
              Try Now
            </button>
          </div>
          <div className="homecreate">
            <img
              className="Imageofhomepost"
              src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
            />
            <div className="HomeLogodiv">Home</div>
            <p className="textParagraph">
              Your personal Reddit frontpage. Come here to check in with your
              favorite communities.
            </p>

            <button className="creatPost" onClick={() => HandelCreatenewPost()}>
              Create Post
            </button>

            <button className="creatPost" onClick={handelCreatecommunity}>
              Create Communitiy
            </button>
          </div>
          <div className="Agreement">
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname">User Agreement</p>
                <p className="termname">Privacy Policy</p>
              </div>
              <div className="agreementTerm">
                <p className="termname">User Agreement</p>
                <p className="termname">Moderator Code Of </p>
                <p className="termname">Conduct</p>
              </div>
            </div>
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname">English</p>
                <p className="termname">Francais</p>
                <p className="termname">Italiano</p>
              </div>
              <div className="agreementTerme">
                <p className="termname">Deutsch</p>
                <p className="termname">Espanoi </p>
                <p className="termname">Portugues</p>
              </div>
            </div>
            <p className="termnamee">
              Reddit, Inc. © 2024. All rights reserved.
            </p>
          </div>
        </div>
        <Modal
          open={openCreateCommunity}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            boxShadow: "none",
          }}
        >
          <Box sx={style} className="CreatecommunityPopUp" style={{border:"black"}}>
            <div className="fortopofBox">
              <p>Create a community</p>
              <p style={{ cursor: "pointer" }} onClick={handleClose}>
                <strong>X</strong>
              </p>
            </div>
            <div className="forNameandsuggest">
              <p style={{ color: "black" }}>
                <strong>Name</strong>
              </p>
              <p>Community names including capitalization cannot be changed.</p>
            </div>
            <p className="errormsg">{communityErro}</p>
            <input
              type="text"
              placeholder="Name"
              className="inputforcommunityName"
               style={{cursor:"pointer"}}
              onChange={(e)=>SetcommunityName(e.target.value)}
            />
            <div className="forPublicselect">
              <input type="radio" checked  style={{cursor:"pointer"}} />
              <PersonIcon />
              <p>
                <strong>Public</strong>
              </p>
              <p>Anyone can view, post, and comment to this community</p>
            </div>
            <div className="forPublicselect">
              <input type="radio" disabled style={{cursor:"pointer"}}/>
              <RemoveRedEyeIcon />
              <p>
                <strong>Restricted</strong>
              </p>
              <p style={{ fontSize: "11px", marginLeft: "8px" }}>
                Anyone can view this community, but only approved users can post
              </p>
            </div>
            <div className="forPublicselect">
              <input type="radio" disabled  style={{cursor:"pointer"}}/>
              <HttpsIcon />
              <p>
                <strong>Private</strong>
              </p>
              <p style={{ fontSize: "11px" }}>
                Only approved users can view and submit to this community
              </p>
            </div>
            <p className="adult">
              <strong>Adult content</strong>
            </p>
            <div className="forwarning">
              <input type="radio" 
                          checked={nsfwSelected}

                onChange={() => setNsfwSelected(!nsfwSelected)}
              />
              <p className="nsfwbtn">NSFW</p><p> 18+ year old community</p>
            </div>
            <div  className="communityButton">
            <button onClick={createCommunity} style={{cursor:"pointer"}}>Create community</button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Hoc(LoginResultComponent);
