"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// use type to define the return type of a function
function getUser() {
    return { name: "John", id: 1 };
}
// use type to define the parameter type of a function
function printUser(user) {
    console.log('user', user);
}
// pass a user object to the function that conforms to type shape
printUser({ name: 'John', id: 1 });
// unknown type
function getUserUnknown() {
    return { name: "John", id: 1, bacon: 'good' };
}
// declare type of user from function that returns unknown
var user = getUserUnknown();
user.name;
