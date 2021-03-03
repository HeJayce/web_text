
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


