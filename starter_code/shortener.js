class URLShortener {
    constructor(initialMapping = {}) {

    }

    // Helper: Generate a random key of length 5 (can be adjusted)
    static generateRandomKey() {

    }

    // Shorten a URL
    shorten(url, desiredKey) {

    }

    // Visit a shortened URL
    visit(key, analytics) {

    }

    // Get visit statistics for a specific key
    visitsTo(key) {

    }
}

// Example Usage
const sht = new URLShortener();

// Shorten a URL
const ucsdKey = sht.shorten('https://ucsd.edu');

// Visit the URL
console.log(sht.visit(ucsdKey, { browser: 'firefox', mobile: false })); // Output: 'https://ucsd.edu'

// Add another visit
sht.visit(ucsdKey, { browser: 'chrome', mobile: false });

// Get analytics
console.log(sht.visitsTo(ucsdKey)); 
/* Output:
{
    browser: { chrome: 0.5, firefox: 0.5, safari: 0 },
    mobile: 0
}
*/

// Error cases
try {
    sht.shorten('https://umich.edu', 'um'); // Throws RangeError
} catch (e) {
    console.error(e.message); // Output: Key must be between 3 and 8 characters long
}
