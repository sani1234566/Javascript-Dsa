console.log("Binary search for Divider & conquer  for time complexity binary 0(logn(n))");
// //  Find the given sorted array in index of length
// min = 0 , elements = 1
// max = arr.length -1 ,element = 13 
// minIndex = (min+max)/2;
// 
let data = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 1, 4, 5,9];

const searchAlgo = (arr,number)=>{
    let min = 0;
    let max = arr.length-1;
    while(min<=max){
        let midIndex = Math.floor((min+max))/2;
        if(arr[midIndex] < number){
         min = midIndex+1; 
        }
        else if(arr[midIndex] > number){
            max = midIndex-1; 
        }
        else{
          return midIndex;
        }
    }

}

let array_value = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let result = searchAlgo(array_value,7);
console.log(result)