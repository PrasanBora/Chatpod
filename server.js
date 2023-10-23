const express = require('express');
 const app =express()
 const http =require('http').createServer(app)

 const PORT =process.env.PORT || 300

 http.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
 })

 app.use(express.static(__dirname+'/public'))

 app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
   // res.sendFile('Hello World')

 })

 //socket
  
const io = require('socket.io')(http)

io.on('connection', (socket) => 
{
    console.log('Connected...') 
    
    socket.on('message', (msg) => 
    {
      console.log(msg)
         socket.broadcast.emit('message', msg)
    })

})
