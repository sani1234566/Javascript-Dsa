
function callBack(arr,call){
  arr.push(100);
    console.log(arr)
    call();
}

let arr = [1,2,3,4,5];

callBack(arr,function(){
    console.log("array has been modified", arr)
})

let  string = "Welcome to this Javascript Guide!";


const reverse =(string,seperator)=>{
    return string.split(seperator).reverse().join(seperator);
}

console.log(reverse());

