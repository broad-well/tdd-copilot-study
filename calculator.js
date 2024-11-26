class PrefixCalculator {
    calc(query): integer {
        // split into tokens
        // init stack
    }
}

//single op tests
calc("+ 1 2").expect(3);
calc("- 1 2").expect(-1);
calc("* 1 2").expect(2);
calc("/ 1 2").expect(0);


//multi op tests
calc("+ (+ 1 2) 3").expect(6);
calc("- (* 1 2) 3").expect(-1);
calc("* (/ 1 2) 3").expect(0);


//invalid inputs
calc("1 2").expect(null);
calc("+ 1").expect(null);
calc("+ 1 2 3").expect(null);
calc("+ 1 a").expect(null);
calc("1 + 2").expect(null);
calc("+ 1 + 2").expect(null);
calc("+ 1 2 +").expect(null);

//rewrite invalid inputs, this time with "-"
calc("- 1").expect(null);
calc("- 1 2 3").expect(null);
calc("- 1 a").expect(null);
calc("1 - 2").expect(null);
calc("- 1 - 2").expect(null);
calc("- 1 2 -").expect(null);

//same for *
calc("* 1").expect(null);
calc("* 1 2 3").expect(null);
calc("* 1 a").expect(null);
calc("1 * 2").expect(null);
calc("* 1 * 2").expect(null);
calc("* 1 2 *").expect(null);

//same for /
calc("/ 1").expect(null);
calc("/ 1 2 3").expect(null);
calc("/ 1 a").expect(null);
calc("1 / 2").expect(null);
calc("/ 1 / 2").expect(null);
