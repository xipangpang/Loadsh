/**减少一级array嵌套深度；无脑数组扁平化 */
function _flattenDeep(array) {
    let result = [];
    array.forEach(ele => {
        if (Array.isArray(ele)) {
            result = result.concat(_flattenDeep(ele));
        } else {
            result.push(ele);
        }
    });
    return result;
};
const array = [1, [2, [3, [4]], 5]]; 
console.log(_flattenDeep(array))