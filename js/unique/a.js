const arr = [1,2,3,41,4,5,3];
function unique(arr) {
    // 严谨性
    if(!Array.isArray(arr)) {
        console.log("type error");
        return ;
    }
    // 准备一个空数组， 结果数组，没有重复的元素的
    const reslutArr =[arr[0]];
    for (let i=1;i<arr.length;i++)
    {
        // arr[i]
        let flag = true;
        for(let j =0;j<reslutArr.length;j++) {
            if (arr[i] === reslutArr[j]) {
                flag = false;
                break;
            } 
            if (flag) {
                reslutArr.push(arr[i]);
            }
           
        }
    }
    return reslutArr;
}
console.log(unique(arr));
