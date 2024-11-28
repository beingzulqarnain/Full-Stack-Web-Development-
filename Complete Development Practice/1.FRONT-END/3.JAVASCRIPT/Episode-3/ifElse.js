// *********** If Practice ***************

//Q-5.1 Write a program that inputs marks and displays "Congratulations!You have passed." if the marks are 40 or more.
/*
let marks = prompt("Enter Your Marks: ") ;

if(marks >= 40){
    alert(`Enter Your Marks: ${marks} \n Congratulations! You have passed.`);
}else{
  alert("Please Correct the valid Number");
}
*/

//Q-5.2 Write a program that inputs two numbers and finds whether both are equal.
/*
const num1 = prompt("Enter a number: ");
const num2 = prompt("Enter a number: ");


if(num1 == num2){
  alert(` Enter a number : ${num1}\n Enter a number : ${num2} \n both are equal`);
}
  */
 //Q-5.3 Write a program that inputs two numbers and finds if second numbers is square of first number.
/*
 const num1 = prompt("Enter a number: ");
 const num2 = prompt("Enter a number: ");

 if(num1*num1==num2){
  alert("2nd Number is square of 1st Number");
 }
  */
 //Q-5.4 Write a program that inputs marks of three subjects.If the average of marks is more than 80,it displays two messages " You are above standard" and "Admission Granted".
 /*
 const sub1 = prompt("Enter marks of first subject: ");
 const sub2 = prompt("Enter marks of second subject:");
 const sub3 = prompt("Enter marks of third subject:");
 const avg =(sub1 + sub2 + sub3);
 const Totalavg =(avg/3.0);

 if(avg > 80){
 alert(`Total Average is ${Totalavg} You are above standard \nAdmission Granted`)
 }
 */
//Q-5.5 Write a program that inputs three number and displays the maximun number.
/* 
const num1 = prompt("Enter first number:  ");
 const num2 = prompt("Enter second number: ");
 const num3 = prompt("Enter third number ");
 const max = num1;
 if(num2 > max){
      max = num2;
      alert(`Maximum Number is ${max}`);
    }
    if(num3 > max){
      max = num3;
      alert(`Maximum Number is ${max}`);
} 
*/
//Write a program that inputs three number and displays the maximun number.
// Prompt the user to input three numbers
/*
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

// Find the maximum number
let maxNumber = Math.max(num1, num2, num3);

// Display the maximum number
console.log("The maximum number is: " + maxNumber);
alert("The maximum number is: " + maxNumber);
*/


// Write a program that inputs marks of three subjects.If the average of marks is more than 80,it displays two messages " You are above standard" and "Admission Granted".
// Prompt the user to input marks for three subjects
/*
let mark1 = parseFloat(prompt("Enter marks for the first subject:"));
let mark2 = parseFloat(prompt("Enter marks for the second subject:"));
let mark3 = parseFloat(prompt("Enter marks for the third subject:"));

// Calculate the average
let average = (mark1 + mark2 + mark3) / 3;

// Check if the average is above 80 and display messages accordingly
if (average > 80) {
    // console.log("You are above standard");
    // console.log("Admission Granted");
    alert("You are above standard\nAdmission Granted");
} else {
    // console.log("Average is below 80, keep trying!");
    alert("Average is below 80, keep trying!");
}

*/

//Q-5.6 Write a program to input and determine whether it is positive ,negative or 0.
/*
let num1 = parseFloat(prompt("Enter a number: "));
if(num1 > 0){
  alert("it is postive number");
}
if(num1 < 0){
  alert("it is negative number");
}
if(num1 == 0){
  alert("it is Zero number");
}
  */
 //Q-5.7 Write a program that inputs five integers.It finds and prints the largest and smallest integer.
/*
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let num3 = parseFloat(prompt("Enter third number:"));
let num4 = parseFloat(prompt("Enter four number:"));
let num5 = parseFloat(prompt("Enter five number:"));

// Find the largest and smallest integers
let largest = Math.max(num1, num2, num3, num4, num5);
let smallest = Math.min(num1, num2, num3, num4, num5);

alert(`Largest Number is ${largest}\n Smallest Number is ${smallest}`);
*/
// *******************************************************************

//*****************If-Else Practice Programs*********************

// Q-5.8 Write a program that inputs a number and finds whether it is even or odd using if else condition.
/*
let num = parseFloat(prompt("Enter a number: "));

if(num%2 == 0)
{
  alert(`${num} is Even Number`)
}else{
  alert(`${num} is Odd Number`)
}
  */
// Q-5.9 Write a program that inputs a year and finds whether it is leap year or not using if else condition.
/*
let year = parseFloat(prompt("Enter a number: "));

if(year%4 == 0)
{
  alert(`${year} is leap year`)
}else{
  alert(`${year} is not leap year`)
}
*/
// Q-5.10 Write a program that inputs two integers. It determines and prints if the first integer is multiple of second integer 
/*
let num1 = parseFloat(prompt("Enter a number: "));
let num2 = parseFloat(prompt("Enter a number: "));

if(num1%num2 == 0)
{
  alert(`${num1} is a multiple of second`);
}else{
  alert(`${num2} is not a multiple of second`);
  
}
*/
// Q-5.11 Write a program that inputs salary and grade. It adds 50% if the grade is greater than 15. it adds 25% if the grade is 15 or less and then displays the total salary of a employee.
/*
let salary = parseFloat(prompt("Enter salary: "));
let grade = parseFloat(prompt("Enter grade: "));
let bonus = 0;
if(grade > 15){
  bonus = salary * 50.0/100;
}else{
  bonus = salary * 25.0/100;
}
salary = salary + bonus;
alert(`Total salary is ${salary}`)
*/
//*****************If-Else-if Practice Programs*********************
// Q-5.12 Write a program that inputs test score of a student and displays his grade according to the follwing criteria:
/* 
    test score        Grade
    >=90                A
    80-89               B
    70-79               C
    60-69               D
    Below 60            F

    */
/*
    let testScore = parseFloat(prompt("Enter Your Test Score: "));
    if(testScore >= 90){
      alert("Grade A");
    }else if(testScore >= 80 && testScore <= 89){
      alert("Grade B");
    }else if(testScore >= 70 && testScore <= 79){
      alert("Grade C");
    }else if(testScore >= 60 && testScore <= 69){
      alert("Grade D");
    }else{
      alert("Grade F");
    }
*/
//*****************Nested If-Else Practice Programs*********************



//*******Logical/comparison/Or Operator If-Else Practice Programs**************



//Switch Statements
//*****************Switch Statements Practice Programs*********************

// Q-1: Write a program that inputs number of weeks day and displays the name of the day.
/*
let num = parseFloat(prompt("Enter a number of weekday: "));
switch(num){
  case 1:
      alert("Friday");
      break;
  case 2:
      alert("Saturday");
      break;
  case 3:
      alert("Sunday");
      break;
  case 4:
      alert("Monday");
      break;
  case 5:
      alert("Tuesday");
      break;
  case 6:
      alert("Wednesday");
      break;
  case 7:
      alert("Thursday");
      break;
   default:
    alert("Please Put Valid Number")
    }
    */
// Q-2: Write a program that inputs a character from the user and checks whether it is a vowel or consonent.
/*
let char = (prompt("Enter A Character: "));
switch(char){
 
  case 'a':
  case 'A':
         alert("it is a vowel");
         break;
  case 'e':
  case 'E':
         alert("it is a vowel");
         break;
  case 'i':
  case 'I':
          alert("it is a vowel");
          break;
  case 'o':
  case 'O':
          alert("it is a vowel");
          break;
  case 'u':
  case 'U':
          alert("it is a vowel");
          break;                                                     
   default:
    alert("It is Consonent")
    }

*/


//Loops

//If-Else Statements
// console.log("Here We Start If-Else Statment..");
//write a program to cast the vote.
// if(true)
// if(false)
// if(age >= 18);

/*
let age = 18;
let check = age >= 18;
console.log(check);

if(check){
  console.log("You are eligible for Vote.");
  
}else{
    console.log("You are not equal to 18 years old");
}*/

// *************************************
//Conditionals Statements
// let age = 25;
//If Statements
// let age = 15;
// let passMarks = 23;
// if(age > 18){
//    console.log("You are eligibal for voting... ");
// }
// if(age < 18){
//     console.log("You are Not eligibal for voting... ");
//  }
//  if(passMarks >= 33){
//     console.log("You passed!");
//  }
//  if(passMarks <= 33){
//     console.log("You Failed!");
//  }


//If-Else
//Problem Number 01
/*
let age = 12;
if(age >= 18){
    console.log("You vote");
}else{
    console.log("Not Vote");
    
}
*/
//Problem Number 02
/*
let mode = "silver";
let color ;
if(mode === "dark"){
    color = "black";
}else{
    color = "white";
}
console.log(color);
*/
//Else - If
// Problem 01
/*
let age = 12;
if(age > 18){
    console.log("its senior");
}else if(age <18){
    console.log("its Baby Guy");
}else if(age == 18){
    console.log("its Junior");
}else{
    console.log("its a girl");
    
}*/

//Problem 02
/*
let mode =prompt("Enter Your Color Mode: ");
let color;
if(mode === "dark"){
     color = "black";
}else if(mode === "blue"){
  color = "blue";
  
}else if(mode ==="green"){
    color = "green";
}else{
    color = "white";
}
console.log(color);

*/
// ternary Operator
// let age = 18 ? console.log("adult")
//  : console.log("not adult");

 //*******************

 //Problem 04
// let num = prompt("Enter a number: ");
// if(num%5==0){
//     console.log(num," yes it is in Five table");
// }
// else{
// console.log(num,"Not a five table");
// }


//Problem 05

// let score = prompt("Enter Your Marks: ");
// let grade; 
// if(score >= 80 && score <= 100)
//     {
//         grade = "A";
//     }else if(score >= 70 && score <= 89)
//     {
//         grade = "B";
//     }else if(score >= 60 && score <= 69)
//     {
//           grade = "C";
//     }else if(score >= 50 && score <= 59)
//     {
//         grade = "D";
//     } else if(score >= 0 && score <= 49)
//         {
//             grade = "Failed";
//         }     
// console.log("According to the score grade will be ",grade);
