import React from 'react'
import TweetBox from './TweetBox';

function Feed() {
  return (
      <div className="feed">
        <div className="feed--header">
            <h2>Home</h2>
        </div>

        <TweetBox />
      </div>
  )
}

export default Feed;
