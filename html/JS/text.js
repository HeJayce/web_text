// function isUSD(str) {
//   if(str.indexOf('$')!==0)
//   {
//     return false;
//   }
//   if(str.indexOf('$')===0)
//   {
//     //整数：
//     if(str.indexOf('.'===-1))
//     {

//     }
//   }
// }
// console.log(fizzBuzz("ad"))

// function multiply(a, b) {
//   return (a*1000)*(b*1000)/1000000;
// }
// console.log(multiply(3,0.0001))

// var scope = 'global scope';	//全局变量
// function checkScope(){
//     var scope = 'local scope';	//局部变量
//     function f(){
//         return scope;
//     }
//     return f;
// }
// checkScope()();	
// function fibonacci(n) {
//   if(n===1){
//     return 1;
//   }
//   else if (n===2)
//   {
//     return 1;
//   }
//   else{
//     return  fibonacci(n-1)+fibonacci(n-2);
//   }
// // }
// // console.log(fibonacci(10))
// function cssStyle2DomStyle(sName) {
//   var arr=sName.split('');

//   var x = arr.indexOf('-');

//   arr[x+1] = arr[x+1].toUpperCase();
//   arr.splice(x,1)


// }

// function captureThreeNumbers(str1) {
//   var str=str1.split(',');
//   for(var k=0 ; k<str.length;k++)
//   {
//     str[k]=parseFloat(str[k]);
//   }
//   var shunxuarr =[]
//   var daoxuarr = []
//   var x;
//   var y;
//   for(var i=0;i<str.length;i++)
//   {
//       if (str[i]===str[i+1]-1&&str[i+1]-1===str[i+2]-2)
//           {
//               shunxuarr.push(str[i],str[i+1],str[i+2])
//               shunxuarr = shunxuarr.join('');
//               x = i
//               break;
//           }

//     }
//     for(var i=0;i<str.length;i++)
//     {
//       if((str[i]===str[i+1]+1&&str[i+1]+1===str[i+2]+2))
//       {
//         daoxuarr.push(str[i],str[i+1],str[i+2])
//         daoxuarr =  daoxuarr.join('');
//         y = i;
//         break;
//       }
//     }
//     if()
//       return shunxuarr;
//     else if()
//       return daoxuarr;
//     else 
//       return false;
// }

// getOrderNum (str) {
//   const orderNum = []
//   for (let i = 0; i <= 7; i++) {
//     orderNum.push(i)
//     orderNum.push(i + 1)
//     orderNum.push(i + 2)
//     if (str.includes(...orderNum)) {
//       return orderNum
//       break
//     } 
//     else {
//       return false
//     }
//   }
// }

// console.log(getOrderNum('1,2,5,6,3,2,1,3,1,2,3'))
// console.log(captureThreeNumbers('1,2,5,6,3,1,3,1,2,3'))

// function count(str) {
//   str=str.replace(/\s/,'');
//   let obj ={};
//   var i=0 , j;
//   var key 
//   for (var i = 0;i<str.length;i++)
//   {
//     key = str[i]
//     if(obj.hasOwnProperty(str[i]))
//     {
//       obj[key] ++;
//     }
//     else
//     {
//       obj[key] = 1;
//     }
//   }
//   return obj;
// }
// console.log(count("hello"))
// function cssStyle2DomStyle(sName) {
//   if (sName[0]==='-')
//     {
//       sName = sName.slice(1,sName.length);
//       console.log(sName);
//     }
//   if(sName[sName.length-1]==='-')
//     {
//       sName = sName.slice(0,sName.length-1);
//     }
//   let arr = sName.split("-")


//     for(var i=1;i < arr.length;i++)
//     {
//           arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
//     }

//     return arr.join("")

//   }

// console.log(cssStyle2DomStyle('font-size-')) 
//
// function rgb2hex(r,g,b) {
//     r = parseInt(r).toString(16);
//     let color = [];
//     color[0] = r;
//     color[1] = g;
//     color[2] = b;
//     for (let i = 0; i < 3; i++) {
//         for (let i = 0; i < 3; i++) {
//             if (color[i] <= 16) {
//                 color[i] = parseInt(color[i]).toString(16);
//                 color[i] = '0' + color[i]
//             } else {
//                 color[i] = parseInt(color[i]).toString(16);
//
//             }
//         }
//         let rgb = '#' + color.join('')
//
//         return rgb;
//
//     }
// }
// console.log(rgb2hex(16,255,255))
//
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
//
// // 显示对象的数据
// console.log(person.fullName())
//
// let person1 = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
//
// let person2 = {
//     firstName:"John",
//     lastName: "Doe",
// }
// let x = person1.fullName.call(person2);  // 返回 "John Doe"
// console.log(x)

// (function (){
//     var a,b,c;
//     a = void ( b = 5, c = 7 );
//     console.log(a)
//     console.log(b)
//     console.log(c)
// })();


// x = findMax(1, 123, 500, 115, 44, 88);
// console.log(x)
// function findMax() {
//     var i, max = arguments[0];
//
//     if(arguments.length < 2) return max;
//
//     for (i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
//
// }

// setTimeout(function (){
//     console.log('1');
// },1000)
// console.log('2')

// setTimeout(function () {
//     console.log("First");
//     setTimeout(function () {
//         console.log("Second");
//         setTimeout(function () {
//             console.log("Third");
//         }, 3000);
//     }, 4000);
// }, 1000);

// new Promise(function (resolve, reject) {
//     var a = 0;
//     var b = 1;
//     if (b == 0) reject("Diveide zero");
//     else resolve(a / b);
// }).then(function (value) {
//     console.log("a / b = " + value);
// }).catch(function (err) {
//     console.log(err);
// }).finally(function () {
//     console.log("End");
// });

// new Promise(function (resolve, reject) {
//     console.log(1111);
//     resolve(2222);
// }).then(function (value) {
//     console.log(value);
//     return 3333;
// }).then(function (value) {
//     console.log(value);
//     throw "An error";
// }).catch(function (err) {
//     console.log(err);
// });

// function factorialize(num) {
//     let x = num ;
//     num = 1 ;
//     let num_before;
//     for (let i =1 ; i<=x ;i++)
//     {
//         num_before = num ;
//         num =num_before * i;
//     }
//     return num;
// }
//
// console.log(factorialize(5))


// var obj = {
//     name:"Jayce" ,
//     age:20
// }
// for (var n in obj)
// {
//     console.log(n + ":" + obj[n])
// }

// function fun(){
//     console.log(this.name);
// }
//
// var obj = {
//     name:"jayce",
//     sayName:fun
// };
// var obj2 = {
//     name:"tim",
//     sayName:fun
// };
// var name = 222;
// obj.sayName();
// fun();

// function Person(name , age){
//    var obj = new Object();
//    obj.name = name;
//    obj.age = age;
//    obj.sayName = function (){
//        console.log(this.name);
//    };
//    return obj;
// };
// var per = new Person("jayce",18);
// per.sayName();

// function myClass(){
//
// }
// myClass.prototype.a = 123;
// myClass.prototype.sayHello = function (){
//     alert("hello")
// }
// var mc = new myClass();
// var mc2 = new myClass();
// console.log(myClass.prototype);
// console.log(mc2.__proto__ == myClass.prototype);
// console.log(mc.a);


/*写入原型，否则只对当前的起作用*/
// function Person(name , age ,gender){
//     this.name = name ;
//     this.age = age ;
//     this.gender = gender;
// }
// var per = new Person("jayce",29,"man")
// // per.toString = function (){
// //     return "name:"+this.name+" age:"+this.age+" gender:"+this.gender;
// // }
// Person.prototype.toString = function (){
//     return "name:"+this.name+" age:"+this.age+" gender:"+this.gender;
// }
//
// console.log(per)


// //forEach遍历
// var arr = [1,2,3,4,5];
// arr.forEach(function (a){
//     console.log(a)
// })


//数组去重,第二种是将要删除的元素列出来
// var arr = [1,2,3,3,3,3,4,4,4,3,3,3,3,100,100,6,5,3,4,1]
// function quchong(arr){
//     var newArr = [];
//     for (var i=0 ;i < arr.length ;i++){
//         for(var j=i+1 ;j <= arr.length ;j++) {
//             if (arr[i] == arr[j]){
//                 arr.splice(j,1);
//                 j--;
//                 // newArr.push(j)
//                 // break;
//             }
//         }
//     }
//     console.log(newArr);
//     // var arrEnd = []
//     // arr.forEach(function (value,index){
//     //     if(newArr.indexOf(index)==-1)
//     //     {
//     //         arrEnd.push(arr[index])
//     //     }
//     //
//     // })
//     // return arrEnd;
//     return arr
// }
// console.log(quchong(arr))

// 利用sort进行数组的数字排序
// arr = [235,44,2,1,3,6,8,7];
// arr.sort(function(a,b){
// //前边的大
// //     if(a > b){
// //         return 1;
// //     }else if(a < b){
// //         return - 1;
// //     }else{
// //         return 0;
// //     }
//     //简写
//     return a-b;
// });
// console.log(arr)

//call方法调用
// var obj = {
//     name: "obj",
//     sayName: function () {
//         alert(this.name);
//     }
// };
// var obj2 = {
//     name: "obj2"
// }
//
// function fun(a,b) {
//     console.log(a);
//     console.log(b);
//
// }
// fun.call(obj,2,3);

//正则表达式，忽略大小写去找a
// var reg  = new RegExp("a","i")
// var str = "sidfsdfsdfsdf";
//
//
// //正则简写版
// reg = /a/i;
// console.log(reg.test(str))
