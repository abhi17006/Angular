
//recommend way to intialize
const person = {
    name:"AB",
    age:28
};

//another way 
const person1: object = {
    name:"AB",
    age:28
};

//another way2
const person2: {
    name: string,
    age: number
} = {
    name:"AB",
    age:28
};

console.log(person.name + " " + person.age);