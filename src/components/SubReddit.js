import React from "react";
import Hoc from "../Hoc/Hoc";
import "../styles/SubReddit.css";
import "../styles/LoginResultComponent.css";
import {
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Noresultcomponent from "./Noresultcomponent";

function SubReddit() {
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
          <h2>name</h2>
          <h6>Social Post</h6>
        </div>
        <div>
          <button>join</button>
        </div>
      </div>
      <div className="community-container">
        <div className="community-container-2">
          <div className="divforpostside">
            <div className="createPostdiv">
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
            <Noresultcomponent/>
          </div>
          <div className="right-side-community-create-post">
            <div><h3>About Community</h3></div>
            <div><p>Post</p>
            <p>1 Online</p>
            </div>
            <div>
            <button>Create Post</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoc(SubReddit);
