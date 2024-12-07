
//**********How to resolve with the help of Aysnc Function************


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
         console.log(`Order is successfully completed with no ${id}`);
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
        console.log("Payment Successfully Completed with",status);
        resolve(status); 
        },6000)
    
    });
 }
 
 // To solve promise chaining through aysnc await:

 async function foodApp(item){
    let resultsearchFood = await searchFood(item);
    let resultorderFood = await orderFood(resultsearchFood.item);
    // console.log(`Order is successfully completed with no ${resultorderFood.id}`);
    let resultpaymentClearance = await paymentClearance(resultorderFood.item,resultorderFood.id);
    // console.log("Payment Successfully Completed with",resultpaymentClearance);
    // console.log(resultpaymentClearance);
    

 }

 foodApp("Zinger Burger");


//  console.log(orderFood("pizza"));
 
  // Result of all the functionality
    // 1. Search items
    // 2. Ordering Food Functionality
    // 3. Payment Gateway Functionality

 //1.Promise Hell issue is generating
 //2.How to solve the promise hell issue so we use the concept of promise chaining
 //3.Promise Chaining code below:
    // let result = searchFood("pizza Rs: 2000")
    // .then((detail) => {
    //     console.log(detail.data);
    //   return orderFood(detail.item); 
    // })
    // .then((detail2) => {
    //     console.log(`Order is successfully completed with no ${detail2.id}`);
    //     return paymentClearance(detail2.item,detail2.id);
    // })
    // .then((status) => {
    //     console.log("Payment Successfully Completed with",status);
    // })

