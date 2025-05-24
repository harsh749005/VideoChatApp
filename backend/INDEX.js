//  const express = require("express");
//  const {Server} = require('socket.io');
//  const bodyParser = require('body-parser');

//  const io = new Server();
//  const app = express();

//  app.use(bodyParser.json());

// const emailToSocketMapping = new Map();

//  io.on("connection",(socket)=>{
//    socket.on('join-room',(data)=>{
//       const {roomId,emailId} = data;
//       emailToSocketMapping.set(emailId,socket.id);
//       socket.join(roomId);
//       socket.broadcast.to(roomId).emit('user-joined'),{emailId};
//    })
//  });
 
//  const PORT = 3000;

//  app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`)
//  })
//  io.listen(PORT);