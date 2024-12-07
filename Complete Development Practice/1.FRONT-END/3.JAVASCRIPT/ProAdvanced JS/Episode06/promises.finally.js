
//*********finally() catch() function ka bad hum laga tay hai yae rejection or fullfilled par koi asar nhi choirta.*/

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
            reject("rejected");
           },1000)
    })
}

function api3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api3");
           },7000)
    })
}

let result = api1().then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log(error);
    
}).finally((data) => {
    console.log("main tu final hun");
    
})