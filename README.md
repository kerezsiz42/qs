# kerezsiz42/qs
Utility function for encoding and decoding simple objects to and from search parameters of Url object. Only objects with a depth of one are supported, which correspond to the following type:
```ts
export type QueryParams = { [k: string]: string | string[] };
```
## functions:
### decodeQueryParams(urlSearch: string)
Returns an object of type QueryParams populated with the values read from urlSearch.
### encodeQueryParams(queryParams: QueryParams)
Returns a urlSearch shaped string created from queryParams.
