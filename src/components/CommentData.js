import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import { useStateValue } from "./StatePeovider";
function CommentData({ commentcontent, commentuserId, commentid ,HandelComment}) {
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
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Comment deleted successfully:", data);
        if(HandelComment){
          HandelComment();
        }
        return data;
      } else {
        console.log("Comment deleted successfully.");
        SetcCount((pre) => pre - 1);
       
      }
    } catch (error) {
      console.error("Error deleting comment:", error.message);
      throw error;
    }
  }
  function YourComponent() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleDeleteClick = () => {
      DeleteComment(commentid); // Call the DeleteComment function
      handleMenuClose(); // Close the menu after handling delete
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
          <MenuItem>Edit</MenuItem>
          <MenuItem>Follow</MenuItem>

          <MenuItem onClick={handleDeleteClick}>Delete </MenuItem>

          {/* Add more menu items as needed */}
        </Menu>
      </div>
    );
  }
  function YourComponentNoneComment({ commentid, DeleteComment }) {
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
          <MenuItem>Edit</MenuItem>
          <MenuItem>Follow</MenuItem>

          {/* Add more menu items as needed */}
        </Menu>
      </div>
    );
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
          <p>{commentuserId}</p>
        </div>
        <p>
          {commentcontent}
          {LoginUserId}
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
          {commentuserId === LoginUserId ? (
            <YourComponent
            />
          ) : (
            <YourComponentNoneComment />
          )}
          {/* <MoreHorizIcon /> */}
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
