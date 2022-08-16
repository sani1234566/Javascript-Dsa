console.warn('Clouser is used nested fuction is used innerfunction is used Outer function varibales &  global varibales that is Clousers');

let global_var = 50
const outerFunctuon = ()=>{
    let a = "a is Outer function variables";
    console.warn(a);
    // console.warn(b);  that error is b is defined

    const innerFunction=() =>{
        let b = "inner function var is B ";
        console.warn(b);
        console.warn(a);
        console.warn(global_var);
    }
    innerFunction();
}

outerFunctuon();

