// Project - 1 Of Change the Background Color 

//Select the Element through QuerySelector
const btn1 = document.querySelector('#btn');
const body = document.querySelector('body'); 

//Applying AddEventListner Event
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.border = "none";
btn.style.margin = "10px";
btn.style.padding = "10px";
btn.style.textAlign = "center";
btn.style.cursor = "pointer";
btn.style.width = "100px";
btn.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        
      btn.addEventListener('click',function(){       
      
    //   The User will Confirm  
    const ischange = confirm('Are you sure to change color?'); 
    if(ischange){
        // Prompt actually is use for to pick the color  
       const colorName =  prompt('Enter Your Desire Color: ');
        body.style.backgroundColor=`${colorName}`;
        console.log(colorName);  
    }
});







//Event Handlers

/*
const btn = document.querySelector('#btn');
btn.onclick = function clickMe(){
    alert("Hello friends")
    } 
    
    btn.onclick = function clickMe(){
        alert("Hello friends33333222")
        } 
        */

        //AddEventListner
//    const btn = document.querySelector('#btn');
//    btn.addEventListener('click',function(){
//            console.log("Hello JavaScript.....");
           
//    });
//   console.log(e);
    // console.log("Hello JavaScript2223.....");

  





