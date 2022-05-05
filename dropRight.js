/**创建一个切片数组，去除array尾部的n个元素。（n默认值为1。） */
function _dropRight(arr,num=1) {
    let len = arr.length;
    if(num > arr.length ) {
        return [];
    }
    const newArr = [];
    array.forEach((ele,index)=>{
        if(num  < len - index) {
            newArr.push(ele);
        }
    });
    return newArr;
}

const array = [1,2,3];
// const num = ;
console.log(_dropRight(array));