/**
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 */
function _drop(array,num=1) {
    if(num > array.length){
        return [];
    } 
    const newArr = [];
    array.forEach((ele,index) => {
        if(num <index+1) {
            newArr.push(ele);
        }
    });
    return newArr;
}
const arr = [1, 2, 3];
const num = -1;
_drop(arr, num)