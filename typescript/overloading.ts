// declare the different function signatures
// and the types they accept and can return
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// define a single function with the implemenation details afterward
function add(a: any, b: any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30


// with more complex types
import type { User } from "./types.ts";

function returnUserId(user: User): string;
function returnUserId(user: User): number;

function returnUserId(user: User): any {
  return user.id;
}

returnUserId({ name: 'John', id: 1 }); // returns 1
returnUserId({ name: 'John', id: '100' }); // returns '100'
