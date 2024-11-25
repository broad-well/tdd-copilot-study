const PrefixCalculator = require('/workspaces/tdd-copilot-study/implementations/calculator.js');

describe('PrefixCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new PrefixCalculator();
    });

    describe('isOperator', () => {
        it('should return true for valid operators', () => {
            expect(PrefixCalculator.isOperator('+')).toBe(true);
            expect(PrefixCalculator.isOperator('-')).toBe(true);
            expect(PrefixCalculator.isOperator('*')).toBe(true);
            expect(PrefixCalculator.isOperator('/')).toBe(true);
        });

        it('should return false for invalid operators', () => {
            expect(PrefixCalculator.isOperator('x')).toBe(false);
            expect(PrefixCalculator.isOperator('%')).toBe(false);
            expect(PrefixCalculator.isOperator('')).toBe(false);
        });
    });

    describe('isOperand', () => {
        it('should return true for valid operands', () => {
            expect(PrefixCalculator.isOperand('42')).toBe(true);
            expect(PrefixCalculator.isOperand('-7')).toBe(true);
            expect(PrefixCalculator.isOperand('0')).toBe(true);
        });

        it('should return false for invalid operands', () => {
            expect(PrefixCalculator.isOperand('42.5')).toBe(false);
            expect(PrefixCalculator.isOperand('abc')).toBe(false);
            expect(PrefixCalculator.isOperand('')).toBe(false);
        });
    });

    describe('performOperation', () => {
        it('should perform addition', () => {
            expect(PrefixCalculator.performOperation('+', 3, 5)).toBe(8);
        });

        it('should perform subtraction', () => {
            expect(PrefixCalculator.performOperation('-', 9, 4)).toBe(5);
        });

        it('should perform multiplication', () => {
            expect(PrefixCalculator.performOperation('*', 6, 7)).toBe(42);
        });

        it('should perform division with integer results', () => {
            expect(PrefixCalculator.performOperation('/', 10, 2)).toBe(5);
        });

        it('should throw an error for division by zero', () => {
            expect(() => PrefixCalculator.performOperation('/', 10, 0)).toThrow('Division by zero');
        });

        it('should throw an error for unsupported operators', () => {
            expect(() => PrefixCalculator.performOperation('%', 10, 3)).toThrow('Unsupported operator: %');
        });
    });

    describe('evaluate', () => {
        it('should evaluate valid prefix expressions', () => {
            expect(calculator.evaluate('+ 3 5')).toBe(8);
            expect(calculator.evaluate('- 9 4')).toBe(5);
            expect(calculator.evaluate('* 6 7')).toBe(42);
            expect(calculator.evaluate('/ 10 2')).toBe(5);
            expect(calculator.evaluate('+ * 2 3 4')).toBe(10); // Equivalent to (2 * 3) + 4
            expect(calculator.evaluate('- + * 2 3 4 5')).toBe(5); // Equivalent to ((2 * 3) + 4) - 5
        });

        it('should handle negative numbers in prefix expressions', () => {
            expect(calculator.evaluate('+ -3 -5')).toBe(-8);
            expect(calculator.evaluate('- -9 4')).toBe(-13);
            expect(calculator.evaluate('* -6 7')).toBe(-42);
        });

        it('should throw an error for invalid expressions', () => {
            expect(() => calculator.evaluate('')).toThrow('Expression must be a non-empty string');
            expect(() => calculator.evaluate('+ 3')).toThrow('Invalid expression: insufficient operands');
            expect(() => calculator.evaluate('+ 3 a')).toThrow('Invalid token: a');
            expect(() => calculator.evaluate('+ 3 5 7')).toThrow('Invalid expression: mismatched operators and operands');
        });

        it('should throw an error for non-string expressions', () => {
            expect(() => calculator.evaluate(123)).toThrow('Expression must be a non-empty string');
            expect(() => calculator.evaluate(null)).toThrow('Expression must be a non-empty string');
            expect(() => calculator.evaluate(undefined)).toThrow('Expression must be a non-empty string');
        });
    });
});
