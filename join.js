function join (array, sep) {
    if (array.length === 0) return '[]';
    let str = '';
    for (let i = 0; i < array.length; i++) {
            // 判断是不是Object
           if (typeof array[i] === 'object') {
               if (i === 0) {
                    str = str + JSON.stringify(array[i]);
               } else {
                    str = str + sep + JSON.stringify(array[i]);
               }
            // 避免undefined
           } else if(typeof array[i] === 'undefined') {
                if(i !== 0) str = str + sep;
           }else {
                if(i === 0) {
                    str = str + array[i];
                } else {
                    str = str + sep + array[i];
                }
           }
        }
    return str;
}