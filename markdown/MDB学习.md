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



### 



## 网格系统

类似于表格





