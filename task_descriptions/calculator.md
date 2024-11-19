# Prefix Calculator

Please create a class named `PrefixCalculator` that implements a prefix calculator capable of performing basic arithmetic operations (`+`, `-`, `*`, and integer division `/`). The class should provide the following functionalities:

## Implementation Requirements

1. **Helper Functions**
    - Create the following utility functions as part of the class or as separate internal helpers:
        1. **`isOperator(token)`**:
            - Returns `true` if `token` is one of the valid operators (`+`, `-`, `*`, `/`).
        2. **`isOperand(token)`**:
            - Returns `true` if `token` is a valid integer (of the format: -1, 0, or 1).
        3. **`performOperation(operator, a, b)`**:
            - Performs the operation specified by `operator` on operands `a` and `b`.
            - Handles division by zero by throwing an `Error`.

2. **`evaluate(expression)`**
    - Implement a member function that receives a single string argument, `expression`, which represents a prefix expression. The function should:
        1. Evaluate the expression and return the result as an integer.
        2. Support the following operators:
            - `+` (addition)
            - `-` (subtraction)
            - `*` (multiplication)
            - `/` (integer division, i.e. round down and discard remainder)
        3. Process space-separated tokens from left to right, adhering to prefix notation rules.
        4. Throw an `Error` in the following cases:
            - The expression contains invalid tokens (neither operators nor integers).
            - The expression is invalid due to a mismatch between operators and operands.
            - Division by zero occurs.

## Example Usage
```javascript
const calc = new PrefixCalculator();

// Valid example
console.log(calc.evaluate("- * 4 5 6")); // Output: 14

// Invalid example
try {
    console.log(calc.evaluate("+ 5")); // Should throw an Error
} catch (e) {
    console.error(e.message); // Output: Invalid expression
}
```

### Notes
- Assume all input is provided as valid strings (no need to handle non-string inputs).
- Use a stack-based approach to evaluate the prefix expression.
