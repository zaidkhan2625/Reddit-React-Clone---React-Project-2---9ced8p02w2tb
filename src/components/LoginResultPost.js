import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import CommentData from "./CommentData";
import CommentDataforChild from "./CommentDataforChild";
import {
  faComment,
  faShareNodes,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeading,
  faLink,
  faXmark,
  faBold,
  faItalic,
  faStrikethrough,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StatePeovider";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "27%",
  left: "7%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 280,
  bgcolor: "background.paper",
  boxShadow: 4,
  p: 4,
};
function LoginResultPost({
  name,
  id,
  channelName,
  profileImage,
  likeCount,
  channelImage,
  commentCount,
  authid,
  onLikeIncrease,
  onLikeIDecrease,
  Setcommentnumberfunction,
  Deltepoat,
  content,
  createdAt,
  commentDelete,
}) {
  const [open, setOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [voteCount, setVoteCount] = useState(likeCount);
  const [commentPop, SetcommentPop] = useState(false);
  const [commentdata, setCommentdata] = useState([]);
   const [cCount, SetcCount] = useState(commentCount);
  const [Commentdatebyuser, SetCommentdatebyuser] = useState("");
  const [follobtn, Setfollobtn] = useState(true);
  const LoginJwt = sessionStorage.getItem("jwttoken");
  const UserNameLogin = localStorage.getItem("loginuserName");
  const LoginUserId = sessionStorage.getItem("userId");
  const {Setupdate,SetcreatPost}=useStateValue();
  const navigate = useNavigate();
  const HandelPostDelete = async (id)=>{
    // alert(`"this post id delete" , ${id}`);
    const projectId = "pvxi7c9s239h";
    try{
      const response = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${id}`,{
      headers:{
        method:"DELETE",
        Authorization: `Bearer ${LoginJwt}`,
        projectID: projectId,
      }
    });
    const data =await response.json();
    console.log("delete post data" , data);
    if(data.status==="success"){
      if(Deltepoat)
      {
        Deltepoat();
      }
    }

    }
    catch(error)
    {
      console.log(error);
    }
  }
  const handeldead =()=>{
    navigate('/Dead');
  }
  const state = {
    HotelId:id,
  }
  const HandPostEdit = (id) => {
    Setupdate(true);
    SetcreatPost(false);
    navigate("/Createpost", { state });
  };
  
  function YourComponent(){
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
 
    return (
      <div>
        <MoreHorizIcon onClick={handleMenuClick} />

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
          <MenuItem>Save</MenuItem>
          <MenuItem onClick={()=>HandPostEdit(id)}>Edit</MenuItem>
          <MenuItem>Follow</MenuItem>
          <MenuItem onClick={()=>HandelPostDelete(id)}>Delete </MenuItem>
          
        </Menu>
      </div>
    );
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
        <MoreHorizIcon onClick={handleMenuClick} />

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
          <MenuItem>Save</MenuItem>
          <MenuItem>Follow</MenuItem>
        </Menu>
      </div>
    );
  }
  const Handelfallow = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/quora/follow/${authid}`;
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        Setfollobtn(false);
      }
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      throw error;
    }
  };
  const HandelDownVOte = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/like/${id}`;
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        if (onLikeIDecrease) {
          onLikeIDecrease();
        }
      }
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);

      throw error;
    }
  };
  const HandelComment = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/post/${id}/comments`;
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
      });
      console.log("authb id :", authid);
      const data = await response.json();
      console.log(
        "here is handel comment function is showing all the data for comment:",
        data
      );
      if (data.status === "success") {
        setCommentdata([...data.data]);
      }
      console.log("comment data:", commentdata);
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      throw error;
    }
  };
  const PostcommentHandel = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/comment/${id}`;
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
        body: JSON.stringify({
          content: `${Commentdatebyuser}`,
        }),
      });
      const data = await response.json();
      console.log("daata after posting the comment:", data);
      await HandelComment();
      SetCommentdatebyuser("");
      if(Setcommentnumberfunction){
        Setcommentnumberfunction();
      }
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      // Handle the error as needed
      throw error;
    }
  };
  const HandelUpVOte = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/like/${id}`;
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
      });
      console.log("jwt toke in login result post :", LoginJwt);
      console.log("authb id :", authid);
      const data = await response.json();
      console.log("Follow user successful:", data);
      if (data.status === "success") {
        if (onLikeIncrease) {
          onLikeIncrease();
        }
      }
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      throw error;
    }
  };
  const HandelUnfallow = async () => {
    const apiUrl = `https://academics.newtonschool.co/api/v1/quora/follow/${authid}`;
    const projectId = "pvxi7c9s239h";

    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
        },
      });
      console.log("jwt toke in login result post :", LoginJwt);
      console.log("authb id :", authid);

      const data = await response.json();
      console.log("Follow user successful:", data);
      // if (data.status === "success") {

      // }
      Setfollobtn(true);
      // Handle success as needed
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      // Handle the error as needed
      throw error;
    }
  };
  const handleOpen = (e) => {
    setOpen(true);
    setModalPosition({ x: e.clientX, y: e.clientY });
    // SetuserName(name);
    // SetpId(id);
  };
  const handleCommentOpen = () => {
    SetcommentPop(true);
    HandelComment();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCommentpopupbox = () => {
    SetcommentPop(false);
  };
  const handleImageError = (event) => {
    event.target.src =
      "https://fastly.picsum.photos/id/96/640/480.jpg?hmac=IAdq6eZIR1xi6-jdksJOpI6V1YhMxcWn9A8uDw4BS0E";
  };
  const handleImageErrorProfile = (event) => {
    event.target.src =
      "https://cdn.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.webp";
  };
  return (
    <div className="LoginResultPost">
      <div className="Vote">
        <span className="Upvoteinpost" onClick={() => HandelUpVOte()}>
          ⇧
        </span>
        <p className="VoteCountinside"> {likeCount}</p>
        <p className="UpvoteinpostDown" onClick={() => HandelDownVOte()}>
          ⇩
        </p>
      </div>

      <div className="restoftheloginresult">
        <div className="headerLoginResult">
          <img className="logo" src={profileImage} onError={handleImageErrorProfile} onClick={handeldead} />
          <p className="COMMUNITYNAme">{channelName}</p>
          <p className="posauth" onMouseOver={handleOpen}>
            {name}
          </p>
          <p style={{marginLeft:"8px"}}>createdAt {createdAt}</p>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{
                top: `${modalPosition.y}px`,
                left: `${modalPosition.x}px`,
              }}
            >
              <Box sx={style} className="ModelBox">
                <img className="imglogodrop" src={profileImage} onError={handleImageErrorProfile}/>
                <p className="authorname"> {name}</p>
                <p className="ChannelName">{channelName}</p>
                <div className="likeandFallow">
                  <div className="numberoffallower">
                    <span className="numberofpodt">1.6K</span>
                    <span className="karmatype">Post karma</span>
                  </div>
                  <div className="numberoffallower">
                    <span className="numberofpodt">1.6K</span>
                    <span className="karmatype">Comment karma</span>
                  </div>
                </div>
                <button
                  className="chatButton"
                  onClick={() => alert("still under work")}
                >
                  Start Chat
                </button>
                {follobtn ? (
                  <button className="fallowbtn" onClick={Handelfallow}>
                    Follow
                  </button>
                ) : (
                  <button className="unfallow" onClick={HandelUnfallow}>
                    Unfallow
                  </button>
                )}
              </Box>
            </Modal>
          </div>
        </div>
        <p className="posttittle">{content}</p>
        <div className="imgdiv">
          <img
            className="LoginPostImge"
            src={channelImage}
            onError={handleImageError}
          />
        </div>
        <div className="resultFooter">
          <div className="resultbutton" onClick={() => handleCommentOpen()}>
            <FontAwesomeIcon icon={faComment} />
            <p className="commentcountnumber">{commentCount}</p>
            <p>Comments</p>
          </div>
          <div className="resultbutton">
            <FontAwesomeIcon icon={faShareNodes} />
            <p className="ButtonNameforsher">Share</p>
          </div>
          <div className="resultbutton">
            <FontAwesomeIcon icon={faBookmark} />
            <p className="ButtonNameforsher">Save</p>
          </div>
          <div className="resultbutton">
            {LoginUserId === authid ?<YourComponent/>:<YourComponentNoneComment/>}
          </div>
        </div>
      </div>
      <Modal
        open={commentPop}
        onClose={handleCloseCommentpopupbox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="CommentPopUpBox">
          <div className="MainCommentDiv">
            <div className="RestOfCommentPart">
              <div className="CommentHeader">
                <div className="LeftHeader">
                  <div className="voteUpDown">
                    <span
                      className="CommentUpVote"
                      onClick={() => HandelUpVOte()}
                    >
                      ⇧
                    </span>
                    <p className="likecount"> {likeCount}</p>
                    <p
                      className="CommentDownVote"
                      onClick={() => HandelDownVOte()}
                    >
                      ⇩
                    </p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faImage} className="imagelogoinhead" />

                <div className="CommentHeaderTitle">
                  <p className="ptext">
                    here will be the post titel shown in the comment header
                    partt and after some lenght it will be doted and after click
                    the logo dot dot it will be shown and it ccan be undefibe
                    lenfhtg{" "}
                  </p>
                </div>
                <button className="coloseButton">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="faXmark"
                    onClick={handleCloseCommentpopupbox}
                  />
                </button>
              </div>
              <div className="postdivforcomment">
                <div className="commentPostdiv">
                  <div className="likesection">
                    <span
                      className="LikeInComment1"
                      onClick={() => HandelUpVOte()}
                    >
                      ⇧
                    </span>
                    {likeCount}
                    <p
                      className="LikeInComment2"
                      onClick={() => HandelDownVOte()}
                    >
                      ⇩
                    </p>
                  </div>
                  <div className="PostDivInComment">
                    <div className="headerLoginResult">
                      <img className="logo" src={profileImage} />
                      <p className="COMMUNITYNAme">{channelName}</p>
                      <p className="posauth">Posted by</p>
                      <p className="posauth" onMouseOver={handleOpen}>
                        {name}
                      </p>
                      <div>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          style={{
                            top: `${modalPosition.y}px`,
                            left: `${modalPosition.x}px`,
                          }}
                        >
                          <Box sx={style} className="ModelBox">
                            <img className="imglogodrop" src={profileImage} />
                            <p className="authorname"> {name}</p>
                            <p className="ChannelName">{channelName}</p>
                            <div className="likeandFallow">
                              <div className="numberoffallower">
                                <span className="numberofpodt">1.6K</span>
                                <span className="karmatype">Post karma</span>
                              </div>
                              <div className="numberoffallower">
                                <span className="numberofpodt">1.6K</span>
                                <span className="karmatype">Comment karma</span>
                              </div>
                            </div>
                            <button className="chatButton">Start Chat</button>
                            {follobtn ? (
                              <button
                                className="fallowbtn"
                                onClick={Handelfallow}
                              >
                                Follow
                              </button>
                            ) : (
                              <button
                                className="unfallow"
                                onClick={HandelUnfallow}
                              >
                                Unfallow
                              </button>
                            )}
                          </Box>
                        </Modal>
                      </div>

                      <p className="posauth">posting time</p>
                    </div>
                    <p className="posttittle">post titel</p>
                    <div className="imgdiv">
                      <img className="LoginPostImge" src={channelImage} onError={handleImageError} />
                    </div>
                    <div className="resultFooter">
                      <div className="resultbutton">
                        <FontAwesomeIcon /> <p>{commentCount}</p>
                        <p className="pline">Comment</p>
                      </div>
                      <div className="resultbutton">
                        <FontAwesomeIcon icon={faShareNodes} />
                        <p className="pline">Share</p>
                      </div>
                      <div className="resultbutton">
                        <FontAwesomeIcon icon={faBookmark} />
                        <p className="pline">Save</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <p className="commentByUserName" >Comment as <strong>{UserNameLogin.toUpperCase()}</strong></p>
                <div className="CommentBox">
                  <textarea
                    placeholder="What are your thought"
                    className="commentboxtext"
                    value={Commentdatebyuser}
                    onChange={(e) => SetCommentdatebyuser(e.target.value)}
                  />
                  <div className="styeltypeofcontent">
                    <div className="stylebtn">
                      <button className="stlbtn">
                        <FontAwesomeIcon icon={faBold} />
                      </button>
                      <button className="stlbtn">
                        <FontAwesomeIcon icon={faItalic} />
                      </button>
                      <button className="stlbtn">
                        <FontAwesomeIcon icon={faLink} />
                      </button>
                      <button className="stlbtn">
                        <FontAwesomeIcon icon={faStrikethrough} />
                      </button>
                      <button className="stlbtn">b</button>
                      <button className="stlbtn">s</button>
                      <button className="stlbtn">
                        <FontAwesomeIcon icon={faHeading} />
                      </button>
                      <button className="stlbtn">
                        <MoreHorizIcon />
                      </button>

                      <button className="commentMarket">MarkDown Mode</button>
                      <button
                        className="CommentBtn"
                        onClick={() => PostcommentHandel()}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
                <div className="commentDataDiv">
                  {commentdata.map((item) => {
                    return (
                      <>
                        <CommentData
                          profileImage={profileImage}
                          commentcontent={item.content}
                          commentuserId={item.author}
                          commentid={item._id}
                          HandelComment={HandelComment}
                          commentDelete={commentDelete}
                        />
                        {Array.isArray(item.children) &&
                          item.children.length > 0 && (
                            <>
                              {item.children.map((childItem) => (
                                <CommentDataforChild
                                  profileImage={profileImage}
                                  commentcontent={childItem.content}
                                  childauth={childItem.author}
                                  createdAt={childItem.createdAt}
                                />
                              ))}
                            </>
                          )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default LoginResultPost;
