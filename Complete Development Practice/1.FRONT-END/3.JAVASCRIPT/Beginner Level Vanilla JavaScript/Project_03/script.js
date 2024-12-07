
const btnGen = document.getElementById("btnGen");
const newPassword = document.getElementById("newpassword");
const rangInput = document.getElementById("rangVal");
const rangPara = document.getElementById("rangValue");
const CapiLet = document.getElementById("uppercase");
const SmaLet = document.getElementById("lowercase");
const NumbStr = document.getElementById("number");
const SymStr = document.getElementById("symbol");
rangPara.innerText = rangInput.value; 

rangInput.addEventListener('input',(e) => {
    rangPara.innerText = e.target.value; 
})


btnGen.addEventListener('click',() => {
    
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let numberStr = '123456789'
    let symbolStr = '`!@#$%^&*()_+}{"}|?><;'
    
    let finalPass = '' ;
    let latestPass = '';
     if(CapiLet.checked){
        finalPass +=capitalLetter;
     }
     if(SmaLet.checked){
        finalPass +=smallLetter;
     }
     if(NumbStr.checked){
        finalPass +=numberStr;
     }
     if(SymStr.checked){
        finalPass +=symbolStr;
     }
     
     if(finalPass === ''){
        alert("Please Select aleast one field.")
     }

    for(let i=0; i<rangInput.value; i++){
       let randNum = Math.floor(Math.random() * finalPass.length );
        
        //  latestPass += finalPass[randNum];
         latestPass += finalPass.charAt(randNum);
         // latestPass += finalPass.charAt(randNum);


    }
   
     newPassword.innerText = `${latestPass}`;
    
})
