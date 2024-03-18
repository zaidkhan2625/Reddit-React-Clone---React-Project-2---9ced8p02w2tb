import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import { useStateValue } from "./StatePeovider";
function CommentData({ commentcontent, commentuserId, commentid ,HandelComment,commentDelete}) {
  const { cCount, SetcCount } = useStateValue();
  const [userData, setUserData] = useState([]);
  const [delteboxincmnt, Setdelteboxincmnt] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const LoginJwt = sessionStorage.getItem("jwttoken");
  const LoginUserId = sessionStorage.getItem("userId");

  console.log("jwt in commendaata", LoginJwt);
  console.log("id", LoginUserId);
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
        console.log("dess" , data);
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
      if(commentDelete)
      {
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
          <img src={userData.profileImage} />
          <p>{userData.name}</p>
          
        </div>
        <p>
          {commentcontent}
          
        </p>
        <div className="divforbuttonincomment">
          <div className="voteUpDownincomment">
            <span className="insideCommentUpVote">⇧</span>
            <p className="likecount">4</p>
            <span className="insideCommentDownVote">⇩</span>
          </div>
          <div className="CommentinsideComment">
            <ChatBubbleOutlineSharpIcon className="iconinreply" />
            <p>Reply</p>
          </div>
          <div className="btnshare">share</div>
          {commentuserId === LoginUserId ? 
           <p className="delteincomment" onClick={()=>DeleteComment(commentid)}> <DeleteIcon style={{margin:"2px"}}/>Delete </p>:null}
         
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
