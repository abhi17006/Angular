
//type aliases user-defined names
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//union types number | string and literal-types as-number | as-text
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        //convertr string into number using(+value)
        result = +input1 + +input2; 
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineVal = combine(30,25, "as-number");
console.log(combineVal);

const combineStringVal = combine(30,25, "as-number");
console.log(combineStringVal);

const combineNames = combine('Abhi', 'Kairavi', "as-text");
console.log(combineNames);


console.log("Using Aliases  :");
//using Aliases in the function

function combineTwo(input1 : Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        //convertr string into number using(+value)
        result = +input1 + +input2; 
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineValAl = combineTwo(30,25, "as-number");
console.log(combineValAl);

const combineStringValAl = combineTwo(30,25, "as-number");
console.log(combineStringValAl);

const combineNamesAl = combineTwo('Abhi', 'Kairavi', "as-text");
console.log(combineNamesAl);
