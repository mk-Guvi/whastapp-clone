import React,{useEffect,useState} from 'react'
import "./Chat.css"
import {SearchOutlined,MoreVert,AttachFile} from "@material-ui/icons"
import {Avatar,IconButton} from "@material-ui/core";


function Chat() {
    const [seed,setSeed]=useState("")
    useEffect(() => {//it renders when a component loads
        setSeed(Math.floor(Math.random()*5000))
        }, [])
    
    
    return (
        <div className="chat">
             <div className="chat__header">
             <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
             <div className="chat__headerInfo">
                 <h3>RoomName</h3>
                 <p>Last Seen...</p>
             </div>
             
                 <div className="chat__headerRight">
                      <IconButton >
                           <SearchOutlined/>
                      </IconButton>
                        <IconButton >
                              <AttachFile/>
                        </IconButton>
                        <IconButton>
                            <MoreVert/>
                        </IconButton>

                 </div>

             </div>
             
             <div className="chat__body">

             </div>
             <div className="chat__footer">

             </div>
        </div>
    )
}

export default Chat
