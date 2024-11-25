class URLShortener {
    /**
     * Construct a URL shortener from an optional set of existing mappings.
     * @param {{[shortHash: string]: string}} urls Existing mappings from short hashes to URLs
     */
    constructor(urls = {}) {
        this.urls = {};
        for (const [key, value] of Object.entries(urls)) {
            this.urls[key] = { target: value, count: 0 };
        }
    }

    /**
     * Shorten a URL and return the generated hash.
     * If a desired hash is specified, it will be used if available.
     * 
     * @param {string} url The URL to shorten
     * @param {string} desiredHash The desired hash for the URL
     * @returns {string} The generated hash, which might be different from the desired hash
     */
    shorten(url, desiredHash = undefined) {
        if (!url || typeof url !== "string") {
            throw new Error("URL must be a non-empty string");
        }
        if (desiredHash !== undefined && typeof desiredHash !== "string") {
            throw new Error("Desired hash must be a string, if specified");
        }

        const hash = this.#generateRandomHash(desiredHash);
        this.urls[hash] = { target: url, count: 0 };
        return hash;
    }

    /**
     * Resolve a shortened hash to find its associated URL.
     * 
     * @param {string} hash The hash to visit
     * @returns The URL associated with the hash
     */
    visit(hash) {
        if (!hash || typeof hash !== "string" || !(hash in this.urls)) {
            throw new Error("Invalid or missing hash");
        }

        this.urls[hash].count++;
        return this.urls[hash].target;
    }

    /**
     * Retrieve the number of visits made to the given hash.
     * 
     * @param {string} hash The hash to count visits for
     * @returns The number of visits to the hash
     */
    visitCount(hash) {
        if (!hash || typeof hash !== "string" || !(hash in this.urls)) {
            throw new RangeError("Invalid or missing hash");
        }
        return this.urls[hash].count;
    }

    /**
     * Retrieve all shortened URLs and their targets.
     * @returns {Record<string, string>} A mapping of all shortened URLs to their targets
     */
    allLinks() {
        return Object.fromEntries(Object.entries(this.urls).map(([key, value]) => [key, value.target]));
    }

    #generateRandomHash(desiredHash = undefined) {
        const rand = desiredHash ?? Math.random().toString(36).substring(2, 10);
        if (rand in this.urls) {
            // Try again!
            return this.#generateRandomHash();
        }
        return rand;
    }
}

module.exports = URLShortener;