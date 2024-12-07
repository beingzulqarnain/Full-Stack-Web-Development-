// ***************Callback Hell & Inversion ***************

//Searching the items Functionality
function searchFood(item,cb1){
    //   console.log("items is ",item);
    console.log("Searching start for ......");
    setTimeout(function timer1(){
      let data = `list of data is ${item}`;
    //   console.log(data);
       cb1(item,data)
        //   return data;
    },3000)
}

//Ordering Food Functionality
function orderFood(item,cb2){
    console.log("select",item);
    setTimeout(function timer2(){
     let id = Math.floor(Math.random() * 999999);
    //  console.log(`Order is successfully completed with no ${id}`);
     cb2(id);       
    },4000)
}
//Payment Gateway Functionality
function paymentClearance(item,id,cb3){
    console.log(`Payment is starting ${item} with `,id );
    setTimeout(function timer3(){
              let status = true;
              cb3(status); 
    },6000)
    
}
 
    // Result of all the functionality
    // 1. Search items
    // 2. Ordering Food Functionality
    // 3. Payment Gateway Functionality

    const dataStore = searchFood("burger",function fun1(item,data){
    console.log(data);
    orderFood(item,function fun2(orderId){
    console.log(`Order is successfully completed with no ${orderId}`);
    // console.log(orderId);
    paymentClearance(item,orderId,function fun3(response){
    console.log("Payment Successfully Completed with",response);

    })

    });

    } );


