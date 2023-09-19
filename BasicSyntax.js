/**
    The following content explains the basic syntax rules 
    that has to be followed in the JavaScript programming language.

    They are no-op rules, which means that we have to abide by them.
    Still, starting JavaScript is not that hard after all.
    So, here are some key points:

    1. Statements end with a semicolon (;).​​

    2. Code blocks are enclosed in curly braces ({ }).​​

    3. JavaScript is case-sensitive (e.g., myVariable is different from myvariable).​​

    4. Comments can be single-line (//) or multi-line (\/* *\/).​
*/

/**
 * Variable Declaration Options
 * var   - try not to use them, they are leftover from the old versions of EcmaScript versions (pre 2015 - ES6).
 * let   - use them when you declare primitives and complex types that you expect to be reassigned at some point.
 * const - use them when you do not expect the value of the primitive or the complex type itself to be reassigned.
 */

/**
 * Functions
 *** reusable blocks of code that can be defined once and executed (invoked) multiple times. ***
 */

/* Function Declaration Statement*/
function myFunction() {
  // We are inside the codeblock of the function.
  // Everything that is here will be executed, once this function is called.
}

/* Function Execution Statement */
myFunction();

/**
 * Loops
 *** structures that allow you to repeat a block of code multiple times until a certain condition is met. ***
 */

/* Basic for Loop Declaration Statement */
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

/**
 * Conditionals
 *** control structures that allow you to make decisions in your code based on specified conditions. ***
 */
/* Basic if-else Conditional Statement */
if (condition) {
  // If the condition is met, this code block will be executed.
} else {
  // If the condition is NOT met, then this code block will be executed.
}
