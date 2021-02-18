import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import {
    ThumbUp, 
    ChatBubbleOutline,
    AccountCircle,
    NearMe,
    ExpandMoreOutlined
} from '@material-ui/icons';

const Post = ({ username, timestamp, message, image, profilePic }) => {
    return(
        <div className="post">
            <div className="postTop">
                <Avatar className="postAvatar" src={profilePic}/>
                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>{timestamp.toUTCString()}</p>
                </div>
            </div> 
            <div className="postBottom">
                <p>{message}</p>
            </div>
            <div className="postImage">
                <img src={image} alt=""/>
            </div> 
            <div className="postOptions">
                <div className="postOption">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="postOption">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="postOption">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="postOption">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post;