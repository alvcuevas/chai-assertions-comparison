exports.addTested = function(value) {
    var result = value + ' tested';
    return result;
};

exports.sum = function(value) {
    var result = value + 2;
    return result;
}

exports.triangleArea = function(a, b) {
    var area = (a * b) / 2;
    return result = {
        value: area,
        text: `The triangle area is ${area}`
    }
}
