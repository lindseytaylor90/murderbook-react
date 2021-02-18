import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import posts from '../../data/posts';

const Feed = () => {
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.profilePic}
                        message={post.message}
                        timestamp={post.timestamp}
                        username={post.username}
                        image={post.image}
                    />  
                ))
            }
        </div>
    );
}

export default Feed;