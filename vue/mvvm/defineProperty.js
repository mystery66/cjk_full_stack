// var o = {}; //空对象字面量
// o.step = 1;
// var bValue = 1;

// Object.defineProperty(o,'a',{
//     // value: 7,
//     get: function() {
//         console.log('get');
//         return bValue;
       
//     },
//     set: function(val) {
//         console.log('设置了新值')
//         bValue = val;         //先执行set在get
//     }
//     // writable: false
// })
// o.a = 2;
// console.log(o.a);


// (function() {
//     //严格模式
//     'use strict';
//     console.log(this);
//     var o = [];
//     Object.defineProperty(o,'a',{
//     value: 7,
//     writable: false
// });

// console.log(o.a);
// // o.a = 25;
// // console.log(o.a);
// })()

// var o = {};
// Object.defineProperty(o,'a', {
//     value: 1,
//     enumerable: true   //是否可枚举
// });

// Object.defineProperty(o,'b', {
//     value: 2,
//     enumerable: false  
// });

// Object.defineProperty(o,'c', {
//     value: 3,
   
// });     //enumerable 默认false
//   o.d = 4;

//   console.log(Object.keys(o));
// for(var key in o) {
//   console.log(key,o[key]);
// }  
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('b'));
'use strict'
var o = {};
Object.defineProperty(o,'a',{
    configurable: false,  //配置为对象属性是否可以被删除
    get: function() {
        return 1;
    }
});
console.log(o.a);
// delete o.a;
console.log(o.a);

function Archiver() {
    var temperature = null;
    var archiv = [];
    Object.defineProperty(this,'temperature',{
        get: function() {
            console.log('get!');
            return temperature;
        },
        set: function(value) {
            temperature = value
        }
    })
    // var data = {
    //     age: 19,
    //     name: '凯凯',
    // }
    // for(let key in data) {
    //     Object.defineProperty(data,key, {
    //         get:function() {
    //             console.log('get!');
    //             return data[key];
    //         },
    //         set: function(newVal) {
    //             console.log('set!');
    //             data[key] = newVal;
    //         }
    //     })
    // }
    // data.age = 20;
}
var arc = new Archiver();
arc.temperature = 38;
console.log(arc.temperature);