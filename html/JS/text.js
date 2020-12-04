
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

function rgb2hex(r,g,b) {
    r = parseInt(r).toString(16);
    let color = [];
    color[0] = r;
    color[1] = g;
    color[2] = b;
    for (var i = 0; i < 3; i++) {
        for (var i = 0; i < 3; i++) {
            if (color[i] <= 16) {
                color[i] = parseInt(color[i]).toString(16);
                color[i] = '0' + color[i]
            } else {
                color[i] = parseInt(color[i]).toString(16);

            }
        }
        var rgb = '#' + color.join('')

        return rgb;

    }
}
console.log(rgb2hex(16,255,255))