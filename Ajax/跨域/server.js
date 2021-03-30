const express = new require('express')

const app = express();

app.get('/home' , (request , response)=>{
    response.sendFile(__dirname + '/index.html')
});
app.get('/data' , (request , response)=>{
    response.send('Jayce')
});

app.listen(9000, ()=>{
    console.log("start");
})
