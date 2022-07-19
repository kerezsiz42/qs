import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { decodeQueryParams, encodeQueryParams } from "./index.ts";

const urlSearch = "?a=123&b[]=sdfs&b[]=asd&c=&d=456";
const parsedUrlSearch = {
  a: "123",
  b: ["sdfs", "asd"],
  c: "",
  d: "456",
};

Deno.test("it should parse string into QueryParams object", () => {
  const decoded = decodeQueryParams(urlSearch);
  console.log(decoded);
  assertEquals(decoded, parsedUrlSearch);
});

Deno.test("is should stringify objects QueryParams type", () => {
  const encoded = encodeQueryParams(parsedUrlSearch);
  console.log(encoded);
  assertEquals(encoded, urlSearch);
});

Deno.test("is should give back the same object", () => {
  assertEquals(
    decodeQueryParams(encodeQueryParams(parsedUrlSearch)),
    parsedUrlSearch,
  );
});

Deno.test("is should give back the same string", () => {
  assertEquals(encodeQueryParams(decodeQueryParams(urlSearch)), urlSearch);
});
