# URL Shortener

Please write an API for a class named `URLShortener` that implements the conceptual interface of a URL shortener website like [is.gd](https://is.gd). Users should be able to shorten new links, look up shortened links, list the shortened links they've made, check the number of visits to each shortened link, etc.

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does. 

ShortenLink
Arguments: Link, ShortenedName, Username
Outputs: a status ("success" or "failure")
This method takes a Link and assigns it to the shortened URL ShortenedName. The shortened URL is assigned to the user with the provided Username.

ListShortenedLinks
Arguments: Username
Outputs: a list of shortened URLs.
This method lists the shortened URLs associated with the provided Username.

CheckVisits
Arguments: Username, ShortenedName
Outputs: an integer
This method checks the number of visits to the provided shortened URL for the user with the provided Username.

DeleteLink
Arguments: Username, ShortenedName
Outputs: a status ("success" or "failure")
This method deletes a shortened URL for the user with the provided Username.