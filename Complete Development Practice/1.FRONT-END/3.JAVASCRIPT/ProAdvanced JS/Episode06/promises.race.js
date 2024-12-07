
//*********Promises.race() may ju sab say pehlay ayae ga wahi payae ga esmay fulfilled or reject ku nhi dekhta.jis ka time kam huga wahi execute huga first */

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
            // reject("rejected");
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

let result = Promise.race([api1(),api2(),api3()]).then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log(error);
    
})