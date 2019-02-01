import React, { Component } from 'react';
import {Input,message} from 'antd';
import '../assets/css/Chat.css';
import * as signalR from '@aspnet/signalr'

interface IChatPorps{
}

interface IChatState{
    msg:string,
    inputValue:string
}

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:4000/chathub")
  .build();

export default class Chat extends Component<IChatPorps,IChatState> {

    static defaultProps:IChatPorps;

    state={
        msg:"",
        inputValue:""
    }

    constructor(porps:IChatPorps){
        super(porps);
        connection.start().catch(err => {
            console.log(err);
        });
        //要求服务端调用的方法
        connection.on("putMessage", (username,msg) => {
            this.setState({msg:(this.state.msg+username+":\n"+msg+"\n\n")});
        });
    }

    sendMessage=(value:string)=>{
        connection.send("SendMessage",value);
        this.setState({inputValue:""});
    }

    render() {
        return (
        <div className="chat-container">
            <div>
                <h1>普通聊天室</h1>
                <Input.TextArea value={this.state.msg} autosize={{minRows: 10, maxRows: 10}} />
                <Input.Search
                    placeholder="输入发送的内容:"
                    enterButton="发送"
                    size="large"
                    value={this.state.inputValue}
                    onChange={(e)=>this.setState({inputValue:e.target.value})}
                    onSearch={this.sendMessage}
                />
            </div>
        </div>
        )
    }
}

Chat.defaultProps={
}
