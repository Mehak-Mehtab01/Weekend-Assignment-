// Assignment Ch 14-16:
// ARRAYS


// Question 1-7 :
// let name = [];
// let name = {};
// let num1 = ["Mehak"];
// let num2 = [01234];
// let num3 = [yes];
// let num4 = ["01234Mehak"]
// let education = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"];
// document.write(education[0]+ "<br>" +  education[1]+"<br>" +  education[2]+ "<br>" +  education[3]+ "<br>" +  education[4]+ "<br>" +  education[5]+ "<br>" +  education[6]);

// Question no 8 :
// let name = ["Mehak", "Maryam","Mehwish"];
// let mark = [340,400,450];
// let total = [500];
// let perc1 =  (mark[0]*100)/total;

// document.write(" Score of " + name[0] + " is " + mark[0] + ". "+ "Percentage: " + mark[0]*100/total+"% <br>" );
// document.write(" Score of " + name[1] + " is " + mark[1] + ". "+ "Percentage: " + mark[1]*100/total+"% <br>");
// document.write(" Score of " + name[2] + " is " + mark[2] + ". " + "Percentage: " + mark[2]*100/total+"% <br>" );

// Question no 9 :
// let color = ["red","blue","purple","black","white"];
// let start = prompt("Which color do you want to add in the beginning");
// start = start.toLowerCase();
// let end = prompt("Which color do you want to add in the ending");
// end = end.toLowerCase();
// color.unshift(start);
// document.write(color);
//  color.push(end)
// document.write(color);
// color.splice(0,0,"yellow","green");
// document.write(color);
// color.shift()
// document.write(color);
// color.pop()
// document.write(color);
// let update = prompt("at which index  wants to add a color & color name");
// color.indexOf(update)

// Question no 10:
// let num = [56, 1, 6287, 398393, 3, 876, 82338, 5];
// num.sort((a, b) => a - b);
// document.write(num);

// Question no 11 :
// let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// let selectedCity = cities.splice(1,3);
// document.write(selectedCity)

// Question no 12 :
// let arr = ["This ", " is ", " my ", " cat"];
// document.write(arr);
// let newarr = arr.join(" ");
// document.write(newarr)

// Question no 13 :
// let arr = ["Keyboard" , "mouse", "printer","monitor"];
// document.write(arr[0]+ "<br>");
// document.write(arr[1]+ "<br>");
// document.write(arr[2]+ "<br>");
// document.write(arr[3]+ "<br>");


//Question no 14 :
// let arr = ["Keyboard" , "mouse", "printer","monitor"];
// document.write(arr[3]+ "<br>");
// document.write(arr[2]+ "<br>");
// document.write(arr[1]+ "<br>");
// document.write(arr[0]+ "<br>");

//Question no 15 :
// let arr = ["Apple","Samsung","Motorola","Nokia","Sony" ,"Haier"];
// document.write("<select>");
// for(let i = 0; i<=arr.length;i++){
//     document.write(i);
// }
// document.write("/<select>")