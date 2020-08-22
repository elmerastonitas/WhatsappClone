import React from 'react';
//import {Avatar} from "@material-ui/core";
import './Sidebar.css';
/*import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";*/

//Instalar dependencia npm i @material-ui/core
//Instalar dependencia npm i @material-ui/icons

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                {/*<Avatar/>*/}
                <div className="sidebar__headerRight">
                    {/*
                        <IconButton>
                            <DonutLargeIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>   
                    */}
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    {/*
                        <SearchOutlined/>
                        <input placeholder="Search or start new chat"
                                type="text"/>
                    */}
                    <input placeholder="Search or start new chat"
                           type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
