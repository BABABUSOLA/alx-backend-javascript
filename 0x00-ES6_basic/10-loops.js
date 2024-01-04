export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const idx in array) {
    value.push(`${appendString}${idx}`);
  }

  return array;
}
