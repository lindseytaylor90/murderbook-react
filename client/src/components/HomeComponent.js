import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';


function Home(props) {
    return (
        <div className="container appBody">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    );
}

export default Home;   