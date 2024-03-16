import React, { useState } from "react";
import HomeComponent from "./HompeComponent";
import "../styles/Result.css";

import { useEffect } from "react";
import Hoc from "../Hoc/Hoc";
import PostDataFunction from "./PostDataFunction";
import Popular from "./Popular";
import { useStateValue } from "./StatePeovider";
import Noresultcomponent from "./Noresultcomponent";
function Result() {
  const [popularData, SetpopularData] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [postData, SetpostData] = useState([]);
  const [filteredPostData, setFilteredPostData] = useState(postData); // State for filtered data
  const [searchres, Setsearch] = useState(false);
  const { searchValue } = useStateValue();
  useEffect(() => {
    // Fetch data when the component mounts
    Setsearch(false);
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
  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  const delayedSearch = debounce(() => {
    // Filter post data whenever search value changes
    
    const filteredData = postData.filter((item) => {
      return (
        item.content.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.author.name.toLowerCase() === searchValue.toLowerCase()
      );
    });
    setFilteredPostData(filteredData);
    
  }, 1000);
  useEffect(() => {
    // Filter post data whenever search value changes
    if (searchValue.trim()!="") {
      Setsearch(true);
    }
    delayedSearch();
  }, [searchValue, postData]);

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
          {searchres && filteredPostData.length === 0 ? (
            <Noresultcomponent />
          ) : (
            filteredPostData.map((item) => (
              <PostDataFunction
                image={item.author.profileImage}
                name={item.author.name}
                content={item.content}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
                PostImages={item.images[0]}
              />
            ))
          )}
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

export default Hoc(Result);
