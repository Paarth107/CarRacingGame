canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png"
car2_x=10;
car2_y=100;

background_image="background.jpg";

function add(){
background_imgTag=new Image();
background_imgTag.onload= uploadBackground();
background_imgTag.src=background_image;

car1_imgTag=new Image();
car1_imgTag.onload=uploadcar1();
car1_imgTag.src=car1_image;

car2_imgTag=new Image();
car2_imgTag.onload=uploadcar2();
car2_imgTag.src=car2_image;
};

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadcar1() {
ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width, car2_height);
}

    window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
KeyPressed=e.keyCode;
console.log(KeyPressed);
if (KeyPressed=='38') {
    car1_up();
    console.log("up");
}
if (KeyPressed=='40') {
    car1_down();
    console.log("down");
}
if (KeyPressed=='37') {
    car1_left();
    console.log("left");
}
if (KeyPressed=='39') {
    car1_right();
    console.log("right");

if (KeyPressed=='87') {
    car2_up();
    console.log("key w");

if (KeyPressed=='83') {
        car2_down();
        console.log("key s");

if (KeyPressed=='65') {
        car2_left();
        console.log("key a");

if (KeyPressed=='68') {
        car2_right();
        console.log("key d");

    function up() {
        if (rover_y >= 0)
        {
            rover_y=rover_y-10;
            console.log("When up arrow is pressed, X="+ rover_x + "| y=" + rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function down() {
        if (rover_y <= 500)
        {
            rover_y=rover_y+10;
            console.log("When down arrow is pressed, X="+ rover_x + "| y=" + rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function left() {
        if (rover_x >= 0)
        {
            rover_x=rover_x-10;
            console.log("When left arrow is pressed, X="+ rover_x + "| y=" + rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    function right() {
        if (rover_x <= 700)
        {
            rover_x=rover_x+10;
            console.log("When right arrow is pressed, X="+ rover_x + "| y=" + rover_y);
            uploadBackground();
            uploadrover();
        }
    }

    var images = ["Img 1.JPG, Img 2.JPG, Img 3.JPG"];
    var random= Math.floor(Math.random ()*4);
    background_image= images[random];
};

