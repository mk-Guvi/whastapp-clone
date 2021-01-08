import {useParams} from "react-router-dom"
import React,{useEffect,useState} from 'react'
import "./Chat.css"
import {SearchOutlined,MoreVert,AttachFile} from "@material-ui/icons"
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import {Avatar,IconButton} from "@material-ui/core";
import db from "./firebase"
import {useStateValue} from "./StateProvider"
import firebase from "firebase"//importing from actual firebase to acces the server time

function Chat() {
    const [seed,setSeed]=useState("")
    const {roomId}=useParams()//refers the roomid from the url
    const  [roomName,setRoomName]=useState("")
   const [input,setInput]=useState("")
   const [messages,setMessages]=useState([])
    const [{user},dispatch]=useStateValue()
   useEffect(()=>{
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot=>//n rooms collection,using thr roomid of url getting the name of roomid using snapshot
               setRoomName(snapshot.data().name))  
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(doc=>doc.data()))
            ))
                
       }
   },[roomId])//the dependency is roomid obtained from the url

    useEffect(() => {//it renders when a component loads
        setSeed(Math.floor(Math.random()*5000))
        }, [roomId])
    
        
    const sendMessage=(e)=>{
            e.preventDefault()
            console.log("you typed =>",input)
            db.collection('rooms').doc(roomId).collection('messages').add({
                message:input,
                name:user.displayName,//this name comes from google user
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),//this will get the time based on  our location
            })
            setInput("")
    }
    return (
        <div className="chat">
             <div className="chat__header">
             <Avatar src={`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`}/>
             <div className="chat__headerInfo">
                 <h3>{roomName}</h3>{/**getting the room name from the DB */}
                 <p>Last Seen{"  "}
                 {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>{/**displayes the last seen of last message sent */}
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
                 {messages.map(message=>(//changing from ture to message.name===user.dispayName to make the green side as the  sender and white color for recived message
                        <p className={`chat__message ${message.name!==user.dispayName &&"chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>  
                            {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}       
                            </span>
                    </p>
                 ))}
                
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
