
function api1(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        resolve("api1");
       },3000)
    })
}

function api2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api2");
           },5000)
    })
}

function api3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api3");
           },7000)
    })
}

api1().then((data) => {
    console.log(data);
    
});
api2().then((data) => {
    console.log(data);
    
});
api3().then((data) => {
    console.log(data);  
});



//********************************/
// function api1(){
//     return new Promise((resolve,reject) => {
//         resolve("api1");
//     })
// }

// function api2(){
//     return new Promise((resolve,reject) => {
//        resolve("api2");
//     })
// }

// function api3(){
//     return new Promise((resolve,reject) => {
//         resolve("api3");
//     })
// }
//*****Return Data******* */
// let x = api1();
// console.log(x);
// let y = api2();
// console.log(y);
// let z = api3();
// console.log(z);
//********************************/