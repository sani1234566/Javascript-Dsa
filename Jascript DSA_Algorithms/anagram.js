console.log("anaGram string Programs for time Complexity is Linear: 0(n)");
// step1 length check for both condition for
// hello       => lleheo
// santosh    => toshsan

function isAngram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let str of string1) {
    // console.log("string is angram");
    counter[str] = (counter[str] || 0) + 1;
    console.log(counter[str]);
  }
  for (let items of string2) {
    // console.log(items);
    if (!counter[items]) {
      // console.log("string is not a Angram");
      return false;
    }
    counter[items] = -1;
  }
  return true;
}

let check = isAngram("santosh", "toshsan");
console.log(check);
