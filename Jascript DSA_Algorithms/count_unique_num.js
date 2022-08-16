console.log("count unique numbers of array Time Complexity is Linear : 0(n)");

// console.log(arr.length);

const uniqueArray = (arr) => {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j<arr.length; j++) {
        if(arr[i]!==arr[j]){
            i++;
            arr[i] = arr[j];
            // console.log( arr[i] = arr[j])
        }
    }
    return i+1;
  } else {
    throw new Error("Array is Empty.");
  }
}
let arry_Value = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 1, 4, 5,9];
let res = uniqueArray(arry_Value);
console.log(res);


function uniqueValues(testArray){
    let distinctMap = {};
    // let testArray = ['John', 'John', 'Jason', 'Jason'];
    for (let i = 0; i < testArray.length; i++) {
      let value = testArray[i];
      distinctMap[value] = '';
    };
    let unique_values = Object.keys(distinctMap);
    console.log(unique_values);
}

let  result = uniqueValues(['John', 'John', 'Jason', 'Jason']);
console.log(result)

