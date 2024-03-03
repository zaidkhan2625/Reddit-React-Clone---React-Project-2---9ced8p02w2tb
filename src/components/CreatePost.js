import React, { useState } from "react";
import "../styles/CreatePost.css";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTablet,
  faHeading,
  faLink,
  faListOl,
  faQuoteRight,
  faFolder,
  faTable,
  faList,
  faSquarePollVertical,
  faSuperscript,
  faBold,
  faPlus,
  faTag,
  faItalic,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";
import { CheckBox } from "@mui/icons-material";
import { useStateValue } from "./StatePeovider";
import Hoc from "../Hoc/Hoc";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const [PostBox, SetPostBox] = useState(false);
  const [PostBoxImg, SetPostBoxImg] = useState(false);
  const [PostBoxLink, SetPostBoxLink] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const { LoginJwt } = useStateValue();
  const [PostTitle, SetPostTitle] = useState("");
  const [textareaContent, setTextareaContent] = useState("");
  const navigate= useNavigate();
  const HandelPostboxPostbgtm = () => {
    SetPostBox(true);
    SetPostBoxImg(false);
    SetPostBoxLink(false);
  };
  const HandelPostboxImgbgtm = () => {
    SetPostBoxImg(true);
    SetPostBox(false);
    SetPostBoxLink(false);
  };
  const HandelPostboxLinkbgtm = () => {
    SetPostBoxLink(true);

    SetPostBoxImg(false);
    SetPostBox(false);
  };
  const MediaSelector = () => {
    const handleMediaChange = (event) => {
      const mediaInput = event.target;
    
      if (mediaInput.files && mediaInput.files[0]) {
        const reader = new FileReader();
    
        reader.onload = function (e) {
          setSelectedMedia(e.target.result);
        };
    
        reader.readAsDataURL(mediaInput.files[0]);
    
        // Determine the media type
        setMediaType(
          mediaInput.files[0].type.startsWith("image/") ? "image" : "video"
        );
      } else {
        setSelectedMedia(null);
        setMediaType(null);
      }
    };

    return (
      <div>
        <div className="media-container">
          {selectedMedia && mediaType === "image" && (
            <img
              src={selectedMedia}
              alt="Selected"
              className="media-container"
            />
          )}
          {selectedMedia && mediaType === "video" && (
            <video width="300" height="300" controls>
              <source
                src={selectedMedia}
                type="video/mp4"
                className="media-container"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleMediaChange}
        />
      </div>
    );
  };
  const createPost = async () => {
    const apiUrl = "https://academics.newtonschool.co/api/v1/reddit/post/";
    const projectId = "pvxi7c9s239h";
    const formData = new FormData();
  formData.append('title', PostTitle);
  formData.append('content', textareaContent);
  if (selectedMedia) {
    const mediaBlob = convertDataUrlToBlob(selectedMedia);
    formData.append('images', mediaBlob, 'image_filename.jpg');
  }

  console.log("FormData content:");
formData.forEach((value, key) => {
  console.log(key, value);
}); // Check the FormData content
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginJwt}`,
          projectID: projectId,
          Authorization: `Bearer ${sessionStorage.getItem('jwttoken')}`
        },
        body: formData,
      });
      // Assuming the server returns JSON data, you can parse it
      const data = await response.json();
      console.log("Post created successfully:", data);
      if(data.status==='success')
      {
        navigate("/");
      }
      else
      {
       alert("not creted input or title error");
      }
      // Handle success as needed
    } catch (error) {
      console.error("Error creating post:", error.message);
      // Handle the error as needed
    }
  };
  
  function PostboxforPostTab() {
    return (
      <>
        
      </>
    );
  }
  const convertDataUrlToBlob = (dataUrl) => {
    const [, base64] = dataUrl.split(',');
    const binaryString = atob(base64);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
  
    return new Blob([uint8Array], { type: mediaType }); // use mediaType here to set the correct MIME type
  };
  

  function Link() {
    return (
      <>
        <input type="text" placeholder="Url" className="linkinput" />
      </>
    );
  }
  return (
    <>
      {/* < /> */}
      <div className="CreatePostMainDiv">
        <div className="createpodtiv">
          <div className="leftsidecreatepost">
            <div className="forcreteposttext">
              <div class="cretposttext">Create a post</div>
              <button className="DraftsButton">
                Drafts<span className="Spantag">0</span>
              </button>
            </div>
            <div className="communityfeild"></div>
            <div className="posbuttontFeild">
              <div className="PostButton">
                <div className="button">
                  <button onClick={HandelPostboxPostbgtm}>
                    <FontAwesomeIcon icon={faTablet} className="icon" />
                    Post
                  </button>
                </div>
                <div className="button">
                  <button onClick={HandelPostboxImgbgtm}>
                    <FontAwesomeIcon icon={faImage} className="icon" />
                    Image & Vedio
                  </button>
                </div>
                <div className="button">
                  <button onClick={HandelPostboxLinkbgtm}>
                    <FontAwesomeIcon icon={faLink} className="icon" />
                    Link
                  </button>
                </div>
                <div className="button">
                  <button>
                    <FontAwesomeIcon
                      icon={faSquarePollVertical}
                      className="icon"
                    />
                    Poll
                  </button>
                </div>
              </div>
              <div className="title">
                <textarea placeholder="Title" className="textarea" onChange={(e) => SetPostTitle(e.target.value)}></textarea>
                <div class="wordcount">0/300</div>
              </div>
              <div className="postcontent">
                {PostBox ? (
                 <div className="postcontentDiv">
                 <div className="styeltypeofcontent">
          <div className="stylebtn">
            <button className="stlbtn">
              <FontAwesomeIcon icon={faBold} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faItalic} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faStrikethrough} />
            </button>
            <button className="stlbtn">b</button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faSuperscript} />
            </button>
            <button className="stlbtn">s</button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faHeading} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faList} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faListOl} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faQuoteRight} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faFolder} />
            </button>
            <button className="stlbtn">
              <FontAwesomeIcon icon={faTable} />
            </button>
            <button className="Markdown">MarkDown Mode</button>
          </div>
        </div>
        <textarea
          placeholder="Text (optional)"
          className="inputcontent"
          // value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
        />
       
                 </div>
                ) : PostBoxImg ? (
                  <MediaSelector />
                ) : PostBoxLink ? (
                  <Link />
                ) : (
                  <PostboxforPostTab />
                )}
              </div>
              <div className="postfootbutton">
                <button className="ptypebutton">
                  <FontAwesomeIcon icon={faPlus} /> OC
                </button>
                <button className="ptypebutton">
                  <FontAwesomeIcon icon={faPlus} />
                  Spoiler
                </button>
                <button className="ptypebutton">
                  <FontAwesomeIcon icon={faPlus} />
                  NSEW
                </button>
                <button className="ptypebutton">
                  <FontAwesomeIcon icon={faTag} />
                  Flair
                </button>
              </div>
              <div className="savepostdiv">
                <button className="Savedraft">Save as Draft</button>
                <button className="postbtn" onClick={createPost}>Post</button>
              </div>
              <div className="postvlidation">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    // checked={isChecked}
                    // onChange={handleCheckboxChange}
                  />
                  <p>Send me post reply notifications</p>
                </div>
                <div className="accoumnt">
                  <a href="#">Connect accounts to share your post</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rightsideofcreatepost">
            <div className="redditpostrule">
              <div className="logoinpost"></div>
              <ol className="ListofRuel">
                <li className="rulelist">Remember the human</li>
                <li className="rulelist">Behave like you would in real life</li>
                <li className="rulelist">
                  Look for the original source of content
                </li>
                <li className="rulelist">
                  Search for duplicates before posting
                </li>
                <li className="rulelist">Read the community’s rules</li>
              </ol>
            </div>
            <div class="termandpoliciy">
              Please be mindful of reddit's
              <a href="https://www.reddit.com/help/contentpolicy">
                content policy
              </a>
              and practice good
              <a href="https://www.reddit.com/wiki/reddiquette">reddiquette</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hoc(CreatePost);
