
// *********Promises Solved the Problem of Inversion of Control***********


//Searching the items Functionality
function searchFood(item){
    return new Promise((resolve,reject) => {
        console.log("Searching start for ......");
        setTimeout(() => {
          let data = `list of data is ${item}`;
          resolve({item,data});
        },3000)
    }); 
}

//Ordering Food Functionality
function orderFood(item){
    return new Promise((resolve,reject) => {
        console.log("select",item);
        setTimeout(function(){
         let id = Math.floor(Math.random() * 999999);
        //  console.log(`Order is successfully completed with no ${id}`);
        //  resolve(id);       
         resolve({id,item});       
        },4000)
    
    });
 }

 //Payment Gateway Functionality
 function paymentClearance(item,id){
    return new Promise((resolve,reject) => {
        console.log(`Payment is starting ${item} with `,id );
        setTimeout(function(){
        let status = true;
        resolve(status); 
        },6000)
    
    });
 }



//  console.log(orderFood("pizza"));
 
  // Result of all the functionality
    // 1. Search items
    // 2. Ordering Food Functionality
    // 3. Payment Gateway Functionality

 //Promise Hell issue is generating
 //How to solve the promise hell issue so we use the concept of promise chaining
 //Promise Chaining code below:
    let result = searchFood("pizza Rs: 2000")
    .then((detail) => {
        console.log(detail.data);
      return orderFood(detail.item); 
    })
    .then((detail2) => {
        console.log(`Order is successfully completed with no ${detail2.id}`);
        return paymentClearance(detail2.item,detail2.id);
    })
    .then((status) => {
        console.log("Payment Successfully Completed with",status);
    })


    
//Promise Hell issue is generating

// let result = searchFood("pizza Rs: 2000").then((detail) => {
//     console.log(detail.data);
//    let order = orderFood(detail.item).then((id) => {
//     console.log(`Order is successfully completed with no ${id}`);
//     let Payment = paymentClearance(detail.item,id).then((status) => {
//         console.log("Payment Successfully Completed with",status);
//        });
//    });
  
// })


