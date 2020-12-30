import React,{useState,useEffect} from "react"
import {Avatar} from "@material-ui/core";
import './SidebarChat.css'

function SidebarChat({id,name,addNewChat}){
    const [seed,setSeed]=useState("")

    useEffect(() => {//it renders when a component loads
    setSeed(Math.floor(Math.random()*5000))
    }, [])


    const createChat=()=>{
     const roomName=prompt("Enter room name")
     if(roomName){
         //do the DB  stuffs
     }
     console.log(roomName)
    }

     return !addNewChat ?(
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p> last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
             <h2 >AddNewChat</h2>

        </div>
    )
}

export default SidebarChat