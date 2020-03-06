function myMap (arr, cb) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

module.exports = myMap