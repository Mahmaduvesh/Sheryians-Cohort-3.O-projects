// 1. Add two numbers and print the result.
let no11 = 10;
let no22 = 20;
console.log(no11 + no22);

// 2. Find the remainder when 25 is divided by 4.
console.log(25 / 4);

// 3. Find the square of a number using exponent operator.
console.log(2 ** 2);

// 4. Increment a variable using `++`.
let a = 10;
console.log(a++);

// 5. Decrement a variable using `-`.
let b = 10;
console.log(a--);

// 6. Use `+=` operator to increase a variable by 20.
let num1 = 0;
num1 += 20;
console.log(num1);

let n1 = 50;
let n2 = 20;

if (n1 > n2) {
  console.log("n1 is greater:", n1);
} else if (n1 < n2) {
  console.log("n2 is greater:", n2);
} else if (n1 >= n2) {
  console.log("n1 is greater or equal");
} else if (n1 <= n2) {
  console.log("n2 is greater or equal");
}

// 8. Check if two values are strictly equal using `===`.
let aa = 10;
let bb = 10;

console.log(aa === bb);


// 9. Compare `"10"` and `10` using both `==` and `===`.
let aa = 10;
let bb = "10";

console.log(aa === bb);
console.log(aa == bb);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
let isLoggedIn = true;
let isAdmin = false;

// AND (&&)
console.log(isLoggedIn && isAdmin);

// OR (||)
console.log(isLoggedIn || isAdmin);

// NOT (!)
console.log(!isLoggedIn);