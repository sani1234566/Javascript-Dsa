console.log("app.js........");
const arr = ["Max","Menu","julie","raj"];
// console.log(arr.length);
// for array start with zero index 
// console.log(arr[1]);
for(let item of arr){
    // console.log(item);
    // console.log('...');
}
for(var i =0; i<arr.length; i++){
    // console.log(arr[i])
}
// arr.push("santosh");
// console.log(arr.length);

//################ for Array [] clousures for for Set() for unique values.

const id = new Set(); // Set([])
id.add(1)
id.add("wel");
id.add("come");
id.add(1)
// console.log(id);
// id.delete(1);
console.log(id);
for(let el of id){
console.log(el)
}
// for set id find out value inside of Set()
console.log('id value findout ',id.has("wel"));

//################ for Objects {} clousures for for Set() for unique values.

const person = {
    name:"Rajesh",
    hobbies:["football","Cricket","Chess"],
    age:30,
    branch:"CSE",
    greet:() =>{
        console.log(`your Name is ${this.name} & age ${this.age}`);
    }
}
person.lname ="Yadav";
delete person.lname;
console.log(person.hobbies.push({fees:4444}));
console.log(person)
person.greet();
 



