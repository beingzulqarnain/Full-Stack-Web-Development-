
//*********Promises.any() may ju fillfuled hai aur jiska time kam hu wahi execute huga, aur ju rejected huwa hai usku hata kay fillfulled wala dhunday ga mtlb rejected ku count hi nhi karay ga */

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
            // resolve("api2");
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

let result = Promise.any([api1(),api2(),api3()]).then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log(error);
    
})