import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';


function Home(props) {
    if (props) {
        return (
            <div className="container appBody">
                <Sidebar/>
                <Feed posts={props.posts}/>
                <Widgets/>
            </div>
        );
    }
   return  <div>No Props</div>;
}

export default Home;   