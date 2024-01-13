//union types number | string and literal-types as-number | as-text
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //convertr string into number using(+value)
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineVal = combine(30, 25, "as-number");
console.log(combineVal);
var combineStringVal = combine(30, 25, "as-number");
console.log(combineStringVal);
var combineNames = combine('Abhi', 'Kairavi', "as-text");
console.log(combineNames);
//using Aliases in the function
function combineTwo(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //convertr string into number using(+value)
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineValAl = combineTwo(30, 25, "as-number");
console.log(combineValAl);
var combineStringValAl = combineTwo(30, 25, "as-number");
console.log(combineStringValAl);
var combineNamesAl = combineTwo('Abhi', 'Kairavi', "as-text");
console.log(combineNamesAl);
