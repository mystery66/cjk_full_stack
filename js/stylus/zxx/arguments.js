// 参数不限
function sum(...args) {
    // this自动生成， 函数执行方式决定
    // arguments 所有的参数
    console.log(arguments.length);
    // 类数组， js 生成怪胎
    // Array.prototype.forEach
    let total = 0;
    Array.from(arguments).forEach(i => {
        total +=i;
    })
    // for (let i =0;i<arguments.length;i++) {
    //     total +=arguments[i];
    // }
    // let total = 0;
    // args.forEach(i =>{
    //     total += i;
    // })
    return total;
 }
console.log(sum(1,2,3,4,5,6,7,8,9,10));