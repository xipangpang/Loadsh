/**减少一级array嵌套深度。 */
function _flatten(array) {
    let result = [];
    array.forEach(ele => {
        if (Array.isArray(ele)) {
            result = result.concat(ele);
        } else {
            result.push(ele)
        }
    });
    return result;
}
const array = [1, [2, [3, [4]], 5]];
console.log(_flatten(array))