import React from "react";
import "../styles/Result.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StatePeovider";

function PostDataFunction({
  image,
  name,
  content,
  likeCount,
  commentCount,
  PostImages,
  createdAt,
}) {
  const {open, setOpen}=useStateValue();
  return (
    <>
      <div className="resultdivsection">
        <div className="resultHeadin">
          <div className="rightheaddata">
            <img className="profilelogo" src={image} />
            <p className="username">{name}</p>
            <p className="timePost">{createdAt}</p>
          </div>
          <div className="joinbutton">
            <button className="join">join</button>
            <MoreHorizIcon className="horiz" />
          </div>
        </div>
        <div className="resultBody">
          <p className="">{content}</p>
          <img className="PostImage" src={PostImages} />
        </div>
        <div className="resultFooter">
          <div className="Like" onClick={()=>setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-big-up"
            >
              <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
            </svg>
            <p className="likecounnt">{likeCount}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-big-down"
            >
              <path d="M15 6v6h4l-7 7-7-7h4V6h6z" />
            </svg>
          </div>
          <div className="commentdiv" onClick={()=>setOpen(true)}>
            <ChatBubbleOutlineOutlinedIcon />
            <p className="comment">{commentCount}</p>
          </div>
          <div className="commentdiv" onClick={()=>setOpen(true)}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <p className="share">share</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDataFunction;
