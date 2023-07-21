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
    </div>
  )
}

export default Widgets;
