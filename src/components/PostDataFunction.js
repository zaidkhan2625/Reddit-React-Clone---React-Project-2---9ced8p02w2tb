import React from 'react'
import "../styles/Result.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

function PostDataFunction({
    image,
    name,
    content,
    likeCount,
    commentCount,
    PostImages,
  }) {
    return (
      <>
        <div className="resultdivsection">
          <div className="resultHeadin">
            <div className="rightheaddata">
              <img className="profilelogo" src={image} />
              <p className="username">{name}</p>
              <p className="timePost">time of post</p>
            </div>
            <div className="joinbutton">
              <button className="join">join</button>
              <MoreHorizIcon className="horiz" />
            </div>
          </div>
          <div className="resultBody">
            <p className="twoLineEllipsis">{content}</p>
            <img className="PostImage" src={PostImages} />
          </div>
          <div className="resultFooter">
            <div className="Like">
              <ThumbUpOutlinedIcon /> <p className="likecounnt">{likeCount}</p>
              <ThumbDownAltOutlinedIcon />
            </div>
            <div className="commentdiv">
              <ChatBubbleOutlineOutlinedIcon />
              <p className="comment">{commentCount}</p>
            </div>
            <div className="commentdiv">
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p className="share">share</p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default PostDataFunction
