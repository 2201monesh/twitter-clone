import { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(({
    displayName,
    username,
    Verified,
    text,
    image,
    avatar
}, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className="post--avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post--body">
        <div className="post--header">
            <div className="post--headerText">
                <h3> {displayName}
                <span className='post--headerSpecial'>
                    { Verified && <VerifiedIcon className='post--badge' />}@{username}
                </span></h3>
            </div>
            <div className="post--headerDescription">
              <p>{text}</p>
            </div>
        </div>
        <img src={image} alt="" />

        <div className="post--footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
});

export default Post;
