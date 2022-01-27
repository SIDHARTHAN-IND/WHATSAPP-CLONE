import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import db from "./firebase"
import {Avatar} from "@material-ui/core"
import {Link} from "react-router-dom";
function SidebarChat({id,name,addNewChat}) {
    const[seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Plz enter the name for chat");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <Link to ={`/rooms/${id}`}>
            <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>last message ...</p>
            </div>
        </div>
        </Link>
        
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
