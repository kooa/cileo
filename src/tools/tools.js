import safeJsonStringify from "safe-json-stringify";

export function toJson(data) {
  const stringifiedData = safeJsonStringify(data);
  return JSON.parse(stringifiedData);
}
