
//**********Fetch API************ */
//******************************** */
//******************************** */

// async function fetch(num1,num2){
//    try {
//         let response = await fetch(`https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`);
//         let result = await response.json();
//         document.getElementById("totalCal").innerHTML= result.sum;
//         console.log(result);
      
//    }
//    catch (error) {
//     console.log(error);
//    }  
// }
// api();

document.getElementById("btn").addEventListener("click",() => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log("Inside Click");
    console.log(num1);
    console.log(num2);
    api(num1,num2);

})
