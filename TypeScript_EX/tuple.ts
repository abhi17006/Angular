
//it has always Numeric or String types, fixed length array


const person_obj: {
    name: string,
    age: number,
    role: [number, string]
} = {
    name:"AB",
    age:28,
    role: [2,'author']
};

console.log(person_obj.role)
person_obj.role.push(1, 'admin');

console.log(person_obj.role)