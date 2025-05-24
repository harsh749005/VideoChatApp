import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {io} from 'socket.io-client';
const socket = io('ws://localhost:8080');

const Home = () => {
const [input,setInput] = useState('');
const [messages,setMessages] = useState([]);

useEffect(()=>{
  socket.on('message',(text)=>{
  setMessages(prev => [...prev,text]);
  });
  return()=>{
    socket.off('message');
  }
},[])


const sendMessage = ()=>{
  if(input.trim() !== '') {

    socket.emit('message',input);
    setInput('');  
    console.log(input);
  }
}
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  return (
    <div className='flex flex-col gap-4 w-96 m-[auto] mt-12'>
      <h1 className='font-mono text-xl'>Chat App</h1>
      <ul>
        <li className='font-mono'>Messages</li>
        {
          messages.map((msg,index)=>(
            <li key={index}>{msg}</li>
          ))
        }
      </ul>
      <input type="text" 
      value={input}
      onKeyDown={handleKeyPress}
      onChange={(e)=>setInput(e.target.value)}
      className='border-2 border-gray-500 px-2 py-2 '
      />
      <button onClick={sendMessage} className='bg-amber-300 py-2 px-6 cursor-pointer font-mono'>
        Send
      </button>
    </div>
  )
}

export default Home
