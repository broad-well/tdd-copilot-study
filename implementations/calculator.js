class PrefixCalculator {
    /**
     * Checks if a token is a valid operator.
     * @param {string} token
     * @returns {boolean}
     */
    static isOperator(token) {
        return ["+", "-", "*", "/"].includes(token);
    }

    /**
     * Checks if a token is a valid operand (integer).
     * @param {string} token
     * @returns {boolean}
     */
    static isOperand(token) {
        return /^-?\d+$/.test(token);
    }

    /**
     * Performs the operation specified by the operator on operands a and b.
     * @param {string} operator
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static performOperation(operator, a, b) {
        switch (operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b === 0) throw new Error("Division by zero");
                return Math.floor(a / b); // Integer division
            default:
                throw new Error(`Unsupported operator: ${operator}`);
        }
    }

    /**
     * Evaluates a prefix expression.
     * @param {string} expression
     * @returns {number}
     */
    evaluate(expression) {
        if (!expression || typeof expression !== "string") {
            throw new Error("Expression must be a non-empty string");
        }

        const tokens = expression.trim().split(/\s+/);
        const stack = [];

        // Process tokens from right to left for prefix notation
        for (let i = tokens.length - 1; i >= 0; i--) {
            const token = tokens[i];

            if (PrefixCalculator.isOperand(token)) {
                stack.push(parseInt(token, 10));
            } else if (PrefixCalculator.isOperator(token)) {
                if (stack.length < 2) {
                    throw new Error("Invalid expression: insufficient operands");
                }

                const a = stack.pop();
                const b = stack.pop();
                const result = PrefixCalculator.performOperation(token, a, b);
                stack.push(result);
            } else {
                throw new Error(`Invalid token: ${token}`);
            }
        }

        if (stack.length !== 1) {
            throw new Error("Invalid expression: mismatched operators and operands");
        }

        return stack.pop();
    }
}