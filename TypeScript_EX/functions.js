function addNo(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
//callaback function and types
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(addNo(5, 12));
//function types
var combineValues;
combineValues = addNo;
console.log("Using function types : " + combineValues(6, 8));
addAndHandle(10, 20, function (result) {
    console.log("function callback and types : " + result);
});
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occurred!', 500);
