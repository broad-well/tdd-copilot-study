const URLShortener = require('/workspaces/tdd-copilot-study/implementations/shortener.js');

describe('URLShortener', () => {
    let shortener;

    beforeEach(() => {
        shortener = new URLShortener();
    });

    describe('constructor', () => {
        it('should initialize with an empty mapping if no URLs are provided', () => {
            expect(shortener.allLinks()).toEqual({});
        });

        it('should initialize with the provided URLs and set visit counts to 0', () => {
            const existingUrls = { hash1: 'http://example.com', hash2: 'http://test.com' };
            shortener = new URLShortener(existingUrls);
            expect(shortener.allLinks()).toEqual(existingUrls);
            expect(shortener.visitCount('hash1')).toBe(0);
            expect(shortener.visitCount('hash2')).toBe(0);
        });
    });

    describe('shorten', () => {
        it('should shorten a URL and return a hash', () => {
            const url = 'http://example.com';
            const hash = shortener.shorten(url);
            expect(typeof hash).toBe('string');
            expect(hash).toHaveLength(8);
            expect(shortener.allLinks()[hash]).toBe(url);
        });

        it('should use the desired hash if provided and not in use', () => {
            const url = 'http://example.com';
            const desiredHash = 'custom123';
            const hash = shortener.shorten(url, desiredHash);
            expect(hash).toBe(desiredHash);
            expect(shortener.allLinks()[hash]).toBe(url);
        });

        it('should throw an error if the desired hash is already in use', () => {
            const url = 'http://example.com';
            shortener.shorten(url, 'existing123');
            expect(() => shortener.shorten('http://another.com', 'existing123')).toThrow();
        });

        it('should throw an error for invalid URLs', () => {
            expect(() => shortener.shorten(null)).toThrow('URL must be a non-empty string');
            expect(() => shortener.shorten('')).toThrow('URL must be a non-empty string');
        });

        it('should throw an error for invalid desired hashes', () => {
            expect(() => shortener.shorten('http://example.com', 123)).toThrow('Desired hash must be a string, if specified');
        });
    });

    describe('visit', () => {
        it('should resolve a hash to its associated URL', () => {
            const url = 'http://example.com';
            const hash = shortener.shorten(url);
            expect(shortener.visit(hash)).toBe(url);
        });

        it('should increment the visit count for a hash', () => {
            const hash = shortener.shorten('http://example.com');
            expect(shortener.visitCount(hash)).toBe(0);
            shortener.visit(hash);
            expect(shortener.visitCount(hash)).toBe(1);
            shortener.visit(hash);
            expect(shortener.visitCount(hash)).toBe(2);
        });

        it('should throw an error for an invalid or missing hash', () => {
            expect(() => shortener.visit('invalidHash')).toThrow('Invalid or missing hash');
            expect(() => shortener.visit('')).toThrow('Invalid or missing hash');
        });
    });

    describe('visitCount', () => {
        it('should return the visit count for a hash', () => {
            const hash = shortener.shorten('http://example.com');
            expect(shortener.visitCount(hash)).toBe(0);
            shortener.visit(hash);
            expect(shortener.visitCount(hash)).toBe(1);
        });

        it('should throw a RangeError for an invalid or missing hash', () => {
            expect(() => shortener.visitCount('invalidHash')).toThrow(RangeError);
        });
    });

    describe('allLinks', () => {
        it('should return all mappings from hashes to URLs', () => {
            shortener.shorten('http://example1.com', 'hash1');
            shortener.shorten('http://example2.com', 'hash2');
            expect(shortener.allLinks()).toEqual({
                hash1: 'http://example1.com',
                hash2: 'http://example2.com',
            });
        });
    });

    describe('#generateRandomHash', () => {
        it('should generate unique hashes', () => {
            const hashes = new Set();
            for (let i = 0; i < 100; i++) {
                const hash = shortener.shorten(`http://example${i}.com`);
                expect(hashes.has(hash)).toBe(false);
                hashes.add(hash);
            }
        });
    });
});
