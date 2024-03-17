import React from "react";
import "../styles/LoginPostResult.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  faComment,
  faShareNodes,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import EditIcon from "@mui/icons-material/Edit";

import "../styles/SubredditPost.css";
function SubredditPost({ Image, createdAt, channelname,postname, content, images }) {
  const handleImageError = (e) => {
    e.target.src = Image;
};
const postimg =images?images:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
const create = createdAt?createdAt:"Aug 23, 2023";
const cname = channelname?channelname:"harth leo";
const profileimg = Image?Image:"https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg";
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
        <div className="resultbutton" style={{cursor:"not-allowed"}}>
          <FontAwesomeIcon icon={faComment} />
          <p className="commentcountnumber">{1}</p>
          <p>Comments</p>
        </div>
        <div className="resultbutton">
          <FontAwesomeIcon icon={faShareNodes} style={{cursor:"not-allowed"}}/>
          <p className="ButtonNameforsher">Share</p>
        </div>
        <div className="resultbutton " style={{cursor:"not-allowed"}}>
          <FontAwesomeIcon icon={faBookmark} className="lolo" />
          <p className="ButtonNameforsher lolo">Save</p>
        </div>
      </div>
    </div>
  );
}

export default SubredditPost;
