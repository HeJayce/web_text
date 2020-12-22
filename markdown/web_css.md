

# web_css

#### 语法：

两部分：

1. 选择器：需要改变的html样式，比如ｈ１、ｐ

2. 声明：花括号中的，由一个属性和一个值组成，每个声明用一个分号隔开

   ```css
   p 
   {
       color:red;text-align:center;
   }
   ```

   注释用/* */

#### id 和css选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

用#来定义

```css
#para1
{
    text-align:center;
    color:red;
}
```

**注意：ID属性不能以数字开头**



class选择器

class 选择器用于描述一组元素的样式，**class 选择器有别于id选择器，class可以在多个元素中使用。**

格式

```css
.center 
{
    text-align:center;
}
```

在`.`的前面可以加上指定的元素，

id和class的区别：HTML 元素只能**有一个属于**该单个元素的唯一 ID，而类名可由多个元素使用。

例如：id在一个页面上只能使用一次。

#### 创建CSS

##### 外部样式表

```css
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

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

**注意：!important 规则  **

**当 !important 规则被应用在一个样式声明中时,该样式声明会覆盖CSS中任何其他的声明**



#### css 背景

1. background可以设置多个背景图像

```css
   body
   { 
       background: #00ff00 url('smiley.gif') no-repeat fixed center;
   }
```

​	属性顺序：

​	background-color

​	background-image

​	background-repeat

​	background-attachment

​	background-position

2. 


- background-color  背景颜色

  - 十六进制 - 如："#ff0000"
  - RGB - 如："rgb(255,0,0)"
  - 颜色名称 - 如："red"

- background-image 背景图像

  - ```CSS
    background-image:url('paper.gif');
    ```

    

###### 样式

1.水平或垂直平铺

```css
background-repeat:repeat-x;
```

| repeat-x  | 只有水平位置会重复背景图像         |
| --------- | ---------------------------------- |
| repeat-y  | 只有垂直位置会重复背景图像         |
| no-repeat | background-image不会重复(不平铺) |

2.设置属性图像起始位置

```css
background-position:right top;
```

3.背景图片随着页面的滚动

```css
background-attachment:fixed;
```

| scroll | 背景图片随着页面的滚动而滚动，这是默认的。 |
| ------ | ------------------------------------------ |
| fixed  | 背景图片不会随着页面的滚动而滚动。         |
| local  | 背景图片会随着元素内容的滚动而滚动。       |



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

设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体

```css
p{font-family:"Times New Roman", Times, serif;}
```

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

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [color](https://www.runoob.com/cssref/pr-text-color.html)    | 设置文本颜色             |
| [direction](https://www.runoob.com/cssref/pr-text-direction.html) | 设置文本方向。           |
| [letter-spacing](https://www.runoob.com/cssref/pr-text-letter-spacing.html) | 设置字符间距             |
| [line-height](https://www.runoob.com/cssref/pr-dim-line-height.html) | 设置行高                 |
| [text-align](https://www.runoob.com/cssref/pr-text-text-align.html) | 对齐元素中的文本         |
| [text-decoration](https://www.runoob.com/cssref/pr-text-text-decoration.html) | 向文本添加修饰           |
| [text-indent](https://www.runoob.com/cssref/pr-text-text-indent.html) | 缩进元素中文本的首行     |
| [text-shadow](https://www.runoob.com/cssref/css3-pr-text-shadow.html) | 设置文本阴影             |
| [text-transform](https://www.runoob.com/cssref/pr-text-text-transform.html) | 控制元素中的字母         |
| [unicode-bidi](https://www.runoob.com/cssref/pr-text-unicode-bidi.html) | 设置或返回文本是否被重写 |
| [vertical-align](https://www.runoob.com/cssref/pr-pos-vertical-align.html) | 设置元素的垂直对齐       |
| [white-space](https://www.runoob.com/cssref/pr-text-white-space.html) | 设置元素中空白的处理方式 |
| [word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html) | 设置字间距               |



#### 链接

##### 颜色

```css
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```

其中已访问链接就是打开过的链接

##### 背景颜色

```css
a:link {background-color:#B2FF99;}
a:visited {background-color:#FFFF85;}
a:hover {background-color:#FF704D;}
a:active {background-color:#FF704D;}
```



###### 顺序：

- a:hover 必须跟在 a:link 和 a:visited后面
- a:active 必须跟在 a:hover后面

##### 文本修饰

###### 下划线

```css
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
a:hover {text-decoration:underline;}
a:active {text-decoration:underline;}
```

###### 大小字体

```css
a.one:hover {font-size:150%;}
a.four:hover {font-family:Georgia, serif;}
```

##### 高级操作

###### 创建链接框

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

- ##### 盒子模型

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

```css
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```

**总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距**



#### 边框

border-style：

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



#### 轮廓(outline)

| 属性                                                         | 说明                           | 值                                                        |
| :----------------------------------------------------------- | :----------------------------- | :-------------------------------------------------------- |
| [outline](https://www.runoob.com/cssref/pr-outline.html)     | 在一个声明中设置所有的轮廓属性 | outline-color outline-style outline-width                 |
| [outline-color](https://www.runoob.com/cssref/pr-outline-color.html) | 设置轮廓的颜色                 | color-name  hex-number rgb-number                         |
| [outline-style](https://www.runoob.com/cssref/pr-outline-style.html) | 设置轮廓的样式                 | none dotted dashed solid double groove ridge inset outset |
| [outline-width](https://www.runoob.com/cssref/pr-outline-width.html) | 设置轮廓的宽度                 | thin medium thick *length *inherit                        |



#### margin和padding

##### margin

外边距，定义元素周围的空间

margin 没有背景颜色，是完全透明的

##### padding

定义元素边框与元素内容之间的空间，即上下左右的内边距



#### 分组嵌套

```css
h1,h2,p
{
    color:green;
}
```

##### 嵌套选择器

- **p{ }**: 为所有 **p** 元素指定一个样式。
- **.marked{ }**: 为所有 **class="marked"** 的元素指定一个样式。
- **.marked p{ }**: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。
- **p.marked{ }**: 为所有 **class="marked"** 的 **p** 元素指定一个样式。



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

1. 往往用于图像，也可以用在布局。
2. 元素浮动后，会尽量向边缘移动。
3. 浮动元素之后的元素将围绕它，之前的不受影响
4. 多个浮动元素放到一起会彼此相邻

清楚浮动：

clear:both



#### 组合选择符

- 后代选择器(以空格   分隔)

  ```css
  div p
  {
    background-color:yellow;
  }
  ```

  其中div里的p背景为黄色

- 子元素选择器(以大于 **>** 号分隔)

  ```css
  div>p
  {
    background-color:yellow;
  }
  ```

  div中直属的p才会变成黄色

- 相邻兄弟选择器(以加号 **+** 分隔)

  ```css
  div+p
  {
    background-color:yellow;
  }
  ```

  div结束之后的第一个p

- 普通兄弟选择器(以波浪号 **～** 分隔)

	```css
div~p
{
  	background-color:yellow;
}
	```
	
	div之后的所有p
	
	

#### 伪类

1. first-child

   选择父元素的第一个子元素

   ```css
   p:first-child
   {
   	color:blue;
   } 
   ```

   第一个p

2. 匹配所有<p> 元素中的第一个 <i> 元素

	```css
p > i:first-child
{
    color:blue;
}
	```

3. 匹配所有作为第一个子元素的 <p> 元素中的所有 <i> 元素

	```css
p:first-child i
{
    color:blue;
}
	```
	
4. lang伪类

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





##### 伪元素

first-line设置文本首行

```css
p:first-line 
{
    color:#ff0000;
    font-variant:small-caps;
}
```

