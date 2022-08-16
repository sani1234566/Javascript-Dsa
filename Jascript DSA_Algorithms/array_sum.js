// input is   [-5,-4,-3,2,4,6,8]
// output  [] ?
// checking sum of zero is Problem 1

const arr = [-5, -4, -3, 2, 4, 6, 8];
const sumOfZero = (arr) => {
  for (let item of arr) {
    // console.log(item);
    for (let j = 1; j < arr.length; j++) {
      if (item + arr[j] === 0) {
        return [item, arr[j]];
      }
    }
  }
}

function sumNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (j = 1; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
let res = sumOfZero([-5, -4, -3, 2, 4, 6, 8]);
//  console.log(res);

const FindSumarray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

let res2 = FindSumarray([-5, -4, -3, 2, 4, 6, 8]);
console.log(res2);

//  output is [-4,4]
