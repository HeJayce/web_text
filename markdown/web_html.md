# web_html

html入门到放弃
### html基础
1.`<!DOCTYPE html>` 声明为 HTML5 文档  
2.`<body>`元素包含了可见的页面内容  
3.`<a href="default.html">`超链接，以`</a>`结束  

**自闭合标签有`<input/><img/><br/><link/><hr/>`等**



（1）行内元素有：a b span img input select strong 

 （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

 （3）常见的空元素：

 `<br>` `<hr>` `<img>` `<input> ` `<link>` `<meta>`

 鲜为人知的是：

 `<area>` `<base>`  `<col>` `<command>` `<embed>` `<keygen>` `<param>` `<source>` `<track>` `<wbr>`



不可继承的：display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi。

所有元素可继承：visibility和cursor。

内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction。

块状元素可继承：text-indent和text-align。

列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。

表格元素可继承：border-collapse。

##### 关于超链接：  

(2)`target=_blank`属性可以将链接从新的标签页打开. 
`<base> `标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接  
(3)ID 属性,`<a href="#tips">访问有用的提示部分</a>`.在要跳转的书签加上`<a id="tips">有用的提示部分</a>`,如果需要跳转其他的网页,#前加上链接.
(4)跳出框架target=_top
4.`<br>`换行 ,在开始标签中添加斜杠，比如 `<br/>`，是关闭空元素的正确方法,即使 `<br> `在所有浏览器中都是有效的，但使用 `<br/> `其实是更长远的保障，`<br/> `是 XHTML 为兼容 HTML 的写法,也是 XML 写法
br也可以作为段落之间拆行使用
5.`<hr>`元素可分隔内容（分割线）
6.浏览器会自动地在段落的前后添加空行  
7.当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。   

8.`<h1-6>`定义标题。

**注意：浏览器会自动在标题之前和之后添加一些空格（边距）**



##### 标题属性：

提供鼠标悬停后的提示，类似于缩写

```html
<p title="I'm a tooltip">
    Hover me to see a tooltip.
</p>
```

<p title="I'm a tooltip">
    Hover me to see a tooltip.
</p>
#### HTML文本格式化

##### 1.加粗

```html
<b>这个文本是加粗的</b><br>
<strong>这个文本是加粗的</strong>
```

##### 2.字体放大缩小

```html
<big>这个文本字体放大</big>
<small>这个文本是缩小的</small>
```

##### 3.斜体

```html
<em>这个文本是斜体的</em>
<i>这个文本是斜体的</i>
```

**em是强调文本，不算斜体**

##### 4.下标上标

```html
这个文本包含<sub>下标</sub>
这个文本包含<sup>上标</sup>
```

这个文本包含<sub>下标</sub>
这个文本包含<sup>上标</sup>

##### 5.块引用

自动添加双引号，且双引号不可被复制

```html
<p>WWF's goal is to: 
<q>Build a future where people live in harmony with nature.</q>
We hope they succeed.</p>
```

<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q>We hope they succeed.</p>

##### 6.删除线、下划线、高亮

```html
<p>My favorite color is <del>blue</del> <ins>red</ins>    
    <mark>highligth</mark>!</p>
```

<p>My favorite color is <del>blue</del> <ins>red</ins>  
    <mark>highligth</mark>!</p>

#### css使用方式

css使用方式有3种  
内联样式- 在HTML元素中使用"style" 属性  
内部样式表 -在HTML文档头部 `<head> `区域使用`<style>`元素 来包含CSS  
外部引用 - 使用外部 CSS 文件  
此部分使用内联css :

​		在标签页的后面加上style=即可改变该标签的样式

```html
<h1 style="font-family:verdana;">一个标题</h1>
<p style="font-family:arial;color:red;font-size:20px;">一个段落。</p>
```

当单个文件需要特别样式时，就可以使用内部样式表。写在head内，定义body，p等标签的全部样式

```html
<head>
<style type="text/css">			默认类型为text/css
body {background-color:yellow;}
p {color:blue;}
</style>
</head>
```

外部样式表：

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

##### 样式实例：

###### 背景颜色：

```html
<body style="background-color:yellow;">
<h2 style="background-color:red;">这是一个标题</h2>
<p style="background-color:green;">这是一个段落。</p>
</body>
```

###### 字体：

```html
<h1 style="font-family:verdana;">一个标题</h1>
<p style="font-family:arial;color:red;font-size:20px;">一个段落。</p>
```

###### 对齐：

```html
<h1 style="text-align:center;">居中对齐的标题</h1>
<p>这是一个段落。</p>
```

#### 图像：

```html
<img src="url" alt="some_text">
```

alt为预备替换文本，当图片加载不出或异常，则显示alt

##### 长宽：

width宽度

height高度

`style="float:left" `用来使得文字中的图片左右浮动

##### 设置图像映射

```html
<img src="url" width="145" height="126" alt="Planets" usemap="#planetmap">
<map name="planetmap">
	<area shape="rect" coords="x1,y1,x2,y2" href=url>
	<area shape="circle" coords="x1,y1,r" href=url>
	<area shape="poly" coords="x1,y1,x2,y2 ......" href=url>
</map>
```

1、矩形：(左上角顶点坐标为(x1,y1)，右下角顶点坐标为(x2,y2))

2、圆形：(圆心坐标为(X1,y1)，半径为r)  

3、多边形：(各顶点坐标依次为(x1,y1)、(x2,y2)、(x3,y3) ......)

##### 透明图像

```css
img {
  opacity: 0.5;
}
```

#### 表格

|    标签    |         描述         |
| :--------: | :------------------: |
|  <table>   |       定义表格       |
|    <th>    |    定义表格的表头    |
|    <tr>    |     定义表格的行     |
|    <td>    |     定义表格单元     |
| <caption>  |     定义表格标题     |
| <colgroup> |    定义表格列的组    |
|   <col>    | 定义用于表格列的属性 |
|  <thead>   |    定义表格的页眉    |
|  <tbody>   |    定义表格的主体    |
|  <tfoot>   |    定义表格的页脚    |

colspan="x"  列合并x

rowspan="x" 行合并

#### 列表

##### 无序表

`<ul>`使用粗体圆点标记

`<li>`定义列表项

标记类型:

```html
<ul style="list-style-type:disc">   实体圆点 
<ul style="list-style-type:circle">  空心圆圈
<ul style="list-style-type:square">  实体方块
```


##### 有序列表

`<ol>`

type参数:

1.默认123

2.type="a" :abc

3.type="A" :ABC

4.type="I" : I  II  III  IV

5.type="i"  i ii iii iv



#### 区块

div:它可用于组合其他 **HTML** 元素的容器

与 CSS 一同使用，<div> 元素可用于对大的内容块设置样式属性

```html
<div style="color:#0000FF">
  <h3>这是一个在 div 元素中的标题。</h3>
  <p>这是一个在 div 元素中的文本。</p>
</div>
```

<div style="color:#0000FF">   <h3>这是一个在 div 元素中的标题。</h3>   <p>这是一个在 div 元素中的文本。</p> </div>

##### span

<span> 用于对文档中的行内元素进行组合

```html
<p>我的母亲有 <span style="color:blue">蓝色</span> 的眼睛。</p>`
```

<p>我的母亲有 <span style="color:blue">蓝色</span> 的眼睛。</p>

#### 布局

**网页布局对改善网站的外观非常重要。**

**请慎重设计您的网页布局。**

虽然我们可以使用HTML table标签来设计出漂亮的布局，但是table标签是不建议作为布局工具使用的 - 表格不是布局工具。

在 css 里面定义：

```
p {margin:0; padding:0}
```

即可，用全局样式把 p 的边距给归零。

不过这样的副作用是网页所有的 p 都被重置了，所以你也可以指定专门标签下的 p。例如，如果这个 p 是在一个 class 为 content 的 div 下的，想去掉它的边距，就这么定义：

```
.content p {margin:0; padding:0;}
```

#### 表单和输入

##### 文本输入

```htnl
<form>
user: <input type="text" name="user"><br>
passwd: <input type="password" name="user">
</form>
```

<form>
user: <input type="text" name="user"><br>
passwd: <input type="password" name="user">
</form>
##### 单选（radio）


```htnl
<form>
<input type="radio" name="sex" value="male">Male<br>
<input type="radio" name="sex" value="female">Female
</form>
```

<form>
<input type="radio" name="sex" value="male">Male<br>
<input type="radio" name="sex" value="female">Female
</form>
##### 复选框


```html
<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
<input type="checkbox" name="vehicle" value="Car">I have a car
</form>
```

<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
<input type="checkbox" name="vehicle" value="Car">I have a car
</form>
##### 下拉列表（select）

```html
<select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi" selected>Audi</option>
</select>
```

<select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
</select>

##### 文本输入（textarea）

```html
<textarea name="message" rows="10" cols="30">
	The cat was playing in the garden.
</textarea>
```

<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>

##### 颜色选择

```html
<form>
  Select your favorite color:
  <input type="color" name="favcolor">
</form>
```

 <form>  Select your favorite color:  <input type="color" name="favcolor"></form>

##### 选择日期

```html
<form>
  Birthday:
  <input type="date" name="bday">
</form>
```

<form>
  Birthday:
  <input type="date" name="bday">
</form>

还可以使用属性像日期添加限制：min/max

```html
max="1979-12-31"
```

##### 电子邮箱

```html
<form>
   E-mail:
   <input type="email" name="email">
 </form>
```

<form>
   E-mail:
   <input type="email" name="email">
 </form>

##### 选择文件

```html
<form>
    Select a file: <input type="file" name="myFile"> 
</form>
```

##### 输入类型编号

```html
<form>
    Quantity (between 1 and 5):
    <input type="number" name="quantity" min="1" max="5">
  </form>
```

<form>
    Quantity (between 1 and 5):
    <input type="number" name="quantity" min="1" max="5">
  </form>

##### 输入类型范围

```html
<form>
    <input type="range" name="points" min="0" max="10">
</form>
```

<form>
    <input type="range" name="points" min="0" max="10">
</form>





#### iframe框架

frameborder="0" 用来移除边框

width和height来改变大小

name和target绑定来操控内部页面

#### 颜色

HTML 颜色由一个十六进制符号来定义，这个符号由红色、绿色和蓝色的值组成（RGB）。

每种颜色的最小值是0（十六进制：#00）。最大值是255（十六进制：#FF）

1600w种颜色

**RGBA 的意思是（Red-Green-Blue-Alpha）它是在 RGB 上扩展包括了 “alpha” 通道，运行对颜色值设置透明度。0-1**

#### 脚本

```html
<script>
document.write("Hello World!");
</script>
```

#### 字符实体

多用不间断空格`&nbsp;`注意分号

| 显示结果 | 描述   | 实体名称          | 实体编号 |
| :------- | :----- | :---------------- | :------- |
|          | 空格   | &nbsp;            | &#160;   |
| <        | 小于号 | &lt;              | &#60;    |
| >        | 大于号 | &gt;              | &#62;    |
| &        | 和号   | &amp;             | &#38;    |
| "        | 引号   | &quot;            | &#34;    |
| '        | 撇号   | &apos; (IE不支持) | &#39;    |



# HTML5

## 将HTML5元素定义为块元素

HTML5 定了 8 个新的 HTML **语义（semantic）** 元素。

所有这些元素都是 **块级** 元素

为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 **display** 属性值为 **block**:

```css
header, section, footer, aside, nav, main, article, figure {
    display: block; 
}
```



## 添加新的自定义元素

添加新元素myHero，并为该元素定义样式。

```html
<style>
myHero {
    display: block;
    background-color: #ddd;
    padding: 50px;
    font-size: 30px;
</style>
<myHero>我的第一个新元素</myHero>
```



**JavaScript 语句 `document.createElement("myHero")`** **是为 IE 浏览器添加新的元素。**

**PS: Internet Explorer 8 及更早 IE 版本的浏览器不支持以上的方式。**

为了解决此类问题，需要读取 html5.js 文件，并解析它

```html
<!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```



## 新元素

### canvas

标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API

`<canvas>`标签只是图形容器，您必须使用脚本来绘制图形。

你可以通过多种方法使用 canvas 绘制路径,盒、圆、字符以及添加图像。

**注意:** 默认情况下 `<canvas>` 元素没有边框和内容。



### 其他

| 标签                                                  | 描述                                                       |
| :---------------------------------------------------- | :--------------------------------------------------------- |
| [audio](https://www.runoob.com/tags/tag-audio.html)   | 定义音频内容                                               |
| [video](https://www.runoob.com/tags/tag-video.html)   | 定义视频（video 或者 movie）                               |
| [source](https://www.runoob.com/tags/tag-source.html) | 定义多媒体资源 <video> 和 <audio>                          |
| [embed](https://www.runoob.com/tags/tag-embed.html)   | 定义嵌入的内容，比如插件。                                 |
| [track](https://www.runoob.com/tags/tag-track.html)   | 为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。 |



## SVG

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用于定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准

#### SVG 与 Canvas两者间的区别

SVG 是一种使用 XML 描述 2D 图形的语言。

Canvas 通过 JavaScript 来绘制 2D 图形。

| Canvas                                                       | SVG                                                          |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 依赖分辨率          不支持事件处理器                                                                           弱的文本渲染能力          能够以 .png 或 .jpg 格式保存结果图像          最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不依赖分辨率          支持事件处理器                     最适合带有大型渲染区域的应用程序（比如谷歌地图）           复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）           不适合游戏应用 |



## 拖放（Drag 和 Drop）







## 地理定位

**地理定位及地图基本原理**

**底层设备及其数据来源**：

1. 带GPS功能的设备，通过GPS卫星直接得到数据，高精度
2. 以无线基站通信的设备，通过信号基站来大致确定位置，低精度
3. 带IP地址的通信设备，以注册的IP的物理位置来大致确定位置，低精度

**完整过程如下：**

1. 用户从浏览器打开位置感知应用页面
2. 页面加载后将调用Geolocation函数请求位置
3. 浏览器拦截该调用，向用户发出许可请求。如用户拒绝则什么都不会发生，否则
4. 浏览器将从上述的底层（宿主）设备检索位置信息如IP、GPS等
5. 浏览器将该位置信息发给它预设的、受信任的外部定位服务器，以期得到更详细的位置信息
6. 浏览器将该详细位置信息返回给页面应用

目前，大多数现代浏览器都支持该功能，但位置信息将触发隐私保护机制，也即需得到用户许可！





## 视频/音频

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
```



### Input类型

关于html5 新的输入类型：

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week



### 新表单元素

#### datalist

规定输入域的选项列表。





























