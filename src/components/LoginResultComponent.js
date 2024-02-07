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
  const {LoginJwt} = useStateValue();
  const navigate=useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      const projectId = "pvxi7c9s239h";
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/reddit/post?limit=20",
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
        setData(data.data);
        console.log(data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
    fetchPost();
    // Call the function to fetch data
  }, []);
  console.log("jwt token is in logresult componeent:",LoginJwt);
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
              onClick={()=>navigate('/Createpost')}
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
            Hot
          </div>
          {data.map((item) => {
            return(
            <div className="postdiv">
              <LoginResultPost
                name={item.author.name}
                commentCount={item.commentCount}
                channelName={item.channel.name}
                id={item._id}
                authid={item.author._id}
                likeCount={item.likeCount}
                channelImage={item.images}
                profileImage={item.author.profileImage}
                LoginJwt={LoginJwt}
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
            <button className="premiumButton">Try Now</button>
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
            <button className="creatcommunity">Creat Communitiy</button>
          </div>
          <div className="Agreement">
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname" >User Agreement</p>
                <p className="termname" >Privacy Policy</p>

              </div>
              <div className="agreementTerm">
                <p className="termname" >User Agreement</p>
                <p className="termname" >Moderator Code Of </p>
                <p className="termname" >Conduct</p>
              </div>
            </div>
            <div className="AgreementTerm">
              <div className="agreementTerm">
                <p className="termname" >English</p>
                <p className="termname" >Francais</p>
                <p className="termname" >Italiano</p>


              </div>
              <div className="agreementTerme">
                <p className="termname" >Deutsch</p>
                <p className="termname" >Espanoi </p>
                <p className="termname" >Portugues</p>
              </div>
            </div>
            <p className="termnamee" >Reddit, Inc. © 2024. All rights reserved.</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hoc (LoginResultComponent);
