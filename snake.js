var i = 100;
var timer = setInterval(function() {
document.getElementById("here").innerHTML = i--;
}, 1000)

var x = 1, y = 50;
var boundary_x = 200, boundary_y = 100
var speed_x = 1, speed_y = 0
var stop_x = 1, stop_y = 0

var canvas = document.getElementById("myCanvas");
var context =canvas.getContext("2d");
context.strokeStyle = '#ff0000';
context.lineWidth = 5;

context.beginPath();

context.moveTo(x,y);
setInterval(() => {
var X=x+speed_x
var Y=y+speed_y

if (X+2<boundary_x && Y+2<boundary_y && X-2>=0 && Y-2>=0) {
context.lineTo(X,Y);
x=X, y=Y
context.stroke();
}
},20);

function left() {
console.log('left')
if(speed_x !=0) {
if(speed_x < 0) {
speed_x = 0
speed_y = 1
}
if(speed_x > 0){
speed_x = 0
speed_y = -1
}
}
else if(speed_y!=0) {
if(speed_y < 0) {
speed_x=-1
speed_y=0
}
if(speed_y > 0) {
speed_x=1
speed_y=0
}
}
}
function right() {
console.log('right')
if(speed_x!=0) {
if(speed_x < 0) {
speed_x = 0
speed_y = -1
}
if (speed_x>0) {
speed_x=0
speed_y=1
}
}
else if(speed_y!=0) {
if(speed_y<0) {
speed_x=1
speed_y=0
}
if(speed_y>0) {
speed_x=-1
speed_y=0
}
}
}
function stop() {
var element=document.getElementById("stopbtn");
if(element.value=="stop") {
element.value='start'
stop_x = speed_x; stop_y = speed_y;
speed_x=0;
speed_y=0
}
else {
element.value='stop'
speed_x = stop_x; speed_y = stop_y
}
}


