import React, { useState } from "react";
import HomeComponent from "./HompeComponent";
import "../styles/Result.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Hader from "./Hader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import Hoc from "../Hoc/Hoc";
function Result({ isloggedin, Setisloggedin }) {
  const [popularData, SetpopularData] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [postData, SetpostData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/reddit/channel",
          {
            headers: {
              projectID: "YOUR_PROJECT_ID",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        SetpopularData(data);
        // Handle the data as needed
        console.log(data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
    fetchData();
    const fetchPost = async () => {
      const projectId = "pvxi7c9s239h";
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/reddit/post?limit=100",
          {
            headers: {
              projectID: "projectId",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Handle the data as needed
        SetpostData(data.data);
        console.log(data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
    fetchPost();
    // Call the function to fetch data
  }, []);

  const handleSeeMore = () => {
    setShowMore(true);
  };
  const handleSeeLess = () => {
    setShowMore(false);
  };

  return (
    <>
      <div className="resultmain">
        <div className="sidebar">
          <HomeComponent className="sidebar" />
        </div>
        <div className="resultboadypart">
          {postData.map((item) => (
            <PostDataFunction
              image={item.author.profileImage}
              name={item.author.name}
              content={item.content}
              likeCount={item.likeCount}
              commentCount={item.commentCount}
              PostImages={item.images[0]}
            />
          ))}
        </div>
        <div className="popularResult">
          <p className="PopularCommunites">POPULAR COMMUNITIES</p>
          {Array.isArray(popularData.data) &&
            popularData.data
              .slice(0, showMore ? popularData.data.length : 5)
              .map((item) => <Popular name={item.name} image={item.image} />)}
          {!showMore && (
            <button className="showmore" onClick={handleSeeMore}>
              See More
            </button>
          )}
          {showMore && (
            <button className="showmore" onClick={handleSeeLess}>
              See less
            </button>
          )}
          {/* {popularData.data[0].name} */}
        </div>
      </div>
    </>
  );
}
function Popular({ name, image }) {
  return (
    <>
      <div className="resultPopular">
        <div className="popularLogo">
          <img className="img" src={image} />
        </div>
        <div className="memberinPopulr">
          <p className="popularname">{name}</p>
          <span className="numbberofmembers">25211 members</span>
        </div>
      </div>
    </>
  );
}
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
export default Hoc(Result);
