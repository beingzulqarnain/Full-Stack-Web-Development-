let inputTodo = document.querySelector("#inputtodo");
let btnButton = document.querySelector("#btn");
{
// function removeTodo(id){
//     // console.log(id);
//    let removeID = document.getElementById(id);
//    removeID.remove();    
// }
// function checkTodo(id){
//     // console.log(id);
//    let checkID = document.getElementById(id);
//     checkID.children[0].classList.toggle("line-through");  
// }


// let id = 1;

// btnButton.addEventListener("click",(e) => {
//     e.preventDefault();
//     let inputtodoData = inputTodo.value;
//     let div = document.createElement("div");
//      div.setAttribute('class','singletodo');
//      div.setAttribute('id',id);
//     //  div.setAttribute('id',id);
//      div.innerHTML = `   
//      <h2>${inputtodoData}</h2>
//      <input type="checkbox" onclick="checkTodo(${id})">
//     <button onclick="removeTodo(${id})">Remove Todo</button>`    
//     document.getElementById("alltodo").appendChild(div);
//     id++;
//     inputTodo.value = '';
    
// })
}
 let data = JSON.parse(localStorage.getItem('AllTodo')) || []
//  console.log(data);
   function displayTodoApp(singleTodo,id){
    document.getElementById("alltodo").innerHTML = '';
    data.map((singleTodo,id) => {
        todoStructure(singleTodo,id);
    })
   }
  function todoStructure(singleTodo,id){
    let div = document.createElement("div");
    div.setAttribute('class','singletodo');
    div.innerHTML = `   
    <h2>${singleTodo.inputtodoData}</h2>
    <input type="checkbox" id="">
   <button>Remove Todo</button>` ;
   let btn = div.getElementsByTagName("button");
   let inputCheckBox = div.getElementsByTagName("input");
   let h2 = div.getElementsByTagName("h2");
     btn[0].addEventListener("click",(e) => {
      e.target.parentNode.remove();
      removeTodoLocal(id);
     });
     if(singleTodo.completed){
        h2[0].classList.toggle("line-through");
        inputCheckBox[0].setAttribute('checked',true);
     }
     inputCheckBox[0].addEventListener("click",(e) => {
    //    e.target.previousElementSibling.classList.toggle("line-through");
       toggleTodo(id);
   }) 
   document.getElementById("alltodo").appendChild(div);
  }
   btnButton.addEventListener("click",(e) => {     
        e.preventDefault();
        let inputtodoData = inputTodo.value;
        data.push({inputtodoData,completed:false});
        localStorage.setItem("AllTodo",JSON.stringify(data));
        displayTodoApp();
        inputTodo.value = '';        
    })
    function removeTodoLocal(id){
        data.splice(id,1);
        localStorage.setItem("AllTodo",JSON.stringify(data));
        displayTodoApp();
    }
    function toggleTodo(id){
        data[id].completed = !data[id].completed;
        // console.log(data[id].completed);
        localStorage.setItem("AllTodo",JSON.stringify(data));
        displayTodoApp();
   }
    displayTodoApp();