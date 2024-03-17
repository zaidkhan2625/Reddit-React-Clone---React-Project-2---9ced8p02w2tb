import React from 'react'
import '../styles/SubredditPost.css';
function SubredditPost({Image,channelname}) {
  return (
    <div className='posforsubreddit'>
    <div className='headerdiv'>
      <img className="channelImg" src={Image} alt='he;lo'/>
      <p>{channelname}</p>
      <p>created at</p>
      <p>Because you have already visited</p>
    </div>
    </div>
  )
}

export default SubredditPost
