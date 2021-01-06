import {useParams} from "react-router-dom"
import React,{useEffect,useState} from 'react'
import "./Chat.css"
import {SearchOutlined,MoreVert,AttachFile} from "@material-ui/icons"
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import {Avatar,IconButton} from "@material-ui/core";
import db from "./firebase"

function Chat() {
    const [seed,setSeed]=useState("")
    const {roomId}=useParams()//refers the roomid from the url
    const  [roomName,setRoomName]=useState("")
   const [input,setInput]=useState("")

   useEffect(()=>{
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(//n rooms collection,using thr roomid of url getting the name of roomid using snapshot
               setRoomName(snapshot.data().name)
           ))
       }
   },[roomId])//the dependency is roomid obtained from the url

    useEffect(() => {//it renders when a component loads
        setSeed(Math.floor(Math.random()*5000))
        }, [])
    
        
    const sendMessage=(e)=>{
            e.preventDefault()
            console.log("you typed =>",input)
            setInput("")
    }
    return (
        <div className="chat">
             <div className="chat__header">
             <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
             <div className="chat__headerInfo">
                 <h3>RoomName:{roomName}</h3>{/**getting the room name from the DB */}
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
                <p className={`chat__message ${true&&"chat__reciever"}`}>
                    <span className="chat__name">MK</span>
                        hello message
                    <span className="chat__timestamp">2:20PM</span>
                </p>
            </div> 

             <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
             </div>
        </div>
    )
}

export default Chat
