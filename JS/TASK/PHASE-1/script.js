// Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
console.log("Hello JavaScript");

// 2. Print your name, age, and city using one `console.log()`.
console.log("Name : Uvesh");
console.log("Age : 24");
console.log("City : Navsari");

// 3. Print a warning message using `console.warn()`.
// warning
console.warn("this is warning message");

// 4. Print an error message using `console.error()`.
// error
console.error("this is error message");

// 5. Use `console.table()` to display an array of 5 numbers.
// table
console.table([1, 2, 3, 4, 5]);

// ## ariables

// 1. Create a variable called `studentName` and store your name in it.
let studentName = "Uvesh";
console.log("Name =>", studentName);

// 2. Create a variable `age` and print it.
let age = 24;
console.log("Age =>", age);

// 3. Create two variables and swap their values.
let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1];
console.log(num1);
console.log(num2);

// 4. Create a constant variable for `PI` and print it.
const PI = 3.14;
console.log(PI);

// 5. Declare a variable without assigning a value and print it.
let checka;
console.log(checka);

// 6. Create a variable `score` and increase it by 10.
let score = 0;
score = score + 10;
console.log(score);

// 7. Create three variables for first name, last name, and full name.
let firstName = "uvesh";
let lastName = "khalifa";
let fullName = firstName + " " + lastName;
console.log(fullName);

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
// let name = "uvesh";
// console.log(name);
// let age1 = 24;
// console.log(age1);
// let result = true;
// console.log(result);
// let todo = null;
// console.log(todo);
// let marks;
// console.log(marks);

// 2. Check the type of different variables using `typeof`.
// let name = "uvesh";
// console.log(typeof name);
// let age1 = 24;
// console.log(typeof age1);
// let result = true;
// console.log(typeof result);
// let todo = null;
// console.log(typeof todo);
// let marks;
// console.log(typeof marks);

// 3. Store your mobile number in a variable and check its type.
let moNum = +911234567891;
console.log(typeof moNum);

// 4. Create a variable with value `null` and check its type.
let department = null;
console.log(typeof department);

// 5. Create a bigint number and print it.
let bn = 10n;
console.log(typeof bn);

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
let no1 = "50";
let ans = Number(no1);
console.log(typeof no1, no1);
console.log(typeof ans, ans);

// 2. Convert the number `100` into a string.
let no2 = 100;
let ans2 = String(no2);
console.log(typeof ans2);

// 3. Convert `"true"` into a boolean.
let no3 = 1;
let no4 = 0;
console.log(Boolean(no3));
console.log(Boolean(no4));

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
// 1. Create a variable with value `"123abc"` and convert it into a number.
// 2. Use `parseInt()` on `"500px"`.

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false + 1);

let ans22 = "123abc";
console.log(Number(ans22));

let value = "500px";
let result = parseInt(value);

console.log(result);
