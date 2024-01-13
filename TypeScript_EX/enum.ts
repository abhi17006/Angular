
//only availble in TS not in JavaScript
enum Role {
    ADMIN, READ_ONLY, AUTHOR
};
const person_enumex =  {
    name:"AB",
    age:28,
    role: Role.ADMIN
};


if(person_enumex.role === Role.ADMIN){
    console.log("is Admin");
}