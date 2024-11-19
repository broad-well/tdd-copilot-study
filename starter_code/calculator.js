class PrefixCalculator {
    // Helper function: Check if a token is a valid operator
    isOperator(token) {

    }

    // Helper function: Check if a token is a valid operand (integer)
    isOperand(token) {

    }

    // Helper function: Perform an operation
    performOperation(operator, a, b) {

    }

    // Evaluate the prefix expression
    evaluate(expression) {
        
    }
}

// Example Usage
const calc = new PrefixCalculator();

// Valid example
console.log(calc.evaluate("- * 4 5 6")); // Output: 14

// Invalid example
try {
    console.log(calc.evaluate("+ 5")); // Should throw an Error
} catch (e) {
    console.error(e.message); // Output: Invalid expression
}
