
//********** Try Catch ************** */

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
        let status = false;
        if(status){
            resolve(status); 
        }else{
            reject(new Error ("Payment Rejected Due to System Error",status));
        }
        // console.log("Payment Successfully Completed with",status);
        },6000)
    
    });
 }
 
 // To solve promise chaining through aysnc await:

 async function foodApp(item){

    try {
        let resultsearchFood = await searchFood(item);
        let resultorderFood = await orderFood(resultsearchFood.item);
        // console.log(`Order is successfully completed with no ${resultorderFood.id}`);
        let resultpaymentClearance = await paymentClearance(resultorderFood.item,resultorderFood.id);
        console.log("Payment Successfully Completed with",resultpaymentClearance);
        // console.log(resultpaymentClearance);
    } catch (error) {
        console.error(error); 
    }
 }

 foodApp("Zinger Burger");

