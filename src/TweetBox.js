import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Monesh Goyal",
      username: "goyalmonesh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1420660265863892997/fyOoqfXK_400x400.jpg"  
    });

    setTweetImage("");
    setTweetMessage("");
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox--input">
          <Avatar src='' />
          <input 
           onChange={e => setTweetMessage(e.target.value)}
           value={tweetMessage} 
           placeholder="What's happening?" type="text" />
        </div>

        <input 
         value={tweetImage} 
         onChange={e => setTweetImage(e.target.value)}
         className='tweetBox--imageInput' placeholder="Enter image URL" type="text" />
        <Button 
         onClick={sendTweet}
         type='submit' className='tweetBox--tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
