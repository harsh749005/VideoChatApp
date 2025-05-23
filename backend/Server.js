 const express = require("express");
 const {Server} = require('socket.io');
 const bodyParser = require('body-parser');

 const io = new Server();
 const app = express();

 app.use(bodyParser.json());

 io.on("connection",(socket)=>{});
 
 const PORT = 3000;

 app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
 })
 io.listen(PORT);