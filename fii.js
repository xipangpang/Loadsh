function _fill(array=[],value, startIndex, endIndex = array.length) {
    return array.map((ele, index) => {
        if(index >= startIndex && index <= endIndex) {
            return ele = value;
        }else {
            return ele;
        }
    });
}
const array = [1, 2, 3, 5];
const value = 4;
const startIndex = 1;
const endIndex = 2;
console.log(_fill(array,value, startIndex,endIndex))