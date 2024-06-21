import type { User } from "./types.ts";

// use type to define the return type of a function
function getUser(): User {
  return { name: "John", id: 1 };
}

// use type to define the parameter type of a function
function printUser(user: User): void {
  console.log('user', user)
}

// pass a user object to the function that conforms to type shape
printUser({ name: 'John', id: 1 })

// unknown type
function getUserUnknown(): unknown {
  return { name: "John", id: 1, bacon: 'good' };
}

// declare type of user from function that returns unknown
const user = getUserUnknown() as User;
user.name
