# Prefix Calculator

Please write an API for a class named `PrefixCalculator` that implements a prefix calculator capable of performing basic arithmetic operations (`+`, `-`, `*`, and integer division `/`). The calculator uses a stack-based approach to evaluate the prefix expression. For instance, "* 4 5" evaluates to 20. 

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does. 

```
* 4 5
* + 1 2 3 => 9
```

## Public API

### `eval(e: string): Result<number, Error>`

Takes an expression as a string, evaluates the expression and returns the result.

- parse the string into AST(?)
    - AST (op, e1, e2)
    - This can fail for following reasons
        - invalid # of operands
        - 
- recursively evaluate AST
    - 

- Error = DivideByZero | InvalidNumberOfOperands | InvalidCharacter | ParseError
