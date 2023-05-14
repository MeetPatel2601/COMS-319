var rs=require('readline-sync');
var fNum1 = parseInt(rs.question('1st Number: '));
var fNum2 = parseInt(rs.question('2nd Number: '));
var fNum3 = parseInt(rs.question('3rd Number: '));
var fNum4 = parseInt(rs.question('4th Number: '));

var problem = 1;
for (let i = 1; i <= fNum1; i++) {
problem *= i;
}
console.log("Factorial of the 1st number is =", problem);

function sum(fNum2) {
var len = 0;
var strings = fNum2.toString();
for(var i = 0; i < strings.length; i++) {
len = len + parseInt(strings.substring(i, i + 1));
} 
return len;
}
console.log("The sum of all the digits of the 2nd number is = ", sum(fNum2));




console.log("The Reverse of the 3rd number number is ",fNum3.toString().
split("").reverse().join(""));
var result = (fNum4.toString().split("").reverse().join("")==fNum4.toString()) ?"True" : "False";
console.log("Is the 4th Number a Palindrome(True/False)?", result);
