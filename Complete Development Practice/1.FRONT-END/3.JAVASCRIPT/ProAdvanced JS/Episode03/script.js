// **************Promise*************

console.log("start");

function isData(item){
    const promise1 = new Promise(function fun1(resolve,reject){
        resolve("Promise resolved");
    })
    return promise1;
}
 
let result = isData("abojan");
result.then(function success(result){
    console.log(result);
        
})


            // reject("Promise error");
    // }).then(function rejeet(result){
    //     console.log(result);
        
    // }.catch(function success(error){
    //     console.log(error);
        
    // }))
    
    //,function rejected(result){
    //     console.log(result);
        
    // })


    // console.log(typeof promise1);
        // promise1.then(function success(result){
        //     console.log(result);
            
        // },function rejected(result){
        //     console.log(result);
            
        // })



 // console.log("end");
// setTimeout(function(){
        //  console.log("Aysyncronizatioin Operation.....");
        
        // },4000)
    //   return  resolve("Promiss Reject");
    // resolve("Promiss Reject");
    //   reject("Promiss Reject");