canvas .getElementById ('my canvas');
ctx = canvas.getcontext("2d");

carimg_width = 120;
carimg_heigth = 70;
carimg_img = carimg.png
car_x = 10;
car_y = 10;


carimg2_width = 120;
carimg2_heigth = 70;
carimg2_img = carimg2.png
carimg_x = 10;
carimg_y = 100;


function add()
{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadcarimg;
rover_imgTag.src = catimg.png;
}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);
}

function uploadrover()
{
ctx.drawImage(carimg_imgTag, carimg_x, rover_y, carimg_width , carimg_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '38')
{
carimg_up();
console.log("up arrow key");
}
if (keyPressed == '40')

carimg_down();
console.log("down arrow key");
}
if (keyPressed == '37')

carimg_left();
console.log("left arrow key");

if (keyPressed == '39')

carimg_right();
console.log("right arrow key");

if (keyPressed == '87')
{
    carimg2_up();
    console.log("key_w");
}
