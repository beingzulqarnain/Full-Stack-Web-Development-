/*
let num1 = 5;
let num2 = 10;

function add(a,b){
   let total = a + b;
   return total;
}

let sum = add(num1,num2);
console.log(sum);

*/

function one(){
     var a = "hello1";
     console.log("inside one");
     function two(){
      let b = "hello2";
      console.log("inside two");
      function two(){
         let c = "hello3";
         console.log("inside three");
        }
        three();
     }
     two();
}
 one();