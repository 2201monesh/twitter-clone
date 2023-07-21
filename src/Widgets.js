import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search'
 
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets--input">
        <SearchIcon className='widgets--searchIcon' />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1566348203645337600"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GoyalMonesh"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          className="widgets--tweetButton"
          url={""}
          options={{ text: "#This message is from a twitter clone made by Monesh Goyal", via: "GoyalMonesh" }}
        />  
      </div>
    </div>
  )
}

export default Widgets;
