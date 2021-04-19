import React from 'react';
import './Header.css';
import NavItem from './NavItem/NavItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core'
import { ReactComponent as BellIcon } from '../../img/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../img/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../img/icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/plus.svg';
import baseUrl from '../../shared';

// image
import mbLogo from '../../img/mbLogo.webp'

// context api
import { useStateValue } from '../../state/Provider'

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="headerLeft">
                <img src={mbLogo} alt="mbLogo"/>
                <div className="headerInput">
                    <SearchIcon />
                    <input type="text" placeholder="Search murderbook" />
                </div>
            </div>

            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src={baseUrl + user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <NavItem icon={<PlusIcon />} />
                        <NavItem icon={<MessengerIcon />} />
                        <NavItem icon={<BellIcon />} />

                        <NavItem icon={<CaretIcon />}>
                        <DropdownMenu></DropdownMenu>
                        </NavItem>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
