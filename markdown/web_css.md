

# web_css

网页分成3个部分：

​	结构HTML

​	表现CSS

​	行为Javascript

CSS：

- 层叠样式表
- 用来设置网页样式（化妆）

## 创建CSS

##### 外部样式表

```css
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

可使用浏览器的缓存机制，加快加载速度



##### 内部样式表(Internal style sheet)

写在`<style>`中

适用于单个文档的样式



##### 内联样式(Inline style)

写在元素中

```html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```





##### 多重样式(混合)

若外部有

```css
h3
{
    color:red;
    text-align:left;
    font-size:8pt;
}
```

内部有

```css
h3
{
    text-align:right;
    font-size:20pt;
}
```

则h3得到的样式为

```css
color:red;
text-align:right;
font-size:20pt;
```

**总结：不同的部分都取，相同的部分按照优先级进行设定**



###### 优先级：

**内联样式> 内部样式 >外部样式 > 浏览器默认样式**

**内联样式 > ID 选择器 > 伪类 > 属性选择器 > 类选择器 > 元素(类型)选择器 > 通用选择器**

内联样式 1,0,0,0

id选择器  0,1,0,0

类和伪类选择器  0,0,1,0

元素选择器  0,0,0,1

比较优先级将所有选择器优先级相加计算,分组选择器是单独计算的

选择器的累加不会超过最大的数量级,比如很多类选择器也不会大于id选择器

如果优先级相等,选择靠下的样式

继承的样没有优先级



**注意：!important 规则  **

`style="color:red  !important;`

在样式后添加 `!important `,优先级最高,但**慎用**

**当 !important 规则被应用在一个样式声明中时,该样式声明会覆盖CSS中任何其他的声明**



## 语法：

**开发不要使用内联样式**

```html
<p style="color:red; font-size:60px "> asdda </p>
```



两部分：

1. 选择器：需要改变的html样式，比如ｈ１、ｐ

2. 声明：花括号中的，由一个属性和一个值组成，每个声明用一个分号隔开

   ```css
   p 
   {
       color : red ;
     	text-align : center ;
   }
   ```
```
   
   注释用/* */



#### id 和css选择器

##### id 选择器

可以为标有特定 id 的 HTML 元素指定特定的样式。

用#来定义

​```css
#para1
{
    text-align:center;
    color:red;
}
```

**注意：ID属性不能以数字开头**



### class选择器

class 选择器用于描述一组元素的样式，**class 选择器有别于id选择器，class可以在多个元素中使用。**

格式

```css
.center 
{
    text-align:center;
}
```

在`.`的前面可以加上指定的元素。

class可以指定多个元素，使用**空格**隔开



id和class的区别：HTML 元素只能**有一个属于**该单个元素的唯一 ID，而类名可由多个元素使用。

比如id是一个人，class是一个班级，id只能用一个，class可以用很多

**id在一个页面上只能使用一次。**



### 通位选择器

```
*{

}
```

选定所有



### 交集选择

例如：选定class为某值的P元素

用法：

元素选择器.类选择器

不推荐使用id选择，因为id可以直接确定唯一元素，但语法没问题`div#p1{}`

**如果交集选择器有元素选择器，必须要用元素选择器开头**

```css
div.red{

}
.a.b.c{

}
```

必须同时满足



### 选择器分组（并集）

```css
h1,span{

}
```

逗号表示或，满足一个即可



### 关系选择器

父子元素

- 直接包含被包含的元素

祖先/后代元素

- 直接或间接包含

兄弟元素

- 拥有相同父元素的



#### （祖先）后代选择器

(以空格   分隔)

```css
div p
{
  background-color:yellow;
}
```

其中div里的p背景为黄色

#### （父）子元素选择器

(以大于 **>** 号分隔)，可连着写

```css
div > p
{
  background-color:yellow;
}
/* 或者指定的字元素 */
div > p.类名
{
  
}
```

div中直属的p才会变成黄色

#### 兄弟选择器（2种）

(以加号 **+** 分隔)

选择下一个兄弟

```css
div + p
{
  background-color:yellow;
}
```

div结束之后的第一个p，**只找一个**

(以波浪号 **～** 分隔)

```css
div ～ p
{
	background-color:yellow;
}
```

div结束之后的所有p，**找所有**



### 属性选择器

```css
p[title]{
	color:red
}

p[title = abc]{
	color:red
}

p[title ^= abc]{
	color:red
}

p[title $= abc]{
	color:red
}

p[title *= abc]{
	color:red
}

/*
1.有属性的变
2.确定属性值的变
3.属性值开头的变
4.属性值结尾的变
5.属性值只要有的变
*/
```



### 伪类选择器

#### 伪类

一般情况下一个`：`开头

1.  first-child——选择父元素的第一个子元素

   ```css
   p:first-child
   {
   	color:blue;
   } 
   /* 或者 */
   div > p:first-child
   {
   	color:blue;
   } 
   ```

   last-child   :   最后一个元素

   nth-child(n)  : n: 第n个字元素

   ​					2n 或even  : 双数子元素

   ​					2n+1 或 add : 奇数子元素

   这些伪类都是依据**所有**的子元素排序的。

   还有同类型排序的 :

   first-of-type 

   last-of-type 

   nth-of-type 

   表示同类型排序的

   

   not() 否定伪类 :  将符合条件的元素从选择器中去除

   ​	参数 : 与前面一致 , 类似于 `ul > li:not(:nth-child(3))`

   

2. 匹配所有作为第一个子元素的 <p> 元素中的所有 <i> 元素

   ```css
   p:first-child i
   {
    color:blue;
   }
   ```

3. lang伪类

   ```css
   q:lang(no)
   {
   	quotes: "~" "~";
   }
   ```

   ```html
   <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
   ```

   输出：Some text ~A quote in a paragraph~ Some text.

   **其中两个~不可被选中。q元素的值为lang =“no”**

4. ##### 超链接伪类

   ###### 颜色

   ```css
   a:link {color:#000000;}      /* 未访问链接*/
   a:visited {color:#00FF00;}  /* 已访问链接 */
   a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
   a:active {color:#0000FF;}  /* 鼠标点击时 */
   ```

   其中已访问链接就是打开过的链接

   ###### 背景颜色

   ```css
   a:link {background-color:#B2FF99;}
   a:visited {background-color:#FFFF85;}
   a:hover {background-color:#FF704D;}
   a:active {background-color:#FF704D;}
   ```

   

   ###### 顺序：

   - a:hover 必须跟在 a:link 和 a:visited后面
   - a:active 必须跟在 a:hover后面

   ###### 文本修饰

   下划线

   ```css
   a:link {text-decoration:none;}
   a:visited {text-decoration:none;}
   a:hover {text-decoration:underline;}
   a:active {text-decoration:underline;}
   ```

   大小字体

   ```css
   a.one:hover {font-size:150%;}
   a.four:hover {font-family:Georgia, serif;}
   ```

   ###### 高级操作

   创建链接框

   ```css
   a:link,a:visited   /*未访问过和已访问过*/
   {
   	display:block;   /*display设置段落生成一个行内框,block将显示为块级元素，此元素前后会带有换行符*/
   	font-weight:bold; /*定义字体粗细为粗*/
   	color:#FFFFFF;
   	background-color:#98bf21;
   	width:120px;     
   	text-align:center;
   	padding:4px;   /*P元素的填充。参数顺序1个上下左右，2个上下、左右，3个上、左右、下，4个上右下左*/
   	text-decoration:none;    /*去除下划线*/
   }
   a:hover,a:active     /*移动到链接和点击*/
   {
   	background-color:#7A991A;
   }
   ```

   注意:visit只能设置颜色

   link 和 visit 是超链接独有的

   其他两个其他也有

   



#### 伪元素

first-line设置文本首行

```css
p::first-line 
{
    color:#ff0000;
    font-variant:small-caps;
}
```

first-line 首行

first-letter 首字母

selection 设置选中样式

before/after 该标签开头/最后    的缝

​		该伪元素必须结合content使用 , 可实现添加内容 , 也不能选中

### 分组嵌套

```css
h1,h2,p
{
    color:green;
}
```

### 嵌套选择器

- **p{ }**: 为所有 **p** 元素指定一个样式。
- **.marked{ }**: 为所有 **class="marked"** 的元素指定一个样式。
- **.marked p{ }**: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。
- **p.marked{ }**: 为所有 **class="marked"** 的 **p** 元素指定一个样式。



### 继承

发生在后代元素上,但部分不会被继承,比如背景



### 大小单位

px

百分比

em:根据字体大小改变

1em = 1font-size

rem:相对于根元素的字体大小(html的字体大小)











#### css 背景

1. background可以设置多个背景图像

```css
background: #00ff00 url('smiley.gif') no-repeat fixed center;
```

​	属性顺序：

​	background-color

​	background-image

​	background-repeat

​	background-attachment

​	background-position

​	没有顺序要求，**注意size在position的后边；orgin在clip的前边**



2.


- background-color  背景颜色

  - 十六进制 - 如："#ff0000"
  - RGB - 如："rgb(255,0,0)"
  - 颜色名称 - 如："red"

- background-image 背景图像

  - ```CSS
    background-image:url('paper.gif');
    ```

    如果背景图片小，则自动铺满
    
    如果背景图片大，则有部分不显示
    
    

###### 样式

1.设置重复的水平或垂直平铺

```css
background-repeat:repeat-x;
```

| repeat    | 用来设置背景重复方式             |
| --------- | ---------------------------------- |
| repeat-x  | 只有水平位置会重复背景图像         |
| repeat-y  | 只有垂直位置会重复背景图像         |
| no-repeat | background-image不会重复(不平铺) |

2.设置属性图像起始位置

```css
background-position:right top;
```

top、left、right、bottom、center

五个用来控制方位，如果只写一个值，默认第二个center

也可通过偏移量来控制位置

与定位类似，两个值，但使用负值偏多（见雪碧图）



3.背景图片随着页面的滚动

```css
background-attachment:fixed;
```

| 值     |                                            |
| ------ | ------------------------------------------ |
| scroll | 背景图片随着页面的滚动而滚动，这是默认的。 |
| fixed  | 背景图片不会随着页面的滚动而滚动。（固定） |
| local  | 背景图片会随着元素内容的滚动而滚动。       |



4，背景范围

```css
background-clip:border-box; /*默认值*/
```

border-box  默认值，背景会出现在边框的下边

padding-box  背景不会出现在边框，只出现在内容区和内边距

content-box   背景只会出现在内容区



5.背景图片偏移量的原点

```css
background-origin:border-box;
```

`padding-box`  默认值  `background-position`从内边距处开始计算

`content-box`  背景图片的偏移从内容区处计算

`border-box` 背景图片的变量从边框处开始计算



6.背景图片大小

```css
background-size:1920px 1080px;
```

第二个默认等比缩放

`cover`:图片比例不变，图片铺满

`contain`：图片完整显示



#### 实战雪碧图

通过一张大图，不同的定位，来实现一张图包含多张

减小加载速度，减弱视觉不适

​	步骤：1确定图片

​			2测量图片大小

​		3根据测量结果创建一个元素

​		4设置偏移量，以显示正常图片

### 渐变色

#### 线性渐变

可设置多个颜色，默认平均分配

```css
background-image:linear-gradient(red,green)
```

默认从上往下

```css
background-image:linear-gradient(to right,red,green)
```

从左往右

xxxdeg：旋转度数

指定分配：颜色后加数值（10px）

#### 径向渐变

```css
background-image:radial-gradient(red,green)
```

圆形渐变

正方形--> 吊形
长方形--> 椭圆形

```
background-image:radial-gradient(10px,10px,red,green)
```

指定圆心大小



#### 文本

##### 颜色

```css
body {color:red;}
h1 {color:#00ff00;}
h2 {color:rgb(255,0,0);}
```

##### 对齐

`text-align`

| left    | 把文本排列到左边。默认值：由浏览器决定。 |
| ------- | :--------------------------------------- |
| right   | 把文本排列到右边。                       |
| center  | 把文本排列到中间。                       |
| justify | 实现两端对齐文本效果。                   |

##### 字体

 `font-family `属性设置文本的字体系列：

​		`serif` 衬线字体。 有勾勾

​		`sans-serif`   非衬线字体。  字体不带勾（比如黑体）

​		`monospace`   等宽字体。  确保每个字符宽度一样

设置几个字体名称作为一种"后备"机制，

如果浏览器不支持第一种字体，他将尝试下一种字体

```css
p{font-family:"Times New Roman", Times, serif;}
```

有空格的字体必须加引号



#####  服务器字体提供用户：

```css
@font-face` {
	font-family: "xxx";
	src: url('./xxx/xxx.ttf');
}
```

问题：

​	速度，版权，字体格式



`iconfont`图标字体

​	将图标设置为字体，利用font-face引入

font awesome网站

​	1解压需要css和webfonts

​	2移入项目

​	3link href="../xx/all.css"

​	4使用

```
<i class="fas fa-bell">
```

**苹果显示不出来？**

参考手册

可加style标签修改

**通过伪元素设置图标字体**
	通过before或after选中

​	设置content选择编码 \xxx

​	设置font-family

**通过实体来使用字体**

```html
<span class="fas">&#xfof3; </span>
```

&#x + 字体编号



`font-style`属性设置文本的样式

| normal  | 默认值。浏览器显示一个标准的字体样式。 |
| ------- | -------------------------------------- |
| italic  | 浏览器会显示一个斜体的字体样式。       |
| oblique | 浏览器会显示一个倾斜的字体样式。       |

**italic 和 oblique 的区别**

一种字体有粗体、斜体、下划线、删除线等诸多属性。

但是并不是所有字体都做了这些，一些不常用的字体，或许就只有个正常体，如果你用 italic，就没有效果了

这时候你就要用 oblique，可以理解成 italic 是使用文字的斜体，oblique 是让没有斜体属性的文字倾斜！



`font-size` 属性设置文本的大小



##### 文本线

```css
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;} 
h3 {text-decoration:underline;}
```

##### 文本转换

`text-transform`用来指定在一个文本中的大写和小写字母

`text-transform:uppercase` 全大写

`text-transform:lowercase`全小写

`text-transform:capitalize`单词首字母大写

##### 所有属性

| 属性                                                         | 描述                                                  |
| :----------------------------------------------------------- | :---------------------------------------------------- |
| [color](https://www.runoob.com/cssref/pr-text-color.html)    | 设置文本颜色                                          |
| [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 设置文本方向                                          |
| [letter-spacing](https://www.runoob.com/cssref/pr-text-letter-spacing.html) | 设置字符间距                                          |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高                                              |
| [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 对齐元素中的文本                                      |
| [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 向文本添加修饰（下划/上滑/删除线）                    |
| [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 缩进元素中文本的首行                                  |
| [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 设置文本阴影                                          |
| [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制元素中的字母                                      |
| [unicode-bidi](https://www.runoob.com/cssref/pr-text-unicode-bidi.html) | 设置或返回文本是否被重写                              |
| [vertical-align](https://www.runoob.com/cssref/pr-pos-vertical-align.html) | 设置元素的垂直对齐                                    |
| [white-space](https://www.runoob.com/cssref/pr-text-white-space.html) | 设置元素中空白的处理方式（nowrap不换行，pre保留空白） |
| [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 设置字间距                                            |

text-overflow：ellipsis   设置溢出省略号







#### 列表

##### 列表头样式

```css
ul.a {list-style-type: circle;} 
ul.b {list-style-type: square;}

ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}
```

具体参数：

| 值          | 描述                                   |
| :---------- | :------------------------------------- |
| none        | 无标记。                               |
| disc        | 默认。标记是实心圆。                   |
| circle      | 标记是空心圆。                         |
| square      | 标记是实心方块。                       |
| decimal     | 标记是数字。                           |
| lower-roman | 小写罗马数字(i, ii, iii, iv, v, 等。)  |
| upper-roman | 大写罗马数字(I, II, III, IV, V, 等。)  |
| lower-alpha | 小写英文字母 (a, b, c, d, e, 等。)     |
| upper-alpha | 大写英文字母 (A, B, C, D, E, 等。)     |
| lower-greek | 小写希腊字母(alpha, beta, gamma, 等。) |
| lower-latin | 小写拉丁字母(a, b, c, d, e, 等。)      |
| upper-latin | 大写拉丁字母(A, B, C, D, E, 等。)      |

##### 标记样式图像

```css
ul
{
    list-style-image: url('sqpurple.gif');
}
```



#### 表格

##### 边框

使用border属性。属性分别(按顺序)：border-width, border-style,和border-color

```css
table, th, td
{
    border: 1px solid black;
}
```

表和th/ td元素有独立的边界

想要消除双边，需要border-collapse属性：

在之前的代码前加入：

```css
table {
    border-collapse: collapse;
}
```





#### 边框

简写

3个属性,随机位置

##### border-style

- none: 默认无边框
- dotted: 定义一个点线边框
- dashed: 定义一个虚线边框
- solid: 定义实线边框
- double: 定义两个边框。 两个边框的宽度和 border-width 的值相同
- groove: 定义3D沟槽边框。效果取决于边框的颜色值
- ridge: 定义3D脊边框。效果取决于边框的颜色值
- inset:定义一个3D的嵌入边框。效果取决于边框的颜色值
- outset: 定义一个3D突出边框。 效果取决于边框的颜色值

还可以分别设置

- border-top-style
- border-right-style
- border-bottom-style
- border-left-style

##### border-width

不写也可以,有默认

可有4个值,上右下左

3个值  上,左右,下

2个值  上下,左右

还可以分别设置

- border-top-width
- border-right-width
- border-bottom-width
- border-left-width

##### border-color

边框颜色,规则同上

默认黑色

### outline

用法与border一样

区别不会影响可见框的大小

### 阴影

box-shadow

四个值

1.水平位置,正向右,负向左

2.垂直位置,正向右,负向左

3.模糊半径,

4.颜色.

#### 透明阴影:

​	rgba(0,0,0,5)

### 圆角

`border-radius`:

​	`border-top-left-radius`

​	`border-top-right-radius`

​	`border-bottom-left-radius`

​	`border-bottom-right-radius`

​	参数:10px:以10px画圆

两个值画椭圆

`border-radius:50%` 圆形







#### 轮廓(outline)

| 属性                                                         | 说明                           | 值                                                        |
| :----------------------------------------------------------- | :----------------------------- | :-------------------------------------------------------- |
| [outline](https://www.runoob.com/cssref/pr-outline.html)     | 在一个声明中设置所有的轮廓属性 | outline-color outline-style outline-width                 |
| [outline-color](https://www.runoob.com/cssref/pr-outline-color.html) | 设置轮廓的颜色                 | color-name  hex-number rgb-number                         |
| [outline-style](https://www.runoob.com/cssref/pr-outline-style.html) | 设置轮廓的样式                 | none dotted dashed solid double groove ridge inset outset |
| [outline-width](https://www.runoob.com/cssref/pr-outline-width.html) | 设置轮廓的宽度                 | thin medium thick *length *inherit                        |







#### 显示与隐藏

**隐藏有两种方式**：

```
1. visibility:hidden;
2. display:none;
```

  **表隐藏**：

```
visibility: collapse;
```

可隐藏指定行列

**无序列表横排显示**

```
display:inline
```

**span分行显示**

```
display:block
```

block作用：这两个元素之间的换行符



#### Overflow

用于控制内容溢出元素框时显示的方式

| 值      | 描述                                                     |
| :------ | :------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |

#### 浮动

**float**

float:left;

1. 往往用于图像，也可以用在布局。
2. 元素浮动后，会尽量向边缘移动。
3. 浮动元素之后的元素将围绕它，之前的不受影响
4. 多个浮动元素放到一起会彼此相邻
5. 设置浮动后会脱离文档流.下面的元素会向上移动.

#### 清楚浮动：

clear:both

由于box1的浮动，导致box3位置 上移

也就是bx3收到了box1浮动的影响，位置发生了改变

如果我们不希望某个元素因为其他元素浮动的影响而改变位置，

可以通过clear属性来清除浮动元素对当前元素所产生的影响

clear

作用:清除浮动元素对当前元素所产生的影响

原理是设置外边距

可选值:

left清除左侧浮动元素对当前元素的影响

right情除右侧浮动元素对当前元素的影响

both:清楚两侧



#### 

## 布局layout

### 文档流

​	网页是多层结构,一层摞一层

​	通过CSS分别为每一层设置样式

​	用户只能看到最上一层

​	最底层是**文档流**

​		创建的元素默认都在文档流

​	元素有两个状态

​		在文档中

​		不在文档流

​	元素在文档流中的特点

​		块元素

​				独占一行

​				默认宽度是父元素的全部(撑满父元素)

​				默认高度是被内容撑开(类似于文本框大小)

​		行内元素

​				不会独占一行

​				自左向右水平排列



### 盒子模型

CSS将页面的**所有元素**都设置为了一个矩形盒子

#### 盒子组成

- **Margin(外边距)** - 指定和其他盒子的距离
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

```css
div {
    width: 300px;
  	height:300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```

**总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距**

内容区大小由width和height决定



##### margin

外边距，定义元素周围的空间

不会影响可见大小,但会影响位置

margin 没有背景颜色，是完全透明的

##### padding

定义元素边框与元素内容之间的空间，即上下左右的内边距

会影响盒子大小

内容区背景延伸到内边距



### 水平方向布局

元素在其父元素中水平方向位置

水平布局必须满足:

左外+左边+左内+width+右内+右边+右外 = 父元素内容区的宽度

如果相加结果不成立,称为过度约束,没有auto的情况等式会自动调整

浏览器会自动调整右外

如果某个元素有auto,调整那个元素

width的值默认是auto

如果宽度和外边距都是auto,则优先将宽度设置为最大



### 垂直方向布局

垂直布局不用满足水平等式

子元素超过了父元素,则子元素溢出

设置overflow属性处理溢出

​	`overflow:hidden`设置溢出隐藏

​	`overflow:scroll`设置滚动条

​	auto,根据需要生成滚动条

overflow-x

overflow-y

同理

要让一个文字在父元素垂直居中,将父元素的`line-heigth`设置为和父元素height一样的值



### 垂直方向外边距重叠

#### 兄弟元素

上边距和下边距重叠,两者都是正数谁大取谁

如果遇到一正一负,取两数相加

如果都是负,取绝对值较大的

#### 父子元素

父子元素相邻,子元素会传递给父元素(上外边距)

会影响布局,需要进行处理

解决思路:

使用padding并改变父元素的高度

添加上边框高度1.父元素高度减1,子元素上外边框-1



### 行内元素的盒模型

行内元素不支持设置宽度和高度.被内容撑开

padding可以生效,但垂直方向的padding不会影响布局

border,margin同上padding规则

##### `display`属性.

可以设置元素的显示类型

​	`inline` 设置行内

​	`block` 设置块元素

​	`inline-block` 行内块元素

​			既可以设置宽度又不会独占一行

​		`table`设置为表格

​		`none`隐藏

##### `visibility` 属性.

用来设置元素的显示状态

​	`visible` 默认,显示

​	`hidden` 隐藏,不显示,**但占位**



### 默认样式

通常,浏览器为元素设置的默认样式

去除应用样式:

```css
*{
	margin:0;
	padding:0;
}
/*但不完全*/
```

去除默认样式的css

reset.css 直接去除所有样式

normailze.css  对默认样式进行统一



### 网页布局

header

main

footer



### 高度塌陷问题

当高度没有被写死的时候,子元素负浮动后会无法撑起父元素高度,

导致父元素高度丢失 , 下面的元素上移 , 导致异常

#### **BFC**

(block formatting context) CSS中的隐含属性

为元素开启BFC , 该元素会变成一个独立的布局区域

特点:

​	1.开启BFC的元素不会被覆盖

​	2.开启BFC的元素子元素和父元素外边距不会重叠

​	3.开启BFC的元素可以包含浮动的子元素

通过特殊方法开启BFC

​	1.设置元素浮动

​	2.将元素设置为行内块元素

​	3.将元素的`overflow`设置为一个非`visible`的值

​			常用的方式为元素设置overflow hidden 开启其BFC,使其包含浮动元素



#### 清除浮动

利用after（解决高度塌陷）

```css
.box1:after{
	content:""
	display:block;
	clear:both;
}
```

content 空白占位

行内元素转换为块元素



场景:（外边距重叠）

```html
<div class="box1">
	<div class="box2"></div>
<div>
```

给box2设置外边距会影响box1的位置



解决:

使`before`来将两个元素隔开

与after一样

```css
.box1::before{
	content:"";
	display:table;
}
```

Table好处是不会占位置，而且还可以将元素隔开



#### clearfix

```css
.clearfix::before,
.clearfix::after{
	content:"";
	display:table;
	clear:both;
}
```

table既可以解决高度塌陷，还可以解决外边距重叠



**clearfix既可以解决高度塌陷，还可以解决外边距重叠**

直接将`clearfix`添加到元素中即可



## 定位

高级的布局手段

可以将任何元素摆放到任意位置

`position:static`默认值，不开启

​			relative：相对定位

​			absalute：绝对定位

​			fixed：固定定位

​			sticky：粘滞定位

### 相对定位

特点：元素开启相对定位不设置偏移量，不会发生变化

可提升层级，但没有脱离文档流，不改变元素性质



#### 偏移量

​	改变元素位置的量

​	top

​	bottom

​	left

​	right



### 绝对定位

​	`absalute`

特点：

​	位置不改变

​	脱离文档流

​	会改变元素性质，变成块元素

偏移量：

原点确定：

​	相对于其包含块进行定位

#### 	包含块containing block

​		正常情况：

​			离当前元素最近的祖先块元素

​		绝对定位的包含块：

​			离他最近的开启定位（只要不是默认）的祖先元素

水平方向等式添加left和right。9个值

垂直方向的等式也必须满足



### 固定定位

​	也是一种绝对定位：

​	位置不改变

​	脱离文档流

​	会改变元素性质，变成块元素	

​	不同的是，永远参考于浏览器的视口（永远在屏幕左上角）

可做小广告

### 粘滞定位

粘滞定位可以在元来到达某个位置时将其固定

兼容性不好



### 层级

定位不管是什么定位层级一样高

对于开启定位的元素

可使用`z-index`作为参数，越大层级越高

祖先的元素的层级再高也不会覆盖后代元素



## CSS过度动画

`transition`

​	大部分属性都支持过度

​	必须是从一个有效数值到另一个有效数值

transition-property：指定要过度的属性(height/all)

transition-duration ：指定要过度的时间s/ms 1s=1000ms

也可分别指定时间，两个属性，两个时间

transition-timing-function：过度时间函数，可实现加速减速运动

​	ease默认，先加速后减速

​	linear 匀速运动

​	cubic-bezier 贝塞尔曲线[参数网址](https://cubic-bezier.com/)

​	steps()	 分布执行效果（离散）（n，end）

​			n表示步数，end或start表示时间结束或开始时执行运动

transition-delay：过度效果的延时



简写：

transition



### CSS动画

动画

动画和过渡类似，都是可以实现一些动态的效果，

不同的是过渡需要在某个属性发生变化时才会触发

动画可以自动触发动态效果

设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤

```css
@keyframes test {
	from{
			margin-left: 700px;
			}
	to{
			margin-left: 0;
		}
 .box3{
     background-color: orange;
     animation-name: test;/*名字*/
     animation-duration: 1s; /*时间*/
     animation-iteration-count: infinite;
      /*执行次数n/infinite无限*/
   	 animation-direction: alternate;
       /*指定动画运行的方向
       可选值:
       normal默认值从from 向to运行 每次都是这样
       reverse从to向from 运行每次都是这样
       alternateI从from向to运行重复执行动画时反向执行(来回)
       alternate-reverse从to向fror运行 重复执行动画时反向执行*/
   		
```



### less

css的预处理语言

​	是css的增强版，使用更少的代码，实现更强的样式

​	less添加了各种新特性如变量等，大体上与css一样

​	

​	 

#### css变量

```css
--name:#bfa
```

变量名-值

使用：

```css
var(--name)
```



#### css计算函数：

```css
calc(200px*2)
```

  

### less语法：

```less
body{
	width: 100px;
	height: 100px;
		div{
			color: red;
				}
}
```

指定body下的div



##### less变量

`@name:value`

```less
@name:value
.box1{
	width:@name;
}
```

变量可以是颜色，数值，类名

使用类名时：

```less
@c:box1;
	.@{c}{
    width:0;
  }
```



##### 

#### 扩展

##### extend

选择器分组

```less
.p2:extend(.p1){
	colorl:red;
}
```

相当于p2保持与p1一致的属性，扩展的属性另外加在p2

##### Mixins

```less
.p3{
	.p1();
}
```

用类选择器时可以在选择器后边添加().  

实际上创建了mixins



### 混合函数

在混合函数中直接设置变量

```less
/*定义*/
.box1(@w:100px,@h:100px,@bg_color:red){
  /* ⬆️设置默认值*/
	width:@w;
  height:@h
  border:1px soild @bg_color
}
div{
	.box1(200px,300px,red)
  /*.
  box1(@bg-color:red,@h:300px,@width:200px)
  */
}
```



#### 导入

```less
@import "xxx.less"
```



## Flex弹性盒

用于替代**浮动**，来完成布局

让元素跟随页面的大小而改变

#### 弹性容器

​	必须将一个元素设置为弹性容器

​	方法：	

```css
display:flex         //弹性容器(独占一行)
display:inline-flex  //行内弹性容器
```

指定弹性元素的排列方向

```css
flex-direction: column
//row（水平） row-reverse（反向水平排列）
//column（自上向下）column-reverse（反向自上向下）
```

**主轴**：弹性元素的排列方式

**侧轴**：与主轴垂直



#### 弹性元素

​	弹性容器的直接子元素（弹性项）

​	一个元素可以同时是弹性容器和弹性元素

`flex-grow`

```css
flex-grow:0
```

flex- grow 指定弹性元素的伸展的系数

当父元素有多余空间的时，子元素如何伸展

父元素的剩余空间会按比例分配



`flex-shrink`

​	父元素的空间不足以容纳所有子元素

```css
flex-shrink:0; //不收缩（溢出）
flex-shrink:1; //收缩
```

