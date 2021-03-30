//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.all('/server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const data = {
        name:'jayce'
    }
    var str = JSON.stringify(data)
    response.send(str);
});

app.all('/axios-server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {name:'Jayce'}
    response.send('Hello axios');
});
app.all('/fetch-server',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    const data = {name:'Jayce'}
    response.send('Hello fetch');
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
app.get('/check-user',(request,response)=>{
   const data = {
       exist:1,
       msg: '用户名已经存在'
   };
   let str = JSON.stringify(data)
    response.end(`handle(${str})`);
});

app.all('/car-list',(request,response)=>{
    //设置响应头；设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const data = [
        {id: 1, name: "BMW", ctime: "Tue Mar 30 2021 22:20:38 GMT+0800 (中国标准时间)"},
        {id: 2, name: "奥迪", ctime: "Tue Mar 30 2021 22:20:38 GMT+0800 (中国标准时间)"},
        {id: 3, name: "法拉利", ctime: "Tue Mar 30 2021 22:20:38 GMT+0800 (中国标准时间)"},
        {id: 4, name: "奥迪", ctime: "Tue Mar 30 2021 22:20:38 GMT+0800 (中国标准时间)"},
    ]
    let str = JSON.stringify(data)
    response.send(data);
});
app.listen(8000, ()=>{
    console.log("start");
})