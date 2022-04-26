/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定
 */

 function _difference(array,values) {
    const newArr = [];
    array.forEach(item => {
        if(!values.includes(item)){
            newArr.push(item)
        }
    });
    return newArr;
}
const array = [3,2,1];
const values = [4,2];