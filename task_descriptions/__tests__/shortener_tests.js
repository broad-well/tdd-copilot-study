// Please write psuedocode for the TodoList test suite (do not run the tests). Please make your tests as comprehensive as possible.

const URLShortener = require('/workspaces/tdd-copilot-study/implementations/shortener.js');

describe('URLShortener', () => {
  let shorten;

  beforeEach(() => {
    shorten = new URLShortener();
  });

  describe('shorten', () => {
    it("shortens a URL", () => {
      const shortened = shorten.shorten("https://www.google.com");
      expect(shortened).toBe("https://short.url/*");
    });

    it("should return an error if the URL is invalid", () => {
      const shortened = shorten.shorten("google.com");
      expect(shortened).toBe("Invalid URL");
    });
  });

  describe("lookup", () => {
    it("lookup works", () => {
      const short_url = shorten.shorten("https://www.google.com");
      const [original1, count1] = shorten.lookup(short_url);
      expect(original1).toBe("https://www.google.com");
      expect(count1).toBe(1);

      const [original2, count2] = shorten.lookup(short_url);
      expect(original2).toBe("https://www.google.com");
      expect(count2).toBe(2);    

      const [original3, count3] = shorten.lookup(short_url, false);
      expect(original3).toBe("https://www.google.com");
      expect(count3).toBe(2); // count remains the same
    });

    it("lookup nonexisting URL", () => {
      const x = shorten.lookup("https://short.url/123");
      expect(x).toBe(undefined);
    });
  })

  describe("list", () => {
    it("list works", () => {
      const list0 = shorten.list();
      expect(list0).toEqual([]);
      const short_url_1 = shorten.shorten("https://www.google.com");
      const list1 = shorten.list();
      expect(list1).toEqual([["https://www.google.com", short_url_1, ]]);
      const short_url_2 = shorten.shorten("https://www.facebook.com");
      const list2 = shorten.list();
      expect(list2).toEqual([
        ["https://www.google.com", short_url_1, ],
        ["https://www.facebook.com", short_url_2, ],
      ]);
    });
  });

  describe("delete", () => {
    it("delete works", () => {
      const short_url = shorten.shorten("https://www.google.com");
      const list1 = shorten.list();
      expect(list1).toEqual([["https://www.google.com", short_url, ]]);
      const [original, count] = shorten.lookup(short_url);
      expect(original).toBe("https://www.google.com");
      expect(count).toBe(1);
      shorten.delete(short_url);
      const list2 = shorten.list();
      expect(list2).toEqual([]);
      const x = shorten.lookup(short_url);
      expect(x).toBe(undefined);
    });

    it("delete nonexisting URL", () => {
      const x = shorten.delete("https://short.url/123");
      expect(x).toBe("URL NOT FOUND ERROR");
    });
  })

  

  // Please write a comprehensive test suite for the URLShortener class below
});
