
//********************************************************** */
//**********Local Storage Or Web Storage Apis************ */
//********************************************************** */

//Local Storage 
//Session Storage


// function LocalStorageData(){
//     document.getElementById("display").innerText = localStorage.getItem("data");
// }

document.getElementById("inputField").addEventListener("click",(e) => {
    // console.log(e.target.value);
    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;

    localStorage.setItem("data",JSON.stringify({name : name,rollNo : rollNo}))
    document.getElementById("display").innerText = JSON.parse(localStorage.getItem("data")).name;
    document.getElementById("display1").innerText = JSON.parse(localStorage.getItem("data")).rollNo;
   
})
document.getElementById("display").innerText = JSON.parse(localStorage.getItem("data")).name;
document.getElementById("display1").innerText = JSON.parse(localStorage.getItem("data")).rollNo;
localStorage.clear();


// console.log({name:"qarnain",rollNo:1234});
// console.log(typeof JSON.stringify({name:"qarnain",rollNo:1234}));







//*********Local Storage******** */
// 1.localStorage.setItem('FirstName','Qarnain');
// 2.console.log(localStorage.getItem('FirstName'));
// 3.console.log(localStorage.removeItem("FirstName"));
// 4.localStorage.clear();

//*********Session Storage******** */
// sessionStorage.setItem("FirstName","Nexskills")
// sessionStorage.getItem("FirstName")
// sessionStorage.remove("FirstName")
// sessionStorage.clear()

// localStorage.setItem('lastName','Afridi');
// console.log(localStorage.getItem('lastName'));

// function LocalStorageData(){
//     document.getElementById("display").innerText = localStorage.getItem("data");
// }

// document.getElementById("inputField").addEventListener("input",(e) => {
//     // console.log(e.target.value);
//     localStorage.setItem("data",e.target.value)
//     LocalStorageData();
// })
// LocalStorageData();
