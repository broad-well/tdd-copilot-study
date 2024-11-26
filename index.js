// Write your implementation here

class Link {
    shortendLink;
    visitCount;
    longLink;
}

class User {
    //Links[]
}

//public methods
//Shortenlink(longlink, shortversion)
//create a new link object
// is it a link? if not return null
//final verision is.gd/shortenedlink

//Lookup(shortenedlink)
// getLinkFromShortenedLink
// if not found, return null
// visitCount++
//return longlink

// numVisits(shortenedlink)
// getLinkFromShortenedLink
// if not found, return null
// return visitCount

//private
//getLinkFromShortenedLink(shortenedlink)
// retrieve link object from shortenedlink
// if not found, return null.



//jest test
//test shortenlink


Shortenlink("www.google.com", "google").expect("is.gd/google");
Shortenlink("www.ucsd.edu", "ucsd").expect("is.gd/ucsd");
Shortenlink("www.amazon.com", "amazon").expect("is.gd/amazon");
Shortenlink("notalink", "notalink").expect(null);


//test lookup
Lookup("is.gd/google").expect("www.google.com");
Lookup("is.gd/ucsd").expect("www.ucsd.edu");
Lookup("is.gd/nonexistent").expect(null);


//test numVisits
Shortenlink("cse.ucsd.edu", "cse");
for (let i = 0; i < 10; i++) {
    Lookup("is.gd/cse");
}
numVisits("is.gd/cse").expect(10);

Shortenlink("facebook.com", "fb");
numVisits("is.gd/fb").expect(0);

numVisits("is.gd/nonexistent").expect(null);
