//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('Hello Ajax');
});
app.all('/server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    response.send('Hello Ajax post');
});
app.all('/axios-server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const data = {name:'Jayce'}
    response.send('Hello Ajax post');
});
app.all('/json-server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const data = {
        name: 'Jayce',
        age:22
    }
    let str = JSON.stringify(data)
    response.send(str);
});

app.get('/delay',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
    //设置响应体
});

app.listen(8000, ()=>{
    console.log("start");
})