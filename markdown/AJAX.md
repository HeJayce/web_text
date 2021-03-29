# AJAX

## 简介

异步的JS和XML

优势是无刷新获取数据

ajax不是编程语言



## XML

可扩展标记语言

xml被用来传输和存储数据

xml与html类似，但标签都是自定义

```xml
<student>
    <name>孙悟空</name>
    <age>18</age>
    <gender>男</gender>
</student>
```



## 优点

* 可以无需刷新页面而与服务器瑞进行通信

* 允许你根据用户事件来更新部分页面内容



## 缺点

* 没有浏览历史，不能回退
* 存在跨域问题
* 对SEO（搜索引擎）不友好



## HTTP

### 请求报文

**行**		请求类型get、post等 / url路径（s?id=utf-8）/http版本（1。0，1.1，2.0）

**头**					Host: baidu.com

​						Cookie: name=jayce

（请求体类型）Content-type: application/x-www-form-urlencoded

​						User_Agent: chrome83

格式：名字+冒号+空格+值



**空行** 	固定的必须有

**体**   	可以有也可没有

​			get请求为空

​			post请求可以不为空

​		username=admin&password=admin



### 响应报文

**行**	 HTTP/1.1	200	OK   （http版本号、状态码、状态字符串）

**头**		Content-type: text/html;charset=utf-8

​			Content-length: 2048

​			Content-encoding: gzip

​			对报文体的描述

**空行**		必须有

**体**			主要返回结果

​				html内容



## Express

```js
//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/',(request,response)=>{
    response.send('hello express');
});
// '/'是目录，'/server' 表示127.0.0.1:8000/server

//4.监听端口启动服务
app.listen(8000, ()=>{
    console.log("start");
})
```



## AJAX请求

在事件中：

1. 创建对象

    ```js
    const xhr = new XMLHttpRequest();
    ```



2. 初始化

    设置请求方法和url

    ```js
    xhr.open('GET','http://127.0.0.1:8000/server');
    ```

3. 发送

    ```js
    xhr.send();
    ```

4. 事件绑定

    处理服务端返回的结果

    * on.   当。。。的时候

    * readystate 是**xhr**对象的属性 ，表示状态0，1，2，3，4

        `0`未初始化

        `1`open方法调用完毕

        `2`send方法调用完毕

        `3`表示服务端返回的结果

        `4`表示服务端返回了所有结果

    * change  改变时触发

    **函数执行判断，看是否返回了所有结果**

    **接着执行判断状态码**

```js
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
	//判断响应状态 200 404 403 401 500
	//2xx 成功
		if(xhr.status >= 200 && xhr.status <=300)
		{//处理结果
		
		}
    else
    {
      
    }
	}
}
```



## AJAX post请求

与get类似

```js
 const result = document.getElementById("result");
    result.addEventListener("mouseover", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:8000/server");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4){
                if (xhr.status >= 200 && xhr.status<=300){
                   result.innerHTML = xhr.response;}
                else{}
            }
        }
    })
```

但服务端需要添加post，并重新启动



## AJAX请求参数

### get

在url后面加

格式：

?a=100&b=200

### post

在send中添加

```js
xhr.send('a=100&b=200')
```



## AJAX设置请求头信息

在open后加

```js
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
```



## AJAx响应JSON请求

在服务端将对象转化为JSON

```js
let str = JSON.stringify(data)
```



前端：

自动转换：

```
xhr.responseType = 'json'
```



## AJAX IE缓存问题

在url处进行更改

```js
xhr.open("POST", 'http://127.0.0.1:8000/ie?t='+Date.now());
```



## AJAX超时提醒

在服务端设置定时器

在前端设置2s，2s内无反应提示超时：

无网络显示异常

```js
xhr.timeout = 2000;
xhr.ontimeout = ()=>{
	alert("请求超时")
}
xhr.onerror = ()=>{
	alert("网络异常")
}
```



## 取消请求

使用AJAX的`abort`



## 解决请求重复发送

多次相同的请求会增加服务器压力

思路：

设置一个标识符issending为false表示没有正在发送

当点击发送请求后，首先判断issending，如果正在发送中，则取消请求

如果没有，进行发送，并将issending设置为true

最后判断服务端返回结果，如果为4，则发送成功，

将issending再设置为false



## axios

vue和react推荐的AJAX请求包





