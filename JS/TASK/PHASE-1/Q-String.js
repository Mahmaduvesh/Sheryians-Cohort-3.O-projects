// ## Strings

// 1. Create a string and print its length.
let str1 = "uvesh ";
console.log(str1.length);

// 2. Convert a string into uppercase.
let str2 = "hello worlD Good Morning"
console.log(str2.toUpperCase());

// 3. Convert a string into lowercase.
console.log(str2.toLowerCase());

// 4. Check if a string includes the word `"JavaScript"`.
console.log(str2.includes("JavaScript"));


// 5. Extract the word `"World"` from `"Hello World"`.
let str5 = "hello world";
console.log(str5.slice(6));


// 6. Replace `"apple"` with `"mango"` in a sentence.
let fruits = "apple juice is amazing"
console.log(fruits.replace("apple","mango"));

// 7. Split `"HTML,CSS,JS"` into an array.
let lang = ["html","css","js"];
console.log(lang);


// 8. Remove extra spaces from a string.
let str8 = "   he ll o      "
console.log(str8.trim());

// 9. Repeat the word `"Hi"` 5 times.
let str9 = "hi";
console.log(str9.repeat(5));


// 10. Print the first character of a string.
let str10 = "Good Morning";
console.log(str10.charAt(0));


// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let name = "Aman";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old`);