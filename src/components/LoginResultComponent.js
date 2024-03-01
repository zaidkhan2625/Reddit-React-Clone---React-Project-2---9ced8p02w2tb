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
  const sortedData = [...data].sort((a, b) =>  b.likeCount - a.likeCount);
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
  
        // Log the result again (if needed)
        console.log("rtesukygbuhkyib", data);
      } catch (error) {
        // Handle fetch errors
        console.error("Fetch error:", error);
      }
    };
  
    // Call the function to fetch data
    fetchPost();
  }, []);
  
  // console.log("sorted data" , sortedData);
  const gotopremium =()=>{
    navigate("/premium");
  }

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
          {sortedData.map((item) => {
            return(
            <div className="postdiv">
              <LoginResultPost
                name={item.author.name}
                commentCount={item.commentCount}
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
            <button className="premiumButton" onClick={async()=>await gotopremium()}>Try Now</button>
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
            <button className="creatcommunity" onClick={async()=>await alert("still under work")}>Creat Communitiy</button>
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
