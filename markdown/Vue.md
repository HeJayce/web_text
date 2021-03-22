# Vue.js

## 简介

渐进式Js框架

### react





## 特点

1. 遵循MVVM模式
2. 代码简洁，体积小，效率高
3. 可引入插件和第三方库



## 创建Vue项目

1. 引入Vue.js

2. new一个Vue对象

    ```js
    const vm = new Vue({  //配置对象
    	el:'#app',  //element :选择器
      data:{    //数据（model）
      	message : 'Vue'
            },
      methods:{
      
    }
    })
    ```

    el：指定根element（选择器），这个new的Vue要控制的区域

    data：数据，

    在vm内部想互相访问属性，需要用this

3. 显示数据：`{{xxx}}`

    其中插值表达式还可以写为

    ```html
    <p v-text="message"></p>
    ```

    

4. 理解vue的mvvm实现

    1. id为app的div就是V，view

    2. new出来的vm对象，就是MVVM的vm调度者

    3. data就是M，model

        

导入包的时候，浏览器的内存中，就多了一个Vue构造函数



## v-cloak

可以解决插值表达式闪烁问题



## v-text

不用解决闪烁问题，但是不能随意加固定文字

例如：

```html
<p v-text="msg"></p>
```

会覆盖原本的内容

而插值表达式不会

v-text和插值表达式都不能插入html代码



## v-html

可插入html代码



## v-bind

vue中提供绑定属性的指令（单向绑定）

```html
<input type="button" v-bind:value="msg" >
<input type="button" v-bind:value="msg + 'vue'" >
```



简写：

不写v-bind，只写冒号

```html
<input type="button" :value="msg + 'vue'" >
```



## methods属性

methods属性中定义vue实例所有可用的方法

```js
const vm = new Vue({  //配置对象
	el:'#app',  //element :选择器
  data:{    //数据（model）
  	message : 'Vue'
        },
  methods:{
    show:function(){
      alert("hello vue")
    }
  }
})
```



## v-on绑定事件

例：

```html
<input type="button" :value="msg"  v-on:click="show">
```

简写为@click

其他事件：

click：点击

mouseover：鼠标覆盖



## 事件修饰符

### 阻止冒泡`.stop`

防止子元素触发父元素的事件

给子元素设置`@click.stop`

### 阻止默认行为`.prevent`

比如超链接跳转

### 捕获触发`.capture`

从外往里执行，给父元素添加	`capture`

### 元素本身触发时触发回调`.self`

给父元素添加`.self`，防止被冒泡

**注意**：

self只是被设定的那个不会被冒泡，如果有祖先元素，还是会冒泡

### 只触发一次`.once`

事件只执行一次

```html
<a href="http://www.baidu.com" @click.prevent.once="linkClick">有问题,先去百度</a>
```

例子只阻止一次



## v-model

双向数据绑定

可实现表单元素和Model的双向数据绑定

仅用于表单



## 绑定class类

```html
<p v-bind:class="['box1']"> 我是p </p>
```

需要使用v-bind做数据绑定

类名需要加引号

不写引号是变量

### 高级用法：

```html
<p v-bind:class="['box1',flag?'red':'']"> 我是p </p>
```

若flag为true执行red class ,false 执行空

flag存放在data

但写三元表达式可读性差。

另一种写法：对象形式

```html
<p v-bind:class=" [ 'box1' , { 'red' : flag } ] "> 我是p </p>
```



## 绑定style行内样式

```html
<h1 :style="{color:'red',fontSize:'222px'}">i am h1</h1>
<h1 :style="[blue]">i am h1</h1>
```



## v-for

语法：

`v-for="item in items"`

### 循环普通数组

```js
list:[0,1,2,3,4]
```

```html
<p v-for="(item,i) in list">第{{i+1}}个是{{item}}</p>
```



### 循环对象数组

```js
objArr:[
	{id: 1, name:'jayce'},
	{id: 2, name:'tony'}
]
```

```html
<p v-for="user in objArr">{{user.id}}----{{user.name}}</p>
```



### 循环对象
```js
obj:{
  id:1,
  name:"jayce",
  gender:'男'
}
```

```html
<p v-for="(val , key) in obj">{{val}}----{{key}}</p>
```



### 迭代数字

```html
<p v-for="count in 10">.</p>
```



v-for在组件中使用时，key是必须的

例如：

```html
<p v-for="item in list" :key="item.id">
	<input type="checkbox">{{item.id}}---{{item.name}}
</p>
```

注意: v-for 循环的时候，key 属性只能使用number获取string

注意: key 在使用的时候，必须使用v-bind 属性绑定的形式，指定key 的值

在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果v-for 有问题，必须在使用v-for 的同时，指定唯一的字符串/数字类型:key值



## v-if和v-show

### v-if

每次都会重新删除和重新创建，切换性能消耗严重，频繁切换不建议

### v-show

每次设置display的属性值，初始渲染消耗大

asd



## 过滤器

用于常见文本格式化

可以用在两个地方：

1. mustache插值
2. v-bind表达式

**过滤器调用格式**

```js
Vue.filter('msgFormat',function (msg , arg) {
        return  msg.replace(/傻逼/g , arg);
    })
```

过滤器的函数中第一个参数已经被固定死了，永远都是过滤器管道符前面传递过来的数值.

第二个参数（arg）之后可以自定义参数。

调用：

```html
{{msg | msgFormat('**')}}
```

调用可以添加多个过滤器