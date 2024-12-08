// Please write psuedocode for the TodoList test suite (do not run the tests). Please make your tests as comprehensive as possible.

const URLShortener = require('/workspaces/tdd-copilot-study/implementations/shortener.js');

describe('URLShortener', () => {
  let shorten;

  beforeEach(() => {
    shorten = new URLShortener();
  });

  // Please write a comprehensive test suite for the URLShortener class below
  it('should return success upon shortening a link', () => {
    const result = shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    expect(result).toBe('success');
  });
  it('should result in a functional link', () => {
    shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    const result = visitLink("https://linkShortener.com/shortName");
    expect(result).toBe('success');
  });
  it('should result in a link with the same destination as the original', () => {
    const linkToShorten = "https://linkToShorten.com"
    shorten.shortenLink(linkToShorten, "shortName", "me");
    const result = equalLinks("https://linkShortener.com/shortName", linkToShorten)
    expect(result).toBe(true);
  });

  it('should list an appropriate number of shortened links', () => {
    shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    shorten.shortenLink("https://secondLinkToShorten.com", "secondShortName", "me");
    const result = shorten.listShortenedLinks("me")
    expect(result).toBe(["https://linkShortener.com/shortName", "https://linkShortener.com/secondShortName"]);
  });

  it('should list an appropriate number of visits to a link', () => {
    shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    const result0 = shorten.checkVisits("me", "shortName")
    expect(result0).toBe(0);
    visitSite("https://linkShortener.com/shortName")
    const result1 = shorten.checkVisits("me", "shortName")
    expect(result1).toBe(1);
    visitSite("https://linkShortener.com/shortName")
    const result2 = shorten.checkVisits("me", "shortName")
    expect(result2).toBe(2);
  });

  it('should delete shortened links successfully', () => {
    shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    const result = shorten.deleteLink("me", "shortName")
    expect(result).toBe('success');
  });
  it('should delete links, resulting in a non-functional link', () => {
    shorten.shortenLink("https://linkToShorten.com", "shortName", "me");
    shorten.deleteLink("me", "shortName")
    const result = visitLink("https://linkShortener.com/shortName");
    expect(result).toBe('failure');
  });
});
