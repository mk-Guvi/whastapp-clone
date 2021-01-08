import React,{useState,useEffect} from "react"
import {Avatar} from "@material-ui/core";
import './SidebarChat.css'
import db from "./firebase"
import {Link} from "react-router-dom"

function SidebarChat({id,name,addNewChat}){
    const [seed,setSeed]=useState("")
    const [messages,setMessages]=useState("")

    useEffect(() => {//it renders when a component loads
    setSeed(Math.floor(Math.random()*5000))
    }, [])

    useEffect(()=>{
            if(id){
                db.collection("rooms").doc(id).collection("messages").orderBy('timestamp','desc').onSnapshot(
                    snapshot=>setMessages(snapshot.docs.map((doc)=>doc.data()
                      ))
                                    )
            }
    },[id])


    const createChat=()=>{
     const roomName=prompt("Enter room name")
     if(roomName){
         //do the DB  stuffs
         db.collection("rooms").add({
             name:roomName
         })
     }
     console.log(roomName)
    }

     return !addNewChat ?(
         <Link to={`/rooms/${id}`}>
             <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
         </Link>
        
    ):(
        <div onClick={createChat} className="sidebarChat">
             <h2 >AddNewChat</h2>

        </div>
    )
}

export default SidebarChat