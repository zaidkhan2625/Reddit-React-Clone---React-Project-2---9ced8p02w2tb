import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import { useStateValue } from "./StatePeovider";
function CommentData({
  commentcontent,
  commentuserId,
  commentid,
  HandelComment,
  commentDelete,
}) {
  const { cCount, SetcCount } = useStateValue();
  const [userData, setUserData] = useState([]);
  const [delteboxincmnt, Setdelteboxincmnt] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const LoginJwt = localStorage.getItem("jwttoken");
  const LoginUserId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/user/${commentuserId}`;
      const projectId = "pvxi7c9s239h";
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LoginJwt}`,
            projectID: projectId,
          },
        });

        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, [commentuserId, LoginJwt]);
  async function DeleteComment(commentId) {
    const projectId = "pvxi7c9s239h";
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/reddit/comment/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${LoginJwt}`,
            projectID: projectId,
          },
        }
      );
      const contentType = response.headers.get("content-type");
      await HandelComment();
      if (commentDelete) {
        commentDelete();
      }
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Comment deleted successfully:", data);
        SetcCount((pre) => pre - 1);
        return data;
      } else {
        console.log("Comment deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting comment:", error.message);
      throw error;
    }
  }

  const HandelDeleteComment = () => {
    Setdelteboxincmnt(true);
  };
  const handelcommentboxclose = () => {
    Setdelteboxincmnt(false);
  };

  return (
    <>
      <div className="CommentDataDiv">
        <div className="commentedUsertracknamelogo">
          <img
            src={
              userData.profileImage
                ? userData.profileImage
                : "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg"
            }
          />
          <p>{userData.name}</p>
        </div>
        <p>{commentcontent}</p>
        <div className="divforbuttonincomment">
          <div className="voteUpDownincomment" style={{cursor:"not-allowed"}}>
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
            <p className="likecount">0</p>
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
          <div className="CommentinsideComment" style={{cursor:"not-allowed"}}>
            <i
              class="fa-sharp fa-light fa-comment-dots"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            <p>Reply</p>
          </div>
          <div className="btnshare" style={{cursor:"not-allowed"}}>
            {" "}
            <i
              class="fa-sharp fa-thin fa-share"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            share
          </div>
          {commentuserId === LoginUserId ? (
            <p
              className="delteincomment"
              style={{ cursor: "pointer" }}
              onClick={() => DeleteComment(commentid)}
            >
              {" "}
              <DeleteIcon style={{ margin: "2px" }} />
              Delete{" "}
            </p>
          ) : null}
        </div>
        <Modal
          open={delteboxincmnt}
          onClose={handelcommentboxclose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            top: `${modalPosition.y}px`,
            left: `${modalPosition.x}px`,
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 280,
              bgcolor: "white", // Background color for the Box
              boxShadow: 4,
              p: 4,
            }}
          >
            <p>Delete</p>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CommentData;
