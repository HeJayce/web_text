# JavaScript

## 外部引入

```html
<script src="">

</script>
```

script标签一旦引入外部文件，就不能在编写代码

内部代码需要重新创建新的script标签

## 基本语法

1.JS中严格区分大小写

2.JS中每一条语句以分号(;)结尾 

如果不写分号，浏览器会自动添加，但是会消耗- -些系统资源，而且有些时候，浏览器会加错分号，所以在开发中分号必须写

3.JS中会忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化

## 与html

### 直接写入输出流

```js
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```

您只能在 HTML 输出中使用 document.write。如果您在文档加载后使用该方法，会覆盖整个文档。



### 对事件的反应

弹出提示

```js
<button type="button" onclick="alert('欢迎!')">点我!</button>
```

alert()函数在js中并不常用，一般用于测试代码



### 改变html内容

```js
<p id="demo">
JavaScript 能改变 HTML 元素的内容。
</p>

x=document.getElementById("demo");  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
```



### 改变 HTML 图像

例：使电灯泡点击切换

```html
<script>
	function changeImage(){
		img=document.getElementById("light")
		if(img.src.match("bulbon"))   
		{
			img.src="media/pic_bulboff.gif";
		}
		else
		{ 
			img.src="media/pic_bulbon.gif";
		}
	}
</script>

<img id="light" src="media/pic_bulboff.gif" alt="error" width="100" height="180" onclick="changeImage()">
```

` **element.src.match("bulbon")** `*的作用意思是：检索* `<img id="light" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">` *里面 src 属性的值有没有包含* **bulbon** *这个字符串，如果存在字符串* **bulbon***，图片* **src** *更新为* **bulboff.gif***，若匹配不到* **bulbon** *字符串，***src** *则更新为* **bulbon.gif**



### 改变HTML样式

```js
x=document.getElementById("demo")  //找到元素 
x.style.color="#ff0000";           //改变样式
```



### 验证输入

```js
function myFunction()
{
	var x=document.getElementById("demo").value;
	if(x==""||isNaN(x))
	{
		alert("不是数字");
	}
}
```

如果要在生产环境中使用，需要严格判断，如果输入的空格，或者连续空格 isNaN 是判别不出来的。

可以添加正则来判断(后续章节会说明)：

```js
if(isNaN(x)||x.replace(/(^\s*)|(\s*$)/g,"")=="")
{
		alert("不是数字");
}
```



### 输出

#### 1.JavaScript 可以通过不同的方式来输出数据：

- 使用 **window.alert()** 弹出警告框。
- 使用 **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。



#### 2.操作HTML元素

如需从 JavaScript 访问某个 HTML 元素，您可以使用 document.getElementById(*id*) 方法

使用id属性来标记html元素

innerHTML =“·······”；来获取或插入元素内容



#### 3.写到html文档

```js
document.write(Date());
```

**注意：document.write()仅仅向文档输出写内容，如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。**



#### 4.写到控制台

```
console.log();
```

即可在控制台看到输出内容



## 语法

### 1.字面量

#### 1.数字/字符串

字符串也可以是对象：

```js
var x = "jayce";
var y = new String ("jayce")
```

其中x是字符串

y是对象

`(x === y) // 结果为 false`



可使用单引号和双引号

用`''`或`""`表示

如果`'`本身也是一个字符，那就可以用`""`括起来

如果字符串内部既包含`'`又包含`"`，使用转义字符`\`来表示

在`'`前面加上\，即可将其显示

\后还可以使用Unicode编码

##### 多行字符串

使用`\n`比较费事，使用` `` `来包含。

##### 模板字符串

把多个字符串连接起来使用`+`

也可以使用`${变量名}`来代替

##### 操作字符串

1.取长度

```js
var s = 'Hello, world!';
s.length; // 13
```

获取字符串指定位置的字符

```
var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined
```

 **超出范围的索引不会报错，但一律返回undefined**



**特别注意：**

字符串是不可变的，如果对字符串的某个索引赋值，不会有错，但也没用



##### 特别方法：

###### toUpperCase

`toUpperCase()`把一个字符串全部变为大写：

```js
var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'
```

###### toLowerCase

`toLowerCase()`把一个字符串全部变为小写：

```js
var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'
```

###### indexOf

`indexOf()`会搜索指定字符串出现的位置：

```js
var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
```

###### lastIndexOf

`lastIndexOf`会反向搜索

###### substring

`substring()`返回指定索引区间的子串：

```js
var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5(不包括5)，返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
```



#### 2.数组(array)

[40, 100, 1, 5, 25, 10]

数组是一种特殊的对象格式，所以`typeof [1,2,3,4] 返回 object`

array可以包含任意数据类型，并通过索引来访问每个元素

要取得`Array`的长度，直接访问`length`属性：

```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
```

但如果给`length`赋一个新的值会导致`array`大小发生变化

若大于之前的值，则多余的为`undefined`

若小于之前的值，则按顺序取，其余丢弃

若使用索引给数组赋值，索引超出了范围，则自动改变大小，没有值的`undefined`

##### 特别方法：

###### indexOf

与字符串相同用法，搜索指定元素的位置

```js
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
```

###### slice

截取`Array`的部分元素

```js
var arr = ['A','B','C','D','E','F','G'];
arr.slice(0, 3); // 从0开始，3结束，但不包括索引3: ['A','B','C']
arr.slice(3); // 从3开始到结束: ['D','E','F','G']
```

若不传递任何参数，则全部截取，可用作复制操作

###### push和pop

`push()`向`Array`的末尾添加若干元素；

`pop()`则把`Array`的最后一个元素删除掉；

```
var arr = [1, 2];
arr.push('A','B');  //返回Array新的长度:4
arr;     // [1,2,'A','B']
arr.pop(); // pop()返回'B'
arr; // [1,2,'A']
arr.pop(); arr.pop(); arr.pop(); //连续pop 3次
arr; //[]
arr.pop(); 
arr; //[]
```

空数组继续pop不会报错，而是返回undefined

###### unshift和shift

与push和pop相反的是unshift和shift

unshift向数组的头部添加元素

shift则把数组的第一个元素删掉

```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]

arr.shift(); //删除'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
```

###### sort

`sort()`可以对当前`Array`进行排序，它会直接修改当前`Array`的元素位置

```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; //['A', 'B', 'C']
```

###### reverse

`reverse()`把整个`Array`的元素给调个个，也就是反转

```js
var arr = ['one', 'two', 'three'];
arr.reverse(); 
arr; // ['three', 'two', 'one']
```

###### splice

`splice()`方法是修改`Array`的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

```js
var arr = ['Microsoft','Apple','Yahoo','AOL','Excite','Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2,3,'Google','Facebook'); //返回删除的元素 ['Yahoo','AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

###### concat

`concat()`方法把当前的`Array`和另一个`Array`连接起来，并返回一个新的`Array`：

```js
var arr = ['A','B','C'];
var added = arr.concat([1, 2, 3]);
added; //['A','B','C',1,2,3]
arr; //['A','B','C']
```

*请注意*，`concat()`方法并没有修改当前`Array`，而是返回了一个新的`Array`。

实际上，`concat()`方法可以接收任意个元素和`Array`，并且自动把`Array`拆开，然后全部添加到新的`Array`里：

```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```

###### join

`join()`合并数组。

它把当前`Array`的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```







#### 3.对象(object)

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
```

1. 每一条键值对用`,`隔开。

2. 最后一对不需要加`,`

3. 访问属性使用`.`操作。

4. 当属性名有特殊符号时，需要使用`"..."`
```js
var xiaohong = {
	name: '小红',
    'middle-school': 'No.1 Middle School'
};
```

并且访问的时候，只能使用`xiaohong['middle-school'];`

当访问一个不存在的属性不会报错，而是会返回`undefined`

##### 添加和删除

添加：直接赋值

删除：使用delete

##### 查找

判断是否拥有某一属性：用`in`操作符

```js
'name' in xiaoming; // true
'grade' in xiaoming; // false
```

但如果存在，也有可能是继承得到的

### 2.变量

使用var来定义变量

```js
var x, length
x = 5
length = 6
```

变量是一个可变的，而字面量是一个恒定的

变量类型：

1. 数字

2. 字符串

3. 数组

4. 对象

   对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义

   由`,`来分割

   对象有两种寻址方式：

   ```js
   name=person.lastname;
   name=person["lastname"];
   ```

   ### Undefined 和 Null

   Undefined 这个值表示变量不含有值。

   可以通过将变量的值设置为 null 来清空变量
   
   声明新的变量可使用关键词`new`

```js
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```
- 变量必须以字母开头

- 变量也能以 $ 和 _ 符号开头(不过我们不推荐这么做)

- 变量名称对大小写敏感(y 和 Y 是不同的变量)

用 `var` 操作符定义的变量将成为定义该变量的作用域中的局部变量。也就是说，如果在函数中使用 `var` 定义一个变量，那么这个变量在函数退出后就会被销毁

### 等于号

`=`表示赋值

`==`自动转换数据类型比较

`===`不转换数据类型比较

**不要使用==，要始终使用===比较**

#### 关于NaN

`NaN`这个特殊的Number与所有其他值都不相等，包括它自己

唯一能判断`NaN`的方法是通过`isNaN()`函数：

```js
isNaN(NaN);    //true
```

### 关于浮点数

```js
1 / 3 === (1 - 2 / 3); // false
```

浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。

要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

```js
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001;          // true
```

## 语句

JS向浏览器发出命令语句用`；`来分割

### 1.js关键字

var：创建新的变量

### 2.分号的用法

分号用于分隔 JavaScript 语句。

通常我们在每条可执行的语句结尾添加分号。

使用分号的另一用处是在一行中编写多条语句。

**在 JavaScript 中，用分号来结束语句是可选的**



### 3.折行

在文本字符串中使用反斜杠代码进行换行。

```js
document.write("你好 \
世界!");
```

### 4.注释

单行注释使用`//`

多行注释使用`/*.........*/`

同c语言

**ps**：验证浏览器是否支持JS

```js
<script>
<!--
document.write("您的浏览器支持JavaScript脚本!");
//-->
</script>
```



### use strict模式(严格模式)

在strict模式下运行的JavaScript代码，强制通过`var`申明变量，未使用`var`申明变量就使用的，将导致运行错误。

启用strict模式的方法是在JavaScript代码的第一行写上：

```js
'use strict';
```

严格模式的限制：

1. 不允许使用未声明的变量
2. 不允许删除变量和对象
3. 不允许删除函数
4. 不允许变量重名
5. 不允许使用八进制
6. 不允许使用转义字符
7. 不允许对只读属性赋值
8. 不允许对一个使用getter方法读取的属性进行赋值
9. 不允许删除一个不允许删除的属性
10. 变量名不能使用eval
11. 变量名不能使用arguments
12. 作用域 eval() 创建的变量不能被调用
13. 禁止this关键字指向全局对象

### 函数

变量和参数必须以一致的顺序出现。第一个变量就是第一个被传递的参数的给定的值，以此类推。

#### 带有返回值的参数

通过return将值返回调用的地方

#### 局部JavaScript变量

函数内部使用`var`定义的变量是局部变量，只能在函数内部使用。

可以在不同的函数中使用相同的变量名

#### 全局JS变量

在函数外申明的变量是全局变量。

在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象

#### JavaScript 变量的生存期

JavaScript 变量的生命期从它们被声明的时间开始。

局部变量会在函数运行以后被删除。

全局变量会在页面关闭后被删除。

#### 未声明的JS变量分配值

如果把值赋给未声明的变量，该变量将被自动作为 window 的一个属性

非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除



#### 自调用函数

函数自己调用自己；

函数没有名字，函数体在()内

结尾紧跟()；

```js
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```

#### 箭头函数

```js
// ES5
var x = function(x, y) {
     return x * y;
}
 
// ES6
const x = (x, y) => x * y;
```

ES6新增了箭头函数，更加简介



#### 默认参数

ES6新增了默认参数

```js
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
 
myFunction(0, 2) // 输出 2
myFunction(5); // 输出 15, y 参数的默认值
```













### 事件

##### html事件

- HTML 页面完成加载
- HTML input 字段改变时
- HTML 按钮被点击

| 事件        | 描述                         |
| :---------- | :--------------------------- |
| onchange    | HTML 元素改变                |
| onclick     | 用户点击 HTML 元素           |
| onmouseover | 用户在一个HTML元素上移动鼠标 |
| onmouseout  | 用户从一个HTML元素上移开鼠标 |
| onkeydown   | 用户按下键盘按键             |
| onload      | 浏览器已完成页面的加载       |



### JS类型转换

在 JavaScript 中有 6 种不同的数据类型：

- string 
- number
- boolean
- object
- function
- symbol

3 种对象类型：

- Object
- Date
- Array

2 个不包含任何值的数据类型：

- null
- undefined

**使用Number() 转换为数字， String() 转换为字符串， Boolean() 转换为布尔值**

```js
typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object
```

##### 自动转换类型

```js
5 + null    // 返回 5         null 转换为 0
"5" + null  // 返回"5null"   null 转换为 "null"
"5" + 1     // 返回 "51"      1 转换为 "1" 
"5" - 1     // 返回 4         "5" 转换为 5
```

##### 自动转换字符串

```js
document.getElementById("demo").innerHTML = myVar;

myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"
```





## 正则表达式

### search()

search()使用方法

检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置

1. `var n = str.search(/Runoob/i);`
2. `var n = str.search("Runoob");`



## JS错误-throw、try 和 catch

**try** 语句测试代码块的错误。

**catch** 语句处理错误。

**throw** 语句创建自定义错误。

**finally** 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。



#### throw：

当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。

描述这种情况的技术术语是：JavaScript 将**抛出**一个错误。

throw 语句允许我们创建自定义错误。

正确的技术术语是：创建或**抛出异常**(exception)。

如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。



#### try和catch

**try** 语句允许我们定义在执行时进行错误测试的代码块。

**catch** 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

```js
var txt=""; 
function message() 
{ 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
}
```



## JS使用常见错误

#### 赋值运算符应用错误

```js
var x = 0;
if (x == 10)
```

#### 比较运算符常见错误

```js
var x = 10;
var y = "10";
if (x == y)   //true
if (x === y)  //false	
```

#### 加法与连接注意事项

```js
var x = 10 + 5;          // x 的结果为 15
var x = 10 + "5";        // x 的结果为 "105"
```

#### 浮点数据使用注意事项

```js
var x = 0.1;
var y = 0.2;
var z = x + y            // z 的结果为 0.30000000000000004
if (z == 0.3)            // 返回 false
```

解决方用整数的乘除法来解决



#### 字符串分行

错误示范：

```js
var x = "Hello
World!";
```

####  return不可换行



## JS表单验证

### 验证数字：

```js
<input id="numb">
<button type="button" onclick="myFunction()">提交</button>
<script>
function myFunction() {
    var x, text;
    // 获取 id="numb" 的值
    x = document.getElementById("numb").value;
    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>
```

### 必填验证

```js
var x=document.forms["myForm"]["fname"].value;
if (x==null || x==""){
  alert("姓必须填写");
  return false;
  }
```

### Email验证

数据必须包含 @ 符号和点号(.)。同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号

```js
var x=document.forms["myForm"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
```



## JS验证API

### 约束验证 DOM 方法

1.checkValidity

如果input的元素合法，返回true

会检查元素是否有任何输入约束条件，并且检查值是否符合约束条件。 如果值是不符合约束条件的，浏览器就会在该元素上触发一个可以撤销的 invalid 事件

2.validationMessage	

浏览器错误提示信息

3.setCustomValidity()

设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法







## JS关键字this

this表示当前对象的一个引用

会随着执行环境的改变而改变

举例：

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

如果不加this，访问不到fullname

this就表示person对象

### 单独使用this

指向全局对象

window就是该全局对象[object window]

```
var x = this;
document.getElementById("demo").innerHTML = x;
```

### 函数中使用this

#### **在非严格模式下**

函数的所有者默认绑定到this上

浏览器中，window就是该全局对象为[object Window]

#### 严格模式下

函数是没有绑定到this上的

这时this就是`undefined`

###  事件中的this

在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素

```js
<button onclick="this.style.display='none'">
点我后我就消失了
</button>
```



### 对象方法中绑定

例题代码：

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

在fullname中，this指向了fullname的所有者，也就是person

如果不加this或者person，fullname是访问不到person 中的其他键值对



### 显式函数绑定

JS的函数也是对象，是对象就有方法

`apply`和`call`就是函数对象的方法

他们允许切换函数执行的上下文环境(context)，即 this 绑定的对象。

例题代码展示了使用 person2 作为参数来调用 person1

```js
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
var x = person1.fullName.call(person2);
```



## let和const

### let

使用 let 关键字来实现块级作用域

例如：

```js
{ 
    var x = 2; 
}
// 这里可以使用 x 变量
{ 
    let x = 2;
}
// 这里不能使用 x 变量
```

#### 重新定义变量

```js
var x = 10;
// 这里输出 x 为 10
{ 
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10
```

 let 命令所在的代码块 **{}** 内有效

 **var** 关键字，它声明的变量是全局的，包括循环体内与循环体外

 **let** 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响

**但是**：

使用 **var** 关键字声明的全局作用域变量属于 window 对象:

可以使用 window.Name 访问变量

使用 **let** 关键字声明的全局作用域变量不属于 window 对象:

不能使用 window.Name 访问变量



#### 重置变量

只有var能重置var定义的变量

除此之外let和var任意组合都不合法



#### 变量提升

var 定义的变量可以在使用后定义

但let不可以

### const

const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改：

`const`声明的常量必须初始化，而`let`声明的变量不用

const 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改

但const不是严格意义上的常量

只是不可以重新赋值而已

例如：(不报错)

```js
const car = {type:"Fiat", model:"500", color:"white"};
// 修改属性:
car.color = "red";
// 添加属性
car.owner = "Johnson";
```



但重新赋值就会报错

```js
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // 错误
```

- 不能使用 **const** 关键字来重置 **var** 和 **let**关键字声明的变量
- 在相同的作用域或块级作用域中，不能使用 **const** 关键字来重置 **const** 关键字声明的变量
- **const** 关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的





## JSON

JSON是一种轻量级的数据交换格式

JSON是种独立的语言



## void

void()仅仅是代表不返回任何值

该操作符指定要计算一个表达式但是不返回值



## 异步编程

### setTimeout

设置事件等待时间

(函数，时间)

### Promise

```js
new Promise(function (resolve, reject) {
    // 要做的事情...
});
```

其中调用 resolve 代表一切正常，reject 是出现异常时所调用的

Promise 类有三个方法

-  .then()     将参数中的函数添加到当前 Promise 的正常执行序列

- .catch()     设定 Promise 的异常处理序列

- .finally()    在 Promise 执行的最后一定会执行的序列



catch 块只会执行第一个，除非 catch 块里有异常。所以最好只安排一个 catch 和 finally 块

 当你又需要调用一个异步任务的时候，就再写一个then





## DOM

### 查找HTML

1. 通过id查找html元素   **getElementById("")**

   本例查找 id="intro" 元素：

   ```js
   var x=document.getElementById("intro");
   ```

   

2. 通过签名查找  **getElementsByTagName("");**

   本例查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素：

   ```js
   var x=document.getElementById("main");
   var y=x.getElementsByTagName("p");
   ```
   

   3.通过类名找到html元素

​	

### 事件

#### 鼠标事件

##### 悬浮/移开

onmouseover 和 onmouseout 事件

onmouseover :当鼠标悬浮在某一元素上，发生改变

onmouseout ：当鼠标从元素上移开即鼠没有在元素上时



##### 按住/松手

onmousedown 和onmouseup

onmousedown ：鼠标按下

onmouseup：鼠标松开



#### onchange 事件

当输入字段被改变的时候，触发该事件



