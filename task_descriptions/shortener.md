# URL Shortener

Please write an API for a class named `URLShortener` that implements the conceptual interface of a URL shortener website like [is.gd](https://is.gd). Users should be able to shorten new links, look up shortened links, list the shortened links they've made, check the number of visits to each shortened link, etc.

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does. 

## API

### `shorten(url: string): Result<string, Error>`

- Shortens the link
    - If the given `url` is not a valid URL, returns an Error
    - Otherwise, create a short link and return it

### `lookup(short_url: string, increment = true): Option<[string, number]>`

- Looks up existing shortened URLs and find a matching original URL and return it with access count
    - increment the count by 1 if `increment` is true
- If there is no matching URL, returns `None`

### `list(): List<[string, string]>`

- Returns a list of pairs of the original URL and shortened URL

### `delete(short_url: string): Result<Unit, Error>`

- Deletes the `short_url` if it exists
    - if not, return an error
