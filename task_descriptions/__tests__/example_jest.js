// EXPLANATION

// describe(): Used to group related tests together. It's like a test suite for specific functionality.
// it(): Each individual test case is written inside an it() block. It defines what is being tested.
// expect(): This is the assertion function. You use it to check if the result is what you expect.
// .toBe() is used to check for exact equality.

// Test Methods Used:
//   capitalize(): Capitalizes the first letter of a string.
//   isEmpty(): Returns true if the string is empty, and false otherwise.
//   concatenate(): Concatenates two strings together.

// to run: npm test -t [path_to_test_file]
// e.g. npm test -t task_descriptions/__tests__/example_jest.js

// Import the StringUtils class
const StringUtils = require('./StringUtils');

// Describe block to group related tests
describe('StringUtils', () => {
  
  // Test case for the capitalize method
  it('should capitalize the first letter of a string', () => {
    const result = StringUtils.capitalize('hello');
    expect(result).toBe('Hello'); // Check if the result is correct
  });

  // Test case for the isEmpty method
  it('should return true for an empty string', () => {
    const result = StringUtils.isEmpty('');
    expect(result).toBe(true); // Check if the result is true for an empty string
  });

  // Test case for the isEmpty method with non-empty string
  it('should return false for a non-empty string', () => {
    const result = StringUtils.isEmpty('hello');
    expect(result).toBe(false); // Check if the result is false for a non-empty string
  });

  // Test case for the concatenate method
  it('should concatenate two strings', () => {
    const result = StringUtils.concatenate('hello', ' world');
    expect(result).toBe('hello world'); // Check if the result is the correct concatenation
  });
});
