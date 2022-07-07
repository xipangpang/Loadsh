let last = function (array) {
    if(!array instanceof Array) throw '该值不是函数'
    if (!array.length) return [];
    return array[array.length-1];
}