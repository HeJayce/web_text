//项目JS的入口文件

//导入Jquery
import $ from 'jquery'
$(function (){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function (){
        return '#' + 'D97634'
    })
})