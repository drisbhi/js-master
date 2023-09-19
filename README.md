# Master-JS

---

1. what is diffrence between == and === in js ?
   In JavaScript, the == and === operators are used for comparison, but they have different behaviors.
   == (Equality Operator):
   The == operator checks for equality between two values, allowing for type coercion.
   It converts the operands to a common type before making the comparison.
   If the two values are of different types, JavaScript attempts to convert them to a common type
   based on certain rules. For example, it may convert a string to a number if the other operand is a number.
   After conversion, it compares the values. The == operator returns true if the converted values are equal
   and false otherwise.

console.log(5 == '5'); // true, because '5' is converted to the number 5
console.log(true == 1); // true, because true is converted to the number 1
console.log(null == undefined); // true, because they are considered equal

=== (Strict Equality Operator):
The === operator, also known as the strict equality operator, checks for equality between
two values without performing any type coercion. It compares both the values and their types.
The === operator returns true if the values are equal and of the same type, and false otherwise.
Example:
console.log(5 === '5'); // false, because the types are different (number vs. string)
console.log(true === 1); // false, because the types are different (boolean vs. number)
console.log(null === undefined); // false, because the types are different (object vs. undefined)
In general, it is recommended to use the === operator (strict equality) as it avoids unexpected type conversions
and leads to more predictable code. It's considered a good practice to compare values and types explicitly
whenever possible.

---
