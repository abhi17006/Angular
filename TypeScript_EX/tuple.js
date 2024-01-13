//it has always Numeric or String types, fixed length array
var person_obj = {
    name: "AB",
    age: 28,
    role: [2, 'author']
};
console.log(person_obj.role);
person_obj.role.push(1, 'admin');
console.log(person_obj.role);
