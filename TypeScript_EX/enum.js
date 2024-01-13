//only availble in TS not in JavaScript
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person_enumex = {
    name: "AB",
    age: 28,
    role: Role.ADMIN
};
if (person_enumex.role == Role.ADMIN) {
    console.log("is Admin");
}
