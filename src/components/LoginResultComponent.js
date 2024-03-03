import React from "react";
import "../styles/LoginResultComponent.css";
import { useStateValue } from "./StatePeovider";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LoginResultPost from "./LoginResultPost";
import {
  faFireFlameSimple,
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hoc from "../Hoc/Hoc";
function LoginResultComponent() {
  const [data, setData] = useState([]);
  const { LoginJwt } = useStateValue();
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("hot");
  const [likeChange, setLikeChange] = useState(0);

  useEffect(() => {
    const projectId = "pvxi7c9s239h";

    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/reddit/post?limit=100",
          {
            headers: {
              projectId: projectId, // Use the same case for headers
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Handle the data as needed
        setData(data.data);
        console.log(data);
        console.log("rtesukygbuhkyib", data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
    fetchPost();
  }, []);
  useEffect(() => {
    const sortData = () => {
      let sortedPosts = [...data];
      switch (sortCriteria) {
        case "hot":
          sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
          case "odlf":
          sortedPosts.sort((a, b) =>  new Date(a.createdAt)-new Date(b.createdAt));
          break;
        case "likeIncrease":
          sortedPosts.sort((a, b) => a.likeCount - b.likeCount);
          break;
        case "likeDecrease":
          sortedPosts.sort((a, b) => b.likeCount - a.likeCount);
          break;
        case "CommentIncrese":
          sortedPosts.sort((a, b) => a.commentCount - b.commentCount);
          break;
        case "CommentDecrease":
          sortedPosts.sort((a, b) =>b.commentCount-a.commentCount);
          break;
        default:
          break;
      }

      setSortedData(sortedPosts);
    };

    sortData();
  }, [data, sortCriteria]);
  const handleLikeIncrease = (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, likeCount: post.likeCount + 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const handleLikedecrese= (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.map((post) => {
      if (post._id === postId) {
        return { ...post, likeCount: post.likeCount - 1 };
      }
      return post;
    });

    setData(updatedData);
  };
  const HandelPostDelete = (postId) => {
    // Assuming data is an array of posts
    const updatedData = data.filter((post) => post._id !== postId);
    setData(updatedData);
};
  console.log("sorted data", sortedData);

  // console.log("sorted data after like increemnt", sortedData);

  const gotopremium = () => {
    navigate("/premium");
  };
  const handelDead = () => {
    navigate("/Dead");
  };
  const formatCreatedAtDate = (createdAt) => {
    return new Date(createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <>
      {/* <Hader/> */}
      <div className="Logincomponentresult">
        <div className="leftSideofLoginResult">
          <div className="createPostdiv">
            <img
              className="PostDivLogo"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg"
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
          <div className="Bestdiv">
            <FontAwesomeIcon icon={faFireFlameSimple} />
            <p onClick={() => setSortCriteria("hot")} className="FilterFunction">Hot</p>
            <p onClick={() => setSortCriteria("likeIncrease")}className="FilterFunction">Like Up</p>
            <p onClick={() => setSortCriteria("likeDecrease")}className="FilterFunction">Like Down</p>
            <p onClick={() => setSortCriteria("CommentIncrese")}className="FilterFunction">
              Comment Up
            </p>
            <p onClick={() => setSortCriteria("CommentDecrease")}className="FilterFunction">
              Comment Down
            </p>
            <p onClick={() => setSortCriteria("odlf")}className="FilterFunction">
              Old First
            </p>
            {/* Add similar lines for other sorting criteria */}
          </div>
          {sortedData.map((item) => {
            return (
              <div className="postdiv">
                <LoginResultPost
                  name={item.author.name}
                  commentCount={item.commentCount}
                  id={item._id}
                  authid={item.author._id}
                  likeCount={item.likeCount}
                  channelImage={item.images}
                  profileImage={item.author.profileImage}
                  onLikeIncrease={() => handleLikeIncrease(item._id)}
                  onLikeIDecrease={()=>handleLikedecrese(item._id)}
                  Deltepoat={()=>HandelPostDelete(item._id)}
                  content={item.title ?item.title:item.content}
                  createdAt={formatCreatedAtDate(item.createdAt)}
                />
              </div>
            );
          })}
        </div>
        <div className="rightSideOfLoginResult">
          <div className="redditPrimeiumDiv">
            <div className="logopremeium">
              <div>
                {" "}
                <ParkOutlinedIcon />
              </div>
              <div className="premiumtextbody">
                <p>Reddit Premium</p>
                <p>The best Reddit Experience</p>
              </div>
            </div>
            <button
              className="premiumButton"
              onClick={async () => await gotopremium()}
            >
              Try Now
            </button>
          </div>
          <div className="homecreate">
            <img
              className="Imageofhomepost"
              src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
            />
            <div className="HomeLogodiv">Home</div>
            <p className="textParagraph">
              Your personal Reddit frontpage. Come here to check in with your
              favorite communities.
            </p>
            <Link to="/Createpost">
              <button className="creatPost">Creat Post</button>
            </Link>
            <button className="creatcommunity" onClick={handelDead}>
              Creat Communitiy
            </button>
          </div>
          <div className="Agreement">
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname">User Agreement</p>
                <p className="termname">Privacy Policy</p>
              </div>
              <div className="agreementTerm">
                <p className="termname">User Agreement</p>
                <p className="termname">Moderator Code Of </p>
                <p className="termname">Conduct</p>
              </div>
            </div>
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname">English</p>
                <p className="termname">Francais</p>
                <p className="termname">Italiano</p>
              </div>
              <div className="agreementTerme">
                <p className="termname">Deutsch</p>
                <p className="termname">Espanoi </p>
                <p className="termname">Portugues</p>
              </div>
            </div>
            <p className="termnamee">
              Reddit, Inc. © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hoc(LoginResultComponent);
