var colors = ['blue', 'green', 'red', 'purple',
'yellow', 'orange', 'white', 'grey'];


var btn1 = document.querySelector('.box1');
btn1.addEventListener('click', function(){
    this.style.backgroundColor = 'orange';
})
var btn2 = document.querySelector('.box2');
btn2.addEventListener('click', function(){
    this.style.backgroundColor = 'green';
})
var btn3 = document.querySelector('.box3');
btn3.addEventListener('click', function(){
    this.style.backgroundColor = 'purple';
})
var btn4 = document.querySelector('.box4');
btn4.addEventListener('click', function(){
    this.style.backgroundColor = 'blue';
})
var btn5 = document.querySelector('.box5');
btn5.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
})
var btn6 = document.querySelector('.box6');
btn6.addEventListener('click', function(){
    this.style.backgroundColor = 'yellow';
})
var btn7 = document.querySelector('.box7');
btn7.addEventListener('click', function(){
    this.style.backgroundColor = 'blue';
})
var btn8 = document.querySelector('.box8');
btn8.addEventListener('click', function(){
    this.style.backgroundColor = 'green';
})
var btn9 = document.querySelector('.box9');
btn9.addEventListener('click', function(){
    this.style.backgroundColor = 'yellow';
})
var btn10 = document.querySelector('.box10');
btn10.addEventListener('click', function(){
    this.style.backgroundColor = 'purple';
})
var btn11= document.querySelector('.box11');
btn11.addEventListener('click', function(){
    this.style.backgroundColor = 'white';
})
var btn12 = document.querySelector('.box12');
btn12.addEventListener('click', function(){
    this.style.backgroundColor = 'grey';
})
var btn13 = document.querySelector('.box13');
btn13.addEventListener('click', function(){
    this.style.backgroundColor = 'white';
})

var btn14 = document.querySelector('.box14');
btn14.addEventListener('click', function(){
    this.style.backgroundColor = 'orange';
})
var btn15 = document.querySelector('.box15');
btn15.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
})
var btn16 = document.querySelector('.box16');
btn16.addEventListener('click', boxColor);


function boxColor() {
    var color = ('blue', 'green', 'red', 'purple',
    'yellow', 'orange', 'white', 'grey');
   

    for (var i =0; i <8; i++){
     color=  [Math.floor(Math.random() * 8)];   
    }
 
  
    document.box.style.background = random;
    }

boxColor();
