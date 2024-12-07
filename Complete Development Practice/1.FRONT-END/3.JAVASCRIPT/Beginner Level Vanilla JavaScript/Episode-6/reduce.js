// let arr = [14,22,38,45,50];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

//Reduce Function
// let arr = [14,22,38,45,50];
// let newArray = arr.reduce((acc,cur) => {
//        acc += cur;
//        return acc;
// })
// console.log(newArray);

//Array of Objects

let data = [
    {name : "Kabir",course : "Btech", branch : "cse"},
    {name : "Rohit",course : "Btech", branch : "civil"},
    {name : "Virat",course : "Btech", branch : "cse"},
    {name : "Hamid",course : "Btech", branch : "mechanical"},
    {name : "Anwar",course : "Btech", branch : "civil"},
];

        let newArray = data.filter((val) => {
            if(val.branch === "civil"){
                return val;
            }
        }).map((val) => {
           return val.name;
        })

        console.log(newArray);




//   let newArray = data.map((val) => {
//        return val
//    })

//    console.log(newArray);
   