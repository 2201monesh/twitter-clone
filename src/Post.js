import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@mui/icons-material/Verified';
import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    Verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
      <div className="post--avatar">
        <Avatar src="" />
      </div>
      <div className="post--body">
        <div className="post--header">
            <div className="post--headerText">
                <h3>Monesh Goyal <span className='post--headerSpecial'>
                    <VerifiedIcon className='post--badge' />
                </span></h3>
            </div>
            <div className="post--headerDescription">
              <p>Hello everyone, this is a twitter clone!!!!!!!!</p>
            </div>
        </div>
        <img src="https://thumbs.gfycat.com/FrightenedAssuredAmethystsunbird-size_restricted.gif" alt="" />

        <div className="post--footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post;
