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

左右外边距（margin-right、margin-left）设置为自动

内边距（padding）是固定宽度（15px）

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

![image-20201217145840249](C:\Users\hejay\AppData\Roaming\Typora\typora-user-images\image-20201217145840249.png)

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

| 标签      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| <table>   | 为表格添加基础样式。                                         |
| <thead>   | 表格标题行的容器元素（<tr>），用来标识表格列。               |
| <tbody>   | 表格主体中的表格行的容器元素（<tr>）。                       |
| <tr>      | 一组出现在单行上的表格单元格的容器元素（<td> 或 <th>）。     |
| <td>      | 默认的表格单元格。                                           |
| <th>      | 特殊的表格单元格，用来标识列或行（取决于范围和位置）。必须在 <thead> 内使用。 |
| <caption> | 关于表格存储内容的描述或总结。                               |