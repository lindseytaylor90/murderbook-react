import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow.js';
import {
    LocalHospital, 
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons';
import user from '../../data/user'
import { baseUrl } from '../../shared/baseUrl';

const Sidebar = (props) => {
    return(
      <div className="sidebar">
          <SidebarRow src={baseUrl + props.user.photoURL} title={props.user.displayName}/>
          <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center"/>
          <SidebarRow Icon={EmojiFlags} title="Pages"/>
          <SidebarRow Icon={People} title="Friends"/>
          <SidebarRow Icon={Chat} title="Messanger"/>
          <SidebarRow Icon={Storefront} title="Marketplace"/>
          <SidebarRow Icon={VideoLibrary} title="Videos"/>
          <SidebarRow Icon={ExpandMoreOutlined} title="Expand More"/>
      </div>  
    );
}

export default Sidebar;