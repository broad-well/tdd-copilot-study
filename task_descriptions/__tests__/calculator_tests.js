// Please write psuedocode for the TodoList test suite (do not run the tests). Please make your tests as comprehensive as possible.

const PrefixCalculator = require('/workspaces/tdd-copilot-study/implementations/calculator.js');

describe('PrefixCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new PrefixCalculator();
  });

  // Please write a comprehensive test suite for the PrefixCalculator class below
  // Test suite for the PrefixCalculator class

  // parsing edge cases
  describe('parse', () => {
    it('should throw an error when input is empty', () => {
      expect(() => calc.parse("")).toThrowError("Invalid input");
    });
    it('should throw an error when input is not a string', () => {
      expect(() => calc.parse(123)).toThrowError("Invalid input");
    });
    it('should throw an error when input is not a valid expression', () => {
      expect(() => calc.parse("1 2")).toThrowError("Invalid input");
    });
    // invalid number of operands
    it('should throw an error when input has too few operands', () => {
      expect(() => calc.parse("+ 1")).toThrowError("Invalid input");
    });
    it('should throw an error when input has too many operands', () => {
      expect(() => calc.parse("+ 1 2 3")).toThrowError("Invalid input");
    });
    // invalid number of operands
    it('should throw an error when input has too few operands', () => {
      expect(() => calc.parse("- 1")).toThrowError("Invalid input");
    });
    it('should throw an error when input has too many operands', () => {
      expect(() => calc.parse("- 1 2 3")).toThrowError("Invalid input");
    });
    // invalid characters
    it('should throw an error when input has invalid characters', () => {
      expect(() => calc.parse("+ 1 a")).toThrowError("Invalid input");
    });
    // invalid operator
    it('should throw an error when input has invalid operator', () => {
      expect(() => calc.parse("A 1 2")).toThrowError("Invalid input");
    });
  });

  // per operator

  // plus
  describe('add', () => {
    it('should add two numbers', () => {
      expect(calc.eval("+ 1 2")).toEqual(3);
      expect(calc.eval("+ 2 1")).toEqual(3);
    });
  });

  // minus
  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calc.eval("- 2 1")).toEqual(1);
      expect(calc.eval("- 1 2")).toEqual(-1);
    });
  });

  // multiply
  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calc.eval("* 2 3")).toEqual(6);
      expect(calc.eval("* 3 2")).toEqual(6);
    });
  });

  // divide
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calc.eval("/ 6 2")).toEqual(3);
      expect(calc.eval("/ 6 3")).toEqual(2);
    });
    it("should throw an error when dividing by zero", () => {
      expect(() => calc.eval("/ 6 0")).toThrowError("Cannot divide by zero");
    });
  });

  // nested expressions
  describe('nested expressions', () => {
    it('should evaluate nested expressions', () => {
      expect(calc.eval("+ 1 * 2 3")).toEqual(7);
      expect(calc.eval("* + 1 2 3")).toEqual(9);
    });
    // triple nested
    it('should evaluate triple nested expressions', () => {
      expect(calc.eval("+ 1 * 2 / 6 2")).toEqual(7);
    });
  });

});