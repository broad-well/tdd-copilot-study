# URL Shortener

Please create a class named `URLShortener` that provides the functionalities of a conventional URL shortener through its interface. The class's interface should contain the following:

- **Constructor**
  - A no-argument constructor that initializes the `URLShortener` to contain no shortened URLs.
  - A constructor that receives one JS object as its argument. The object maps shortened keys to full URLs. Example: `new URLShortener({fhqbr: 'https://google.com', abqrf: 'https://ucsd.edu'})`.
- `shorten(url, desiredKey?)`
  - A member function that receives 1 to 2 string arguments. The first string argument specifies the full-length URL to be shortened. The second string argument, if present, specifies a desired shortened key that maps to the full-length URL.
  - If no second argument is given, map a randomly generated key to the given URL. Make sure that the key doesn't already map to a different URL. Return the key.
  - If a second argument is given, try to map the desired key to the given URL. If the desired key is longer than 8 characters or shorter than 3 characters, reject the key by throwing a `RangeError`. If the desired key already maps to a different URL, reject the key by throwing a `KeyError`. Otherwise, map the desired key to the given URL and return it.
- `visit(key, analytics)`
  - A member function that receives 1 string argument followed by 1 Object argument. The first argument specifies the key to look up, as if a user is trying to visit a shortened link. The second argument specifies details about the user. Assume that the second argument contains the following keys:
    - `browser`: `"chrome"`, `"firefox"`, or `"safari"`,
    - `mobile`: `true` or `false`
  - If the key maps to a full-length URL in this shortener, return the full-length URL. Otherwise, return `null`.
- `visitsTo(key)`
  - A member function that receives 1 string argument specifying the key to find analytics for.
  - Gather summary statistics for the set of all values of `analytics` in calls to `visit(k, analytics)` (where `k = key`) since the `URLShortener`'s creation.
  - Return the distribution of values for `browser` and `mobile`. The return value should have the following type: `{browser: {chrome: number, firefox: number, safari: number}, mobile: number}`. Each number should be between 0 and 1 and denote some proportion of visits.

## Examples

```js
const sht = new URLShortener();
const ucsdKey = sht.shorten('ucsd.edu');

const visitUrl = sht.visit(ucsdKey, {
    browser: 'firefox',
    mobile: false,
});
// visitUrl === 'ucsd.edu'

sht.visitsTo(ucsdKey); /* -> {
    browser: {chrome: 0, firefox: 1, safari: 0},
    mobile: 0,
} */
```

```js
const sht = new URLShortener();
const ucsdKey = sht.shorten('ucsd.edu');

sht.shorten('umich.edu', ucsdKey); // should throw a KeyError
sht.shorten('umich.edu', 'um'); // should throw a RangeError because 'um' is not at least 3 characters long
```

