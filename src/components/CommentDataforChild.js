import React, { useEffect, useState } from "react";
import "../styles/LoginPostResult.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
function CommentDataforChild({ commentcontent, childauth }) {
  const LoginJwt = localStorage.getItem("jwttoken");

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://academics.newtonschool.co/api/v1/reddit/user/${childauth}`;
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
        Setcreattime(moment(data.createdAt));
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, [childauth, LoginJwt]);
  return (
    <>
      <div className="CommentDataDivforchildcomment">
        <div className="commentedUsertracknamelogo">
          <img src={userData.profileImage} />
          {userData && <p>{userData.name}</p>}
          <p>creat time</p>
        </div>
        <p className="childcommrnt">{commentcontent}</p>
        <div className="divforbuttonincomment">
          <div className="voteUpDownincomment">
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
            </svg>{" "}
            <p className="likecount">4</p>
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
            </svg>{" "}
          </div>
          <div className="CommentinsideComment">
          <i class="fa-sharp fa-light fa-comment-dots" style={{marginRight:"5px"}}></i>{" "}
            <p style={{marginRight:"5px"}}>Reply</p>
          </div>
          <div className="btnshare" style={{marginRight:"5px"}}>
          <i class="fa-sharp fa-thin fa-share" style={{marginRight:"5px"}}></i>{" "}

          share</div>
          <MoreHorizIcon style={{marginLeft:"5px"}}/>
        </div>
      </div>
    </>
  );
}

export default CommentDataforChild;
