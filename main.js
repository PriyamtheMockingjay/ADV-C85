canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 nasa_mars_images_array = ["1000MR0044631300503690E01_DXXX.jpg","FLB_486265257EDR_F0481570FHAZ00323M_.jpeg","FRB_486265257EDR_F0481570FHAZ00323M_.jpeg"]
random_number = Math.floor(Math.random()*);
console.log (random_number);
 rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() { background_imgTag = new Image(); 
    function uploadBackground() 
    {
         ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
         }
          function uploadrover()
           {
                ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
             }

             
             
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}
function up()
{
if(rover_y >= 0)
{
    rover_y = rover_y - 20;
    console.log("when up arrow is pressed,x = "+ rover_x+ "| y=" + rover_y);
    uploadBackground();
    uploadrover();
}

}
function down()
{
if(rover_y <= 500)
{
    rover_y = rover_y + 20;
    console.log("when down arrow is pressed,x = "+ rover_x+ "| y=" + rover_y);
    uploadBackground();
    uploadrover();
}

}
function left()
{
if(rover_x >= 0)
{
    rover_x = rover_x - 20;
    console.log("when left arrow is pressed,x = "+ rover_x+ "| y=" + rover_y);
    uploadBackground();
    uploadrover();
}

}
function right()
{
if(rover_x <= 700)
{
    rover_x =rover_x + 20;
    console.log("when right arrow is pressed,x = "+ rover_x+ "| y=" + rover_y);
    uploadBackground();
    uploadrover();
}

}
