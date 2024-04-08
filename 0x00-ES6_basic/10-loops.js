export default function appendToEachArrayValue(array, appendString) {
  const returnArr = [];
  for (const idx of array) {
    returnArr.push(appendString + idx);
  }

  return returnArr;
}
