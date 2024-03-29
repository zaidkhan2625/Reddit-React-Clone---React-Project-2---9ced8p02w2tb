import React, { useEffect, useState } from "react";
import Hoc from "../Hoc/Hoc";
import "../styles/SubReddit.css";
import "../styles/LoginResultComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Noresultcomponent from "./Noresultcomponent";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginResultPost from "./LoginResultPost";
import SubredditPost from "./SubredditPost";
import CommentData from "./CommentData";
import CommentDataforChild from "./CommentDataforChild";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  faComment,
  faShareNodes,
  faBookmark,
  faL,
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
import UpdateIcon from "@mui/icons-material/Update";
import EditIcon from "@mui/icons-material/Edit";
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

function SubReddit() {
  const navigate = useNavigate();
  const location = useLocation();
  const [Data, setData] = useState([]);
  const [commentPop ,SetcommentPop ]= useState(false);
  const { idforchannel, name, namecreate, Image } = location.state || {};
  const postname = name ? name : namecreate ? namecreate : "No Channel";
  const config = {
    headers: {
      projectID: "pvxi7c9s239h",
    },
  };
  useEffect(() => {
    const HandelProfileTOdata = async () => {
      try {
        const res = await axios.get(
          `https://academics.newtonschool.co/api/v1/reddit/channel/${
            idforchannel.length > 1 && idforchannel
          }/posts`,
          config
        );
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    HandelProfileTOdata();
  }, []);
  console.log(`"name0",${idforchannel}`);
  const formatCreatedAtDate = (createdAt) => {
    return new Date(createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  console.log(`lofi ngbebthl , ${namecreate}`);
  
  return (
    <div className="mainreddit">
      <div className="communityhead"></div>
      <div className="communitydetails">
        <div className="imgout">
          <div className="imgin">
            <img
              src="https://cdn-icons-png.flaticon.com/512/48/48952.png"
              alt="hello"
            />
          </div>
        </div>
        <div>
          <h2>{postname.toUpperCase()}</h2>
          <h6>Social Post</h6>
        </div>
        <div>
          <button>join</button>
        </div>
      </div>
      <div className="community-container">
        <div className="community-container-2">
          <div className="divforpostside">
            <div className="createPostdiv" >
              <img
                className="PostDivLogo"
                src="https://cdn-icons-png.flaticon.com/512/48/48952.png"
              />
              <input
                className="PostDivInput"
                type="text"
                placeholder="Creat Post"
                onClick={() => navigate("/Createpost")}
              />
              {/* <ImageOutlinedIcon className="imagelogo" /> */}
              {/* <AttachFileOutlinedIcon className="imagelogo" /> */}
              <div className="imagelogo">
                {" "}
                <FontAwesomeIcon className="logopost" icon={faImage} />
              </div>
              <div className="imagelogo">
                {" "}
                <FontAwesomeIcon className="logopost" icon={faLink} />
              </div>
            </div>
            <div className="noresult">
              {Data && Data.length > 0 ? (
                Data.map((item ,index) => {
                  return item ? (
                    <SubredditPost
                      key={item._id}
                      Image={Image}
                      channelname={postname}
                      content={item.content}
                      images={item.images[0]}
                      createdAt={formatCreatedAtDate(item.createdAt)}
                      postname={postname}
                      SetcommentPop={SetcommentPop}
                      
                      id={item._id}
                    />
                  ) : null;
                })
              ) : (
                <div style={{marginTop:"75px"}}><Noresultcomponent /></div>
              )}
            </div>
          </div>
          <div className="right-side-community-create-post">
            <div>
              <h3>About Community</h3>
            </div>
            <div>
              <p>{Data.length} Post</p>
              <p>1 Online</p>
            </div>
            <div>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/Createpost")}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Hoc(SubReddit);
