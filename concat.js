/** concat(array, [values])
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 */

 function _concat() {
    var length = arguments.length, // 获取传值的内容
      arg = Array(length - 1), // 赋值长度一致的数组
      array = arguments[0], // 获取第一项
      index = length 
        while(index--){
            // 往arg里面塞数值
            arg[index - 1] = arguments[index]
        }
    return arrayPush(Array.isArray(array) ? copyArray(array) : [array], baseFlatten(arg)) // 判断第一项是否是数组，如果不是数组的话，转成数组，如果是数组就复制一下
  }

  function copyArray(array) {
    if (Object.prototype.toString.call(array) !== '[object Object]'
        && Object.prototype.toString.call(array) !== '[object Array]')
        {
            return array;
         }
    const newArray = Array.isArray(array) ? [] : {};
    // 利用递归深拷贝
    Object.keys(array).forEach((key) => 
       (newArray[key] =
        array[key] instanceof Object ? copyArray(array[key]) : array[key])
    )
    return newArray;
}
  // 打平
  function baseFlatten(array) {
    var index = -1,
        length = array.length,
        newArray = []
    console.log(array)
    console.log(length)
    while (++index < length) {
      var value = array[index]
      if (Array.isArray(value)) {
        arrayPush(newArray, value)
      } else {
        newArray[newArray.length] = value
      }
    }
    return newArray
  }
  
  function arrayPush(array, value) {
      var index = -1,
      arrayLength = array.length,
      valueLength = value.length
    while (++index < valueLength) {
      array[arrayLength + index] = value[index]
    }
    return array
  }
