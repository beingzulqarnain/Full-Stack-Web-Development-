
//***********Aysnc & Await | JS*******************/


//***********Normal Function***********

//function add(){
//     console.log("Follow Me On Instagram");
// }
//     add();

//Simple Function return ==> value

//Coresponding Function

// function add(){
//     // return Promise.resolve("Follow Me On Instagram");
//     // the above return promise is same below the return promise 
//     return new Promise(function(resolve,reject){
//         resolve("Follow Me On Instagram");
//     })
// }
// let addme1 = add();
// console.log(addme1);

//********************************************************************/

//********************************************************************/

//***********Async Function***********
// async function add(){
//     // console.log("Follow Me On Instagram");
//     return ("Follow Me On Instagram");
// }
// let addme = add();
// console.log(addme);
//Async return Promise Object
//********************************************************************/

//***********Async Function Program***********
// function pro(){
//     return new Promise(function pro1 (resolve,reject) {
//         setTimeout(() => {
//             resolve("Hello");
//           },10000)
//         })
// }

// async function fun1(){
//    console.log("start");
//     let x = await pro(); 
//     console.log("end");
//     return x;
// }

// fun1().then(function (data) {
//     console.log(data);
// } )

//********OutPut******** 
// start
// end
// Hello

//********************************************************************/




