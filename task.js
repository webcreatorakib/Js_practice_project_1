/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/



// let paymentPrice = prompt("Enter your price: ");
// paymentPrice = Number(paymentPrice);
// if(paymentPrice > 500){
//     paymentPrice = paymentPrice + " Coke is free";
// }else{
//     paymentPrice += 30;
// }
// console.log(paymentPrice);

// ======================================

/*** 

BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/


// let  weight = Number(prompt("Enter your weight (kg) :"));
// let height = Number(prompt("Enter your height (feet): "));
// height = height * 0.3048;

// let bmi = weight / height;
// bmi = bmi.toFixed(2);
// console.log(bmi);
// if(bmi < 18.5){
//     console.log("You are underweight.");
// }
// else if((bmi >= 18.5) && (bmi <= 24.9)){
//     console.log("You are normal");
// }
// else if((bmi > 25) && (bmi <= 29.9)){
//     console.log("You are over weight")
// }
// else{
//     console.log("You are obese.")
// }

// ======================================

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let number = Number(prompt("Enter you grade number: "));
// let grade;
// if(number >= 90){
//     grade = "Golden +";
// }
// else if(number >= 80){
//     grade = "A+";
// }
// else if(number >= 70){
//     grade = "A";
// }
// else if(number >= 60){
//     grade = "A-";
// }
// else{
//     grade = "Fail";
// }
// document.write(grade);


// ======================================
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let myNumber = Number(prompt("Enter my number: "));
// let friendNumber = Number(prompt("Enter your friend number: "));
// if(myNumber > 80){
//     if(friendNumber > 80){
//         document.write("Go for lunch ✌");
//     }
//     else if(friendNumber >= 60){
//         document.write("Good luck next time");
//     }
//     else if(friendNumber >= 40){
//         document.write("Message unseen");
//     }
//     else{
//         document.write("Friend Block");
//     }
// }
// else{
//     document.write("Go to home and sleep and 😢");
// }


// ======================================


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = Number(prompt("Enter your number for one: "));
// let num2 = Number(prompt("Enter your number for two: "));;
// let result;
// if(num1 > num2){
//     result = num1 * 2;
// }
// else{
//     result = num1 + num2;
// }
// document.write(result);


// using by ternary operator;
// let num1 = Number(prompt("Enter your number for one: "));
// let num2 = Number(prompt("Enter your number for two: "));
// let result;

// (num1 > num2) ? result = (num1 * 2) : result = (num1 + num2);

// document.write(result);


// ======================================
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const selectElement = document.querySelector('#countryName');

let priceAndCountry = document.querySelector('#country');
let findElement = document.querySelector('.findElement');

let gender1 = document.querySelector('#gender1');

var gender = document.querySelector('#gender'); 

let discount = document.querySelector('#discount span');

let price = document.querySelector('#price span');

const priceTravel  = [900, 500, 780, 800]
selectElement.addEventListener('change', (event) => {
    let text =  event.target.value;
    if(text == "Pakistan"){
        var find1 = priceAndCountry.innerHTML = text;
        var find2 = findElement.innerHTML = priceTravel[0];
        priceAndCountry.innerHTML = find1;
        findElement.innerHTML = " " + find2 + " $";

        // for children
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Children"){
                gender1.innerHTML = typeGender;
                discount.innerHTML = priceTravel[0] + " $";
                price.innerHTML = "0";
            }
        });
        // for student
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Student"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[0] * 50 / 100;
                discount.innerHTML ="For 50% " + ticketPrice + "$";
                price.innerHTML = priceTravel[0] - ticketPrice + "$";
            }
        });
        // for Senior Citizen
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Senior Citizen"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[0] * 15 / 100;
                discount.innerHTML ="For 15% " + ticketPrice + "$";
                price.innerHTML = priceTravel[0] - ticketPrice + "$";
            }
        });
        //for regular
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Regular"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[0] * 0 / 100;
                discount.innerHTML ="For 0% " + ticketPrice + "$";
                price.innerHTML = priceTravel[0] - ticketPrice + "$";
            }
        });
    }
    else if(text == "India"){
        let find1 = priceAndCountry.innerHTML = text;
        let find2 = findElement.innerHTML = priceTravel[1];
        priceAndCountry.innerHTML = find1;
        findElement.innerHTML = " " + find2 + " $";

 // for children
 gender.addEventListener('change', (event) => {
    let typeGender = event.target.value;
    if(typeGender == "Children"){
        gender1.innerHTML = typeGender;
        discount.innerHTML = priceTravel[1] + " $";
        price.innerHTML = "0";
    }
});
// for student
gender.addEventListener('change', (event) => {
    let typeGender = event.target.value;
    if(typeGender == "Student"){
        gender1.innerHTML = typeGender;
        let ticketPrice = priceTravel[1] * 50 / 100;
        discount.innerHTML ="For 50% " + ticketPrice + "$";
        price.innerHTML = priceTravel[1] - ticketPrice + "$";
    }
});
// for Senior Citizen
gender.addEventListener('change', (event) => {
    let typeGender = event.target.value;
    if(typeGender == "Senior Citizen"){
        gender1.innerHTML = typeGender;
        let ticketPrice = priceTravel[1] * 15 / 100;
        discount.innerHTML ="For 15% " + ticketPrice + "$";
        price.innerHTML = priceTravel[1] - ticketPrice + "$";
    }
});
//for regular
gender.addEventListener('change', (event) => {
    let typeGender = event.target.value;
    if(typeGender == "Regular"){
        gender1.innerHTML = typeGender;
        let ticketPrice = priceTravel[1] * 0 / 100;
        discount.innerHTML ="For 0% " + ticketPrice + "$";
        price.innerHTML = priceTravel[1] - ticketPrice + "$";
    }
});
    }
    else if(text == "Bangladesh"){
        var find1 = priceAndCountry.innerHTML = text;
        var find2 = findElement.innerHTML = priceTravel[2];
        priceAndCountry.innerHTML = find1;
        findElement.innerHTML = " " + find2 + " $";

        
         // for children
         gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Children"){
                gender1.innerHTML = typeGender;
                discount.innerHTML = priceTravel[2] + " $";
                price.innerHTML = "0";
            }
        });
        // for student
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Student"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[2] * 50 / 100;
                discount.innerHTML ="For 50% " + ticketPrice + "$";
                price.innerHTML = priceTravel[2] - ticketPrice + "$";
            }
        });
        // for Senior Citizen
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Senior Citizen"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[2] * 15 / 100;
                discount.innerHTML ="For 15% " + ticketPrice + "$";
                price.innerHTML = priceTravel[2] - ticketPrice + "$";
            }
        });
        //for regular
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Regular"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[2] * 0 / 100;
                discount.innerHTML ="For 0% " + ticketPrice + "$";
                price.innerHTML = priceTravel[2] - ticketPrice + "$";
            }
        });
    }
    else if(text == "Nepal"){
        var find1 = priceAndCountry.innerHTML = text;
        var find2 = findElement.innerHTML = priceTravel[3];
        priceAndCountry.innerHTML = find1;
        findElement.innerHTML = " " + find2 + " $";
        // for children
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Children"){
                gender1.innerHTML = typeGender;
                discount.innerHTML = priceTravel[3] + " $";
                price.innerHTML = "0";
            }
        });
        // for student
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Student"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[3] * 50 / 100;
                discount.innerHTML ="For 50% " + ticketPrice + "$";
                price.innerHTML = priceTravel[3] - ticketPrice + "$";
            }
        });
        // for Senior Citizen
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Senior Citizen"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[3] * 15 / 100;
                discount.innerHTML ="For 15% " + ticketPrice + "$";
                price.innerHTML = priceTravel[3] - ticketPrice + "$";
            }
        });
        //for regular
        gender.addEventListener('change', (event) => {
            let typeGender = event.target.value;
            if(typeGender == "Regular"){
                gender1.innerHTML = typeGender;
                let ticketPrice = priceTravel[3] * 0 / 100;
                discount.innerHTML ="For 0% " + ticketPrice + "$";
                price.innerHTML = priceTravel[3] - ticketPrice + "$";
            }
        });
    }
    else{
        alert("please Select One");
    }
});

function myReload(){
    location.reload();
}
