console.log("Largest Consective elements Time Complexity is Linear : 0(n)");

// console.log(arr.length);

const conSectiveSumDigits = (arr, num) => {
  if (num > arr) {
    console.warn("Number is not greater than array.");
  } else {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        console.log("i= " + i + "j= " + j);
        temp += arr[i + j];
        console.log("value:=>", temp);
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
};
let res = conSectiveSumDigits([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("sum:=>", res);
