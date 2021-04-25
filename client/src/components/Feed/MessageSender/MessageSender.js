import React, { useState } from 'react';
import './MessageSender.css';

// icons
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'
import { actionTypes } from '../../../state/reducer';
import { baseUrl } from '../../../shared/baseUrl';


// context api
import { useStateValue } from '../../../state/Provider'

const GetDateWithFormat = () => {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2 ){
        month='0' + month;
    }
    if (day.length < 2 ){
        day = '0' + day;
    }
    return [month,day,year].join('/');
}

const MessageSender = () => {
    const [{ user, posts }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    console.log('user = ', user);
    const handleSubmit = e => {
        e.preventDefault();

        // should add to post here
        console.log("input= ", input);
        dispatch({
            type: actionTypes.ADD_POST, 
            post: {
                message: input,
                timestamp: GetDateWithFormat(new Date()),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
                id: posts.length + 1, 
            }
        })

        // clear form
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src={baseUrl + user.photoURL} />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        className="messageSenderInput" 
                        placeholder={`What's on your mind, ${user.displayName}?`} 
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} 
                        placeholder={"Image URL (Optional)"} />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="messageSenderBottom">
                <div className="messageSenderOption">
                    <Videocam style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSenderOption">
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSenderOption">
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
