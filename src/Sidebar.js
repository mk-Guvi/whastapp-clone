import React,{useState,useEffect} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from "./SidebarChat";
import './Sidebar.css' ;
import {useStateValue} from "./StateProvider"
import db from "./firebase";

 function Sidebar() {
    const [rooms,setRooms]=useState([])
    const [{user},dispatch]=useStateValue()

    useEffect(()=>{
            const unsubscribe=db.collection('rooms').onSnapshot(snapshot=>(//rooms=collection of the db,snapshot notes the list of elements in db and also its changes in the db
                setRooms(snapshot.docs.map(doc=>({//snapshot.docs refers to the list of items available in the db
                    id:doc.id,//getting each id of the data 
                    data:doc.data(),//getting the data of each id

                    })))
            )
            )
            return()=>{//cleanp function that detaches the snapshot when it is not in use for optimization 
                unsubscribe()//
            }
    },[])

    return (
        <div className="sidebar">
            {/* <h1>hell siedbar</h1> */}
            <div className="sidebar__header">
                 <Avatar src={user?.photoURL}/>{/**user?. is optional chaining which means  if user is undefined dont give an error */}
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
                {/* <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/> */}
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>//room.darta.name refers to the name provided in the db
                ))}
             
                 
            </div>
        </div>
    )
}

export default Sidebar
