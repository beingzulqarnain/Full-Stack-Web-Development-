
//   const submit = document.getElementById("submit");
//   const colorName = document.getElementById("color");
//   const body = document.querySelector("body");
//    submit.addEventListener("click",(e) => {
//     e.preventDefault();
//      const changeColor = color.value;
//      body.style.backgroundColor=`${changeColor}`;
//      console.log(changeColor);
// });
  
// const submit = document.getElementById("submit");
const p = document.createElement("p");
const rangeScroll = document.getElementById("rangeScroll");
const body = document.querySelector("body");

 rangeScroll.addEventListener("input",(e) => {
  e.preventDefault();
//   console.log(rangeScroll.value);
 
p.innerHTML = rangeScroll.value
body.appendChild(p);  
//    const changeColor = color.value;
//    body.style.backgroundColor=`${changeColor}`;
//    console.log(changeColor);
});