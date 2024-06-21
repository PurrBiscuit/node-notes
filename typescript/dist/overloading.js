"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// define a single function with the implemenation details afterward
function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30
function returnUserId(user) {
    return user.id;
}
returnUserId({ name: 'John', id: 1 }); // returns 1
returnUserId({ name: 'John', id: '100' }); // returns '100'
