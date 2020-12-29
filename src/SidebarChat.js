import React,{useState,useEffect} from "react"
import {Avatar} from "@material-ui/core";
import './SidebarChat.css'

function SidebarChat(){
    const [seed,setSeed]=useState("")

    useEffect(() => {//it renders when a component loads
    setSeed(Math.floor(Math.random()*5000))
    }, [])

    return(
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>RoomChat</h2>
                <p>last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat