/**compact(array)
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 */
function _compact (arr) {
    const newArr = [];
    if(arr === null) return newArr;
    for (let i = 0; i<arr.length; i++) {
        arr[i] ? newArr.push(arr[i]) : null
    }
    return newArr;
}
