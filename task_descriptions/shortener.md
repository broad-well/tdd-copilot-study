
# URL Shortener

Please create a class named `URLShortener` that provides the functionalities of a conventional URL shortener through its interface. The class's interface should contain the following:

## Implementation Requirements

1. **Constructor**
    - **No-argument Constructor**
        1. Initializes the `URLShortener` to contain no shortened URLs.
    - **Constructor with URL Map**
        2. Accepts a single JavaScript object that maps shortened keys to full URLs.
            - Example: `new URLShortener({fhqbr: 'https://google.com', abqrf: 'https://ucsd.edu'})`.

2. **`shorten(url, desiredKey?)`**
    - **Arguments**
        1. Receives 1 to 2 string arguments:
            - The first specifies the full-length URL to be shortened.
            - The optional second specifies a desired shortened key that maps to the full-length URL.

    - **Functionality**
        2. If no second argument is provided:
            - Map a randomly generated key to the given URL, ensuring the key does not already map to another URL.
            - Return the generated key.

        3. If a second argument is provided:
            - Validate the key:
                1. Throw a `RangeError` if the key is shorter than 3 or longer than 8 characters.
                2. Throw a `KeyError` if the key already maps to a different URL.
            - Map the desired key to the given URL and return it.

3. **`visit(key, analytics)`**
    - **Arguments**
        1. The first string argument specifies the key being accessed.
        2. The second argument is an object containing analytics data:
            - `browser`: `"chrome"`, `"firefox"`, or `"safari"`
            - `mobile`: `true` or `false`

    - **Functionality**
        3. If the key maps to a full-length URL, return the URL.
        4. If the key does not exist, return `null`.

4. **`visitsTo(key)`**
    - **Arguments**
        1. Accepts a single string argument specifying the key for which to gather analytics.

    - **Functionality**
        2. Gather summary statistics for all calls to `visit(k, analytics)` where `k = key`.
        3. Return an object representing the distribution of `browser` and `mobile` values:
            ```
            {
                browser: {chrome: number, firefox: number, safari: number},
                mobile: number
            }
            ```
        4. Each number is a proportion between 0 and 1.

## Examples

### Shortening URLs
```javascript
const sht = new URLShortener();
const ucsdKey = sht.shorten('ucsd.edu');
```

### Visiting Shortened URLs
```javascript
const visitUrl = sht.visit(ucsdKey, {
    browser: 'firefox',
    mobile: false,
});
// visitUrl === 'ucsd.edu'

sht.visit(ucsdKey, {
    browser: 'chrome',
    mobile: false,
});
```

### Analytics
```javascript
sht.visitsTo(ucsdKey); /* -> {
    browser: {chrome: 0.5, firefox: 0.5, safari: 0},
    mobile: 0,
} */
```

### Error Cases
```javascript
sht.shorten('umich.edu', ucsdKey); // Throws KeyError
sht.shorten('umich.edu', 'um'); // Throws RangeError
```
