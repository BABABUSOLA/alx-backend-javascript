export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const idx in array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return array;
}
