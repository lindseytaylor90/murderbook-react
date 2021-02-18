import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const Feed = (props) => {
    console.log("props= ", props);
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {
                props.posts.map(post => (
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