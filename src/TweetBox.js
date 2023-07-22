import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox--input">
          <Avatar src='' />
          <input placeholder="What's happening?" type="text" />
        </div>

        <input className='tweetBox--imageInput' placeholder="Enter image URL" type="text" />
        <Button className='tweetBox--tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
