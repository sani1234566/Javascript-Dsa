// fetch method is return Promise

let data = fetch("url");
data.then((res)=>{
    return res.json();
    console.log(res);
    
})
.then((result)=>{
    return res.json();
    console.log("2nd Output is",result);
})

.catch((err)=>{
    console.log(err);
})