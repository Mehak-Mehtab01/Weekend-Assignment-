// Assignment 12-13
//IF…ELSE & ELSE IF STATEMENT , TESTING SET OF CONDITIONS;

// Question No 1:
// let char = prompt("Enter a character (number or letter):");

// if (char.length === 1) {
//     let asciiValue = char.charCodeAt(0);

//     if (asciiValue >= 48 && asciiValue <= 57) {
//         console.log("The input is a number.");
//     } else if (asciiValue >= 65 && asciiValue <= 90) {
//         console.log("The input is an uppercase letter.");
//     } else if (asciiValue >= 97 && asciiValue <= 122) {
//         console.log("The input is a lowercase letter.");
//     } else {
//         console.log("The input is a special character or something else.");
//     }
// } else {
//     console.log("Please enter only one character.");
// }



// Question NO 2:
// let num1 = Number(prompt("Please enter your number"));
// let num2 = Number(prompt("Please enter your number"));
// if(num1 < num2 ){
//     document.write( num1 + " is  less than " + num2 );
// }
// else if(num1 > num2){
//     document.write( num1 + " is greater than " + num2 );
// }
// else{
//     document.write( num1 + " is equal than " + num2 );
// }

// Question NO 3:
// let num = Number(prompt("Please enter your number"));
// if(num > 0){
//     document.write(num + "  is a positive number");
// }
// else if(num < 0){
//     document.write(num + "  is a negative number");
// }
// else if(num == 0){
//     document.write(num + "  is a  zero number");
// }
// else{
//     document.write("please enter a valid number");
// }

// Question NO 4:
// let text = prompt("please enter a character ");
// let vowels = ["a", "e" ,"i", "o" , "u"];
// if(text.length !== 1){
//     document.write("Please enter only one character")
// }
// else if(vowels.includes(text.toLowerCase())){
//     document.write("correct")
// }
// else{
//     document.write("false")
// }

// Question NO 5:
// let password1 = "mehakmehtab012";
// let password2 = prompt("Please enter your password");
// if(password2 == ""){
//     document.write("Please enter your password");
// }
// else if (password2 === password1){
//     document.write("Correct! The password you entered matches the original password")
// }
// else{
//     document.write("Incorrect password");
// }

// Question NO 6:
// var greeting= '';
// var hour = 13;
// if (hour < 18) {
// document.write(greeting += "Good day");
// }
// else{
// document.write(greeting += "Good evening");
// }

// Question NO 7:
// let time = prompt("Please enter the time in 24-hour clock format (e.g., 1900):");
// if(time >= '0000' && time<'1200'){
// document.write("Good Morning!");
// }
// else if(time >= '1200' && time<'1700'){
//     document.write("Good Afternoon!");
// }
// else if(time >= '1700' && time<'2100'){
//     document.write("Good evening!");
// }
// else if(time >= '2100' && time<'2359'){
//     document.write("Good night!");
// }
// else{
//     document.write(" ")
// }