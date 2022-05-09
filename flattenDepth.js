/**根据 depth 递归减少 array 的嵌套层级 */
function _flattenDepth(array, depth=1) {
    let result = [];
        array.forEach(ele => {
            if(Array.isArray(ele) && depth){
                result = result.concat(_flattenDepth(ele,depth-1));
            }else {
                result.push(ele)
            }
        });
   return result;
}
var array = [1, [2, [3, [4]], 5]];
console.log(_flattenDepth(array, 4));