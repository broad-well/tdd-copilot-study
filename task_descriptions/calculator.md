# Prefix Calculator

Please write an API for a class named `PrefixCalculator` that implements a prefix calculator capable of performing basic arithmetic operations (`+`, `-`, `*`, and integer division `/`). The calculator uses a stack-based approach to evaluate the prefix expression. For instance, "* 4 5" evaluates to 20. 

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does.


type Operation = "+" | "-" | "*" | "/"
type Item = Operation | Number

class PrefixCalculator {
static function main(expression: string): number;

// throw exception if malformed (syntax)
// e.g 1~23
static function parse(expression: string): Array<Item>;

// throw exception if malformed (semantic)
// e.g. + 1 2 3 (too many arguments)
static function evaluate(items: Array<Item>): number;

}

