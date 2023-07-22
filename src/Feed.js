import React from 'react'
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
      <div className="feed">
        <div className="feed--header">
            <h2>Home</h2>
        </div>

        <TweetBox />
        <Post
          displayName="Monesh Goyal"
          username='goyalmonesh'
          Verified
          text="Yoooo it's working"
          avatar=""
          image="https://thumbs.gfycat.com/FrightenedAssuredAmethystsunbird-size_restricted.gif"
         />
        <Post />
        <Post />
        <Post />
      </div>
  )
}

export default Feed;
