import React from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from "./SidebarChat";
import './Sidebar.css' ;

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h1>hell siedbar</h1> */}
            <div className="sidebar__header">
                 <Avatar/>
                 <div className="sidebar__headerRight">
                     <IconButton><DonutLargeIcon/></IconButton>
                      <IconButton><ChatIcon/></IconButton>
                      <IconButton><MoreVertIcon/></IconButton>
                </div>
            </div>

            <div className="sidebar__search">
            
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>  
                    <input type="text" placeholder="Search or New Chats"></input>
                </div>
               
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
             
                 
            </div>
        </div>
    )
}

export default Sidebar
