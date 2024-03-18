import React, { useState } from "react";
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

function SubredditPost({
  Image,
  createdAt,
  channelname,
  postname,
  content,
  images,
}) {
  const handleImageError = (e) => {
    e.target.src = Image;
  };

  const [commentPop, SetcommentPop] = useState(false);

  const handleCloseCommentpopupbox = () => {
    SetcommentPop(false);
  };

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

  return (
    <div className="posforsubreddit">
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
      <div className="imgdiv">
        <img className="postimage" src={postimg} onError={handleImageError} />
      </div>
      <div className="resultFooter">
        <div className="resultbutton" onClick={() => SetcommentPop(false)}>
          <FontAwesomeIcon icon={faComment} />
          <p className="commentcountnumber">{1}</p>
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
      <Modal
        open={commentPop}
        onClose={handleCloseCommentpopupbox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="CommentBox">
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
            <img
                className="postimageincomment"
                src={postimg}
                onError={handleImageError}
              />
               <div className="resultFooter">
        <div className="resultbutton" onClick={() => SetcommentPop(true)}>
          <FontAwesomeIcon icon={faComment} />
          <p className="commentcountnumber">{1}</p>
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
          <div className="forcommentbox"></div>
        </Box>
      </Modal>
    </div>
  );
}

export default SubredditPost;
