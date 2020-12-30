# Bootstrap学习

## Bootstrap新建模板

```html
<!DOCTYPE html>
<html>
<head>
<title>Bootstrap 模板</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 引入 Bootstrap -->
<link href="//apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="external nofollow" target="_blank"  rel="stylesheet">

<!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
<!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
<!--[if lt IE 9]> 
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" rel="external nofollow" ></script>         
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js" rel="external nofollow" ></script>       
<![endif]-->
</head>
<body>
<h1>Hello, world!</h1>
<!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
<script src="https://code.jquery.com/jquery.js" rel="external nofollow" ></script>
<!-- 包括所有已编译的插件 -->
<script src="js/bootstrap.min.js"></script>
</body>
</html>
```



## Bootstrap CSS

### 移动设备适配

在文件的head中添加**viewport meta** 标签

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

`device-width`表示确保它能正确呈现在不同设备上

`initial-scale=1.0 `确保网页加载时，以 1:1 的比例呈现，不会有任何的缩放。

` user-scalable=no` 可以禁用其缩放

通常情况下，`maximum-scale=1.0 `与`user-scalable=no `一起使用。这样禁用缩放功能后，用户只能滚动屏幕

### 响应式图像

添加` img-responsive class`，可以让图像对响应式布局支持更友好

```html
<img src="..." class="img-responsive" alt="响应式图像">
```

```css
.img-responsive {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
```

` inline-block`，元素相对于它周围的内容以内联形式呈现



### 全局显示

使用 `body {margin: 0;}` 来移除 body 的边距

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  background-color: #ffffff;
}
```

### 链接样式

通过`link-color`设置全局链接的颜色



### 容器

#### *.container* class

左右外边距(margin-right、margin-left)设置为自动

内边距(padding)是固定宽度(15px)

默认不可嵌套

## 网格系统

类似于表格



## 排版

### 标题：

同html h1 - h6 

#### 子标题

`<small>我是副标题1 h1</small>`

字号更小，颜色更浅

### 引导主体副本

 `<p class="lead">`

能够让段落更大更粗、行高更高

### 强调

```html
<p class="text-left">向左对齐文本</p>
<p class="text-center">居中对齐文本</p>
<p class="text-right">向右对齐文本</p>
<p class="text-muted">本行内容是减弱的</p>
<p class="text-primary">本行内容带有一个 primary class</p>
<p class="text-success">本行内容带有一个 success class</p>
<p class="text-info">本行内容带有一个 info class</p>
<p class="text-warning">本行内容带有一个 warning class</p>
<p class="text-danger">本行内容带有一个 danger class</p>
```


### 缩写

 <abbr> title 属性添加了文本

`<abbr title="World Wide Web">WWW</abbr>`

<abbr title="World Wide Web">WWW</abbr>



| 类                  | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| .lead               | 使段落突出显示                                               |
| .small              | 设定小文本(设置为父文本的85%大小)                            |
| .text-left          | 设定文本左对齐                                               |
| .text-center        | 设定文本居中对齐                                             |
| .text-right         | 设定文本右对齐                                               |
| .text-justify       | 设定文本对齐,段落中超出屏幕部分文字自动换行                  |
| .text-nowrap        | 段落中超出屏幕部分不换行                                     |
| .text-lowercase     | 设定文本小写                                                 |
| .text-uppercase     | 设定文本大写                                                 |
| .text-capitalize    | 设定单词首字母大写                                           |
| .initialism         | 显示在<abbr>元素中的文本以小号字体展示                       |
| .blockquote-reverse | 设定引用右对齐                                               |
| .list-unstyled      | 移除默认的列表样式，列表项中左对齐(<u>和<ol>中)。这个类仅适用于直接子列表项 (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式) |
| .list-inline        | 将所有列表项放置同—行                                        |
| .dl-horizontal      | 该类设置了浮动和偏移，应用于<dl>元素和<dt>元素中，具体实现可以查看实例 |
| .pre-scrollable     | 使<pre>元素可滚动scrollable                                  |



## 表格

### 表格层级

| 标签        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| `<table>`   | 为表格添加基础样式。                                         |
| `<thead>`   | 表格标题行的容器元素(<tr>)，用来标识表格列。               |
| `<tbody>`   | 表格主体中的表格行的容器元素(<tr>)。                       |
| `<tr>`      | 一组出现在单行上的表格单元格的容器元素(<td> 或 <th>)。     |
| `<td>`      | 默认的表格单元格。                                           |
| `<th>`      | 特殊的表格单元格，用来标识列或行(取决于范围和位置)。必须在 <thead> 内使用。 |
| `<caption>` | 关于表格存储内容的描述或总结。                               |

具体层级为：

```html
<table class="table">
   <caption>基本的表格布局</caption>
    
   <thead>
      <tr>
         <th>名称(表头1)</th>    
         <th>城市(表头2)</th>
      </tr>
   </thead>
    
   <tbody>
      <tr>    
         <td>Tanmay(内容第一行第一列)</td>
         <td>Bangalore(内容第一行第二列)</td>
      </tr>
      <tr>
         <td>Sachin(内容第二行第一列)</td>
         <td>Mumbai(内容第二行第二列)</td>
      </tr>
   </tbody>
    
</table>
```



### 表格类：

| 类               | 描述                                            |
| ---------------- | ----------------------------------------   |
| `.table       `    | 为任意 <`table`> 添加基本样式 (只有横向分隔线)    |
| `.table-striped `  | 在 <`tbody`> 内添加斑马线形式的条纹 (IE8 不支持) |
| `.table-bordered`  | 在 <`tbody`> 内添加斑马线形式的条纹 (IE8 不支持) |
| `.table-hover  `   | 在 <`tbody`> 内的任一行启用鼠标悬停状态           |
| `.table-condensed` | 让表格更加紧凑                                  |

都要添加`.table`的类



下表中所列出的上下文类允许您改变表格行或单个单元格的背景颜色。

| 类       | 描述                                           |
| :------- | :--------------------------------------------- |
| `.info  `  | 表示信息变化的操作。**黄色**               |
| `.active ` | 对某一特定的行或单元格应用悬停颜色。**灰色** |
| `.success `| 表示一个成功的或积极的动作。**绿色**         |
| `.warning` | 表示一个需要注意的警告。**黄色**             |
| `.danger`  | 表示一个危险的或潜在的负面动作。**红色**     |



### 响应式表格

通过把任意的 *.table* 包在 *.table-responsive* class 内，您可以让表格水平滚动以适应小型设备(小于 768px)。当在大于 768px 宽的大型设备上查看时，您将看不到任何的差别。

```html
<div class="table-responsive">
    <table class="table">
        <caption>响应式表格布局</caption>
        <thead>
        <tr>
            <th>产品</th>
            <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>产品1</td>
            <td>待发货</td>
        </tr>
        <tr>
            <td>产品2</td>
            <td>发货中</td>
        </tr>
        </tbody>
    </table>
</div>
```

## 

## 表单

### 表单布局

1. 垂直表单
2. 内联表单
3. 水平表单

#### 垂直表单

垂直表单为Bootstrap自带默认，不需要添加class

了创建基本表单的步骤：

- 向父`<form>`元素添加 *role="form"*。

  ```html
  <form role="form">
      <div>
      </div>
  </form>
  ```

- 把标签和控件放在一个带有 `class.form-group `的` <div> `中。这是获取**最佳间距**所必需的。

  ```html
  <div class="form-group">
  </div>
  ```

- 向所有的**文本元素**`<input>`、`<textarea> `和 `<select> `添加 class *.form-control*。

  ```html
  <input type="text" class="form-control" id="name" placeholder="请输入名称">
  ```

form-control:

```
宽度为100% 

设置边框为浅灰色 

控件具有4px的圆角 

设置阴影效果，元素得到焦点时，阴影和边框效果会发生变化

设置placeholder的颜色为#999
```

#### 内联表单

向左对齐的，标签并排

向` <form>`标签添加 `class.form-inline`

**PS：默认情况下，Bootstrap 中的 input、select 和 textarea 有 100% 宽度。在使用内联表单时，您需要在表单控件上设置一个宽度**

使用 class *.sr-only*，您可以隐藏内联表单的标签



#### 水平表单

创建步骤;

- 向父` <form>` 元素添加` class.form-horizontal`
- 把标签和控件放在一个带有` class.form-group `的 `<div> `中。
- 向标签添加` class.control-label`

### 支持表单的控件

##### `input` 输入框

包括：*text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel* 和 *color*

适当的 *type* 声明是必需的

**其中，`value`属性表示该输入框默认的文字，输入时需删除。**

**而`placeholder`则为空白时的提示，聚焦输入框消失**



##### `textarea`文本框多行

##### `checkbox`复选框

##### `radio`单选框

**对一系列复选框和单选框使用 `.checkbox-inline` 或 `.radio-inline` class，控制它们显示在同一行上**

```html
<label class="checkbox-inline">
      <input type="radio"  id="optionsRadios4" value="option2"> 选项 2   
</label>
```

##### `select`下拉选择框

```html
<form role="form">
   <div class="form-group">
      <label for="name">选择列表</label>
      <select class="form-control">
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
      </select>

      <label for="name">可多选的选择列表</label>
      <select multiple class="form-control">
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
      </select>
   </div>
</form>
```

multiple：允许用户选择多个选项

###  静态控件

```html
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword" class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" 
         placeholder="请输入密码">
    </div>
  </div>
</form>
```

当您需要在一个水平表单内的表单标签后放置纯文本时，请在 `<p> `上使用 class *.form-control-static*。

### 禁止的字段集

#### 区域型禁止

```html
<fieldset disabled>
    
</fieldset>
```

在`<fieldset disabled>`中添加的所有控件都会被禁止操作。

#### 单条禁止

若想对某一个组件设置单独的禁止，就需要在需要的组件里新添加`disabled`属性

### 表单控件大小

使用 `class *.input-lg`* 和` .col-lg-* `来设置表单的高度和宽度

`input-lg`大

`input-sm`小

`col-lg-*`宽度

### 帮助文本

`<span class="help-block">`一个较长的帮助文本块，超过一行，  需要扩展到下一行。本实例中的帮助文本总共有两行。`</span>`

`help-block`

## 按钮Button

| 类           | 描述                                     |          |
| :----------- | :--------------------------------------- | -------- |
|` .btn        ` | 为按钮添加基本样式                       |          |
| `.btn-default `| 默认/标准按钮                            |          |
| `.btn-primary `| 原始按钮样式（未被操作）                 | 深蓝     |
| `.btn-success` | 表示成功的动作                           | 绿色     |
|` .btn-info   ` | 该样式可用于要弹出信息的按钮             | 蓝色     |
|` .btn-warning` | 表示需要谨慎操作的按钮                   | 黄色     |
|` .btn-danger ` | 表示一个危险动作的按钮操作               | 红色     |
|` .btn-link   ` | 让按钮看起来像个链接 (仍然保留按钮行为） | 链接样式 |
| `.btn-lg     ` | 制作一个大按钮                           | 大按钮   |
| `.btn-sm     ` | 制作一个小按钮                           | 小按钮   |
|` .btn-xs     ` | 制作一个超小按钮                         | 超小按钮 |
| `.btn-block  ` | 块级按钮(100%的宽度)                     |          |
|` .active    `  | 按钮被点击                               |          |
|`.disabled  ` | 禁用按钮                                 |          |



## 图片

三种可对图片应用简单样式的class

1. `img-rounded`为图片添加圆角
2. `img-circle`将图片变为圆形 
3. `img-thumbnail`缩略图功能
4. `img-responsive`图片响应式 (将很好地扩展到父元素)



## Bootstrap 辅助类

### 文本

以下不同的类展示了不同的文本颜色。如果文本是个链接鼠标移动到文本上会变暗：

| 类            | 描述                        |
| :------------ | :-------------------------- |
| `.text-muted  ` | "text-muted" 类的文本样式   |
|` .text-primary `| "text-primary" 类的文本样式 |
|` .text-success` | "text-success" 类的文本样式 |
| `.text-info   ` | "text-info" 类的文本样式    |
| `.text-warning` | "text-warning" 类的文本样式 |
| `.text-danger ` | "text-danger" 类的文本样式  |

### 背景

以下不同的类展示了不同的背景颜色。 如果文本是个链接鼠标移动到文本上会变暗：

| 类          | 描述                             |
| :---------- | :------------------------------- |
| `.bg-primary` | 表格单元格使用了 "bg-primary" 类 |
| `.bg-success` | 表格单元格使用了 "bg-success" 类 |
| `.bg-info  `  | 表格单元格使用了 "bg-info" 类    |
| `.bg-warning `| 表格单元格使用了 "bg-warning" 类 |
| `.bg-danger  `| 表格单元格使用了 "bg-danger" 类  |

### 其他

| 类                 | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| `.pull-left        ` | 元素浮动到左边                                               |
| `.pull-right       ` | 元素浮动到右边                                               |
| `.center-block     ` | 设置元素为 display:block 并居中显示                          |
| `.clearfix         ` | 清除浮动                                                     |
| `.show             ` | 强制元素显示                                                 |
| `.hidden           ` | 强制元素隐藏                                                 |
| `.sr-only         `  | 除了屏幕阅读器外，其他设备上隐藏元素                         |
| `.sr-only-focusable` | 与 .sr-only 类结合使用，在元素获取焦点时显示(如：键盘操作的用户) |
| `.text-hide        ` | 将页面元素所包含的文本内容替换为背景图                       |
| `.close            ` | 显示关闭按钮                                                 |
| `.caret            ` | 显示下拉式功能                                               |                                                              |



## 响应式实用工具

实现对移动设备的友好开发

## 字体图标

在fonts文件夹下可、可以找到字体图标

### 用法

只需要添加class即可，例如：

```html
<span class="glyphicon glyphicon-search"></span>
<button type="button" class="btn btn-default btn-sm">
  <span class="glyphicon glyphicon-user"></span> 
    User
</button>
```

### 定制字体图标

通过改变字体的尺寸，颜色 和应用文本阴影来进行定制图标



## 下拉菜单

如需使用下拉菜单，只需要在 class **.dropdown** 内加上下拉菜单即可