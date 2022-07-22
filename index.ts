export type QueryParams = { [k: string]: string | string[] };

export const decodeQueryParams = (urlSearch: string): QueryParams => {
  const searchParams = new URLSearchParams(urlSearch);
  const acc: QueryParams = {};
  for (const [key, value] of searchParams.entries()) {
    const isArrayMember = /^\w+\[\]$/.test(key);
    if (isArrayMember) {
      const nk = key.slice(0, -2);
      if (acc[nk]) {
        const x = <Array<string>> acc[nk];
        x.push(value);
      } else {
        acc[nk] = [value];
      }
    } else {
      acc[key] = value;
    }
  }
  return acc;
};

export const encodeQueryParams = (queryParams: QueryParams): string => {
  return Object.keys(queryParams).length
    ? `?${
      Object.entries(queryParams).map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((v) => `${key}[]=${v}`).join("&");
        }
        return `${key}=${value}`;
      }).join("&")
    }`
    : "";
};
