import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  faComment,
  faShareNodes,
  faBookmark,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/SubredditPost.css";
import CommentData from "./CommentData";
import CommentDataforChild from "./CommentDataforChild";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
  faHeading,
  faLink,
  faBold,
  faItalic,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
function SubredditPost({
  Image,
  createdAt,
  channelname,
  postname,
  content,
  images,
  id,
}) {
  const handleImageError = (e) => {
    e.target.src = Image;
  };

  const [commentPop, setCommentPop] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [commentdata, setCommentdata] = useState([]);
  const [userComment, SetCommentdatebyuser] = useState("");
  const UserNameLogin = localStorage.getItem("loginuserName");
  const userId = localStorage.getItem("userId");
  const [count , setCount]=useState(0);
  useEffect(() => {
    const fetchComments = async () => {
      const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/post/${id}/comments`;
      const projectId = "pvxi7c9s239h";
      const LoginJwt = sessionStorage.getItem("jwttoken");

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${LoginJwt}`,
            projectID: projectId,
          },
        });
        const data = await response.json();
        if (data.status === "success") {
          setCommentCount(data.data.length);
          setCommentdata(data.data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    };

    fetchComments();
  }, [id, commentPop,count]);

  const postimg = images
    ? images
    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  const create = createdAt ? createdAt : "Aug 23, 2023";
  const cname = channelname ? channelname : "harth leo";
  const profileimg = Image
    ? Image
    : "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg";

  const style = {
    position: "absolute",
    top: "40%",
    left: "33%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    bgcolor: "background.paper",
    boxShadow: 1,
    p: 1,
    marginTop: "0px",
    marginBottom: "10px", // Adjust margin top as needed
    overflow: "auto", // Make the modal content scrollable
  };
  const HandelComment = () => {
  };
  const commentDelete = () => {
    setCount(p=>p-1);
  };
  const LoginJwt = localStorage.getItem("jwttoken");

  const PostcommentHandel = async (id) => {
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
          content: `${userComment}`,
        }),
      });
      const data = await response.json();
      SetCommentdatebyuser("");
      setCount(p=>p+1);
      return data;
    } catch (error) {
      console.error("Error during follow user:", error.message);
      // Handle the error as needed
      throw error;
    }
  };
  const sortedCommentData = [...commentdata].sort((a, b) =>
  new Date(b.createdAt) - new Date(a.createdAt)
);
  const handleCloseCommentPopupBox = () => {
    setCommentPop(false);
  };

  return (
    <div className="posforsubreddit">
      <div className="headerdiv">
        <img
          className="channelImg"
          src={profileimg}
          alt="profile"
          style={{ cursor: "not-allowed" }}
        />
        <p>{cname}</p>
        <p>
          <b>{create}</b>
        </p>
        <p>Because you have already visited</p>
      </div>
      <p className="content">{content}</p>
      <div className="imgdiv">
        <img
          className="postimageinsub"
          src={postimg}
          onError={handleImageError}
        />
      </div>
      <div className="resultFooter">
        <div
          className="resultbutton"
          style={{background:"transparent"}}
          onClick={() => {
            setCommentPop(true);
          }}
        >
          <FontAwesomeIcon icon={faComment} />
          <p className="commentcountnumber">{commentCount}</p>
          <p>Comments</p>
        </div>

        <div className="resultbutton" style={{ cursor: "not-allowed",background:"transparent" }}>
          <FontAwesomeIcon
            icon={faShareNodes}
            style={{ cursor: "not-allowed" }}
          />
          <p className="ButtonNameforsher">Share</p>
        </div>
        <div className="resultbutton " style={{ cursor: "not-allowed" ,background:"transparent"}}>
          <FontAwesomeIcon icon={faBookmark} className="lolo" />
          <p className="ButtonNameforsher lolo">Save</p>
        </div>
      </div>
      <Modal
        open={commentPop}
        onClose={handleCloseCommentPopupBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="CommentPopUpBoxInSureddit">
          <div className="redultincomment">
            <div className="headerdiv">
              <img
                className="channelImg"
                src={profileimg}
                alt="he;lo"
                style={{ cursor: "not-allowed" }}
              />
              <p>{cname}</p>
              <p>
                <b>{create}</b>
              </p>
              <p>Because you have already visited</p>
            </div>
            <p className="content">{content}</p>
            <div className="imgsubbredditpopup">
            <img
              className="postimageincomment"
              src={postimg}
              onError={handleImageError}
            />
            </div>
            <div className="resultFooter">
              <div className="resultbutton" style={{ cursor: "not-allowed" }}>
                <FontAwesomeIcon icon={faComment} />
                <p className="commentcountnumber">{commentCount}</p>
                <p>Comments</p>
              </div>

              <div className="resultbutton" style={{ cursor: "not-allowed" }}>
                <FontAwesomeIcon
                  icon={faShareNodes}
                  style={{ cursor: "not-allowed" }}
                />
                <p className="ButtonNameforsher">Share</p>
              </div>
              <div className="resultbutton " style={{ cursor: "not-allowed" }}>
                <FontAwesomeIcon icon={faBookmark} className="lolo" />
                <p className="ButtonNameforsher lolo">Save</p>
              </div>
            </div>
          </div>
          <div className="forcommentbox">
            <p className="commentByUserName" style={{ margin: "0px" }}>
              Comment as <strong>{UserNameLogin.toUpperCase()}</strong>
            </p>

            <div className="createcommentbox">
              <textarea
                placeholder="What are your thought"
                className="commentboxtext"
                value={userComment}
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

                  <button
                    className="CommentBtn"
                    onClick={() => PostcommentHandel(id)}
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>

            {sortedCommentData.map((item) => {
              return (
                <>
                  <div className="commentinsub">
                    <CommentData
                      profileImage={profileimg}
                      commentcontent={item.content}
                      commentuserId={item.author}
                      commentid={item._id}
                      HandelComment={HandelComment}
                      commentDelete={commentDelete}
                    />
                  </div>
                  {Array.isArray(item.children) && item.children.length > 0 && (
                    <>
                      {item.children.map((childItem) => (
                        <div className="childcommentinsub">
                          <CommentDataforChild
                            profileImage={profileimg}
                            commentcontent={childItem.content}
                            childauth={childItem.author}
                            createdAt={childItem.createdAt}
                          />
                        </div>
                      ))}
                    </>
                  )}
                </>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SubredditPost;
