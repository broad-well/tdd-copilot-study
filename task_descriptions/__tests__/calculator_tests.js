// Please write psuedocode for the TodoList test suite (do not run the tests). Please make your tests as comprehensive as possible.

const PrefixCalculator = require('/workspaces/tdd-copilot-study/implementations/calculator.js');

describe('PrefixCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new PrefixCalculator();
  });

  // parse
  it('should parse the empty string as []', () => {
    expect(calc.parse('')).toEqual([]);
  });

  it('should parse a single number', () => {
    expect(calc.parse('1')).toEqual([1]);
    expect(calc.parse('-1')).toEqual([-1]);
  });

  it('should parse a single operation', () => {
    expect(calc.parse('+')).toEqual(['+']);
    expect(calc.parse('-')).toEqual(['-']);
    expect(calc.parse('*')).toEqual(['*']);
    expect(calc.parse('/')).toEqual(['/']);
  });

  it('should parse a simple expression', () => {
    expect(calc.parse('+ 1 2')).toEqual(['+', 1, 2]);
  });

  it('should parse a more complex expression', () => {
    expect(calc.parse('+ 1 * 2 3')).toEqual(['+', 1, '*', 2, 3]);
  });

  it('should fail on malformed expressions', () => {
    expect(() => calc.parse('1~2')).toThrow();
    expect(() => calc.parse('hello')).toThrow();
    expect(() => calc.parse('1.5')).toThrow();
  });

  // evaluate
  it('should evaluate a single number', () => {
    expect(calc.evaluate([1])).toEqual(1);
    expect(calc.evaluate([-1])).toEqual(-1);
  });

  it('should evaluate plus correctly', () => {
    expect(calc.evaluate(['+', 1, 2])).toEqual(3);
    expect(calc.evaluate(['+', 1, -2])).toEqual(-1);
    expect(calc.evaluate(['+', -1, -2])).toEqual(-3);
    expect(calc.evaluate(['+', -1, 2])).toEqual(1);
  });

  it('should evaluate minus correctly', () => {
    expect(calc.evaluate(['-', 1, 2])).toEqual(-1);
    expect(calc.evaluate(['-', 1, -2])).toEqual(3);
    expect(calc.evaluate(['-', -1, -2])).toEqual(1);
    expect(calc.evaluate(['-', -1, 2])).toEqual(-3);
  });

  it('should evaluate times correctly', () => {
    expect(calc.evaluate(['*', 3, 2])).toEqual(6);
    expect(calc.evaluate(['*', 3, -2])).toEqual(-6);
    expect(calc.evaluate(['*', -3, -2])).toEqual(6);
    expect(calc.evaluate(['*', -3, 2])).toEqual(-6);
  });

  it('should evaluate divide correctly', () => {
    expect(calc.evaluate(['/', 4, 2])).toEqual(2);
    expect(calc.evaluate(['/', 4, -2])).toEqual(-2);
    expect(calc.evaluate(['/', -4, -2])).toEqual(2);
    expect(calc.evaluate(['/', -4, 2])).toEqual(-2);
    expect(calc.evaluate(['/', 2, 0])).toThrow();
  });


  it('should evaluate a more complex expression', () => {
    expect(calc.evaluate(['+', 1, '*', 2, 3])).toEqual(7);
    expect(calc.evaluate(['-', 1, '*', 2, 3])).toEqual(-5);
    expect(calc.evaluate(['*', 1, '+', 2, 3])).toEqual(5);
    expect(calc.evaluate(['/', 1, '+', 2, 3])).toEqual(0);
    expect(calc.evaluate(['/', 1, '+', 2, 0])).toEqual(0);
    expect(calc.evaluate(['/', '*',5,5, '+', 2, 0])).toEqual(12);
  });

  it('should fail on malformed expressions', () => {
    expect(() => calc.evaluate([1, 2])).toThrow();
    expect(() => calc.evaluate(['+', 1])).toThrow();
    expect(() => calc.evaluate(['+', 1, 2, 3])).toThrow();
    expect(() => calc.evaluate(['+', 1, '+', 2, 3, 4])).toThrow();
    expect(() => calc.evaluate(['+', 1, '+', 4])).toThrow();
    expect(() => calc.evaluate(['+', '+', 2, 3, 4, '+', 1])).toThrow();
    expect(() => calc.evaluate(['+','+', 4, '+', 1])).toThrow();
    expect(() => calc.evaluate([])).toThrow();
  });
});