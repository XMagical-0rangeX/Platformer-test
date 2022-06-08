//plat test

//setup
let cnv = document.getElementById("screen");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

//global variables
let rectX = 10;
let rectY = 646;
let xspeed = 0;
let yspeed = 0;
let speed = 10;

let grav = 0.05;
let gravsped = 0;

let dog = 0;

let dataY = 0, minus = 1, up = 1;


let right,left = false, jump = true, jumplenght = false,help,doug;
let rectycop = 0;

let background = document.getElementById("back");

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let move = 0;
requestAnimationFrame(loop);
function loop() {
    
    
    move += 1;

    if (right && rectX<=925){
    rectX+=speed;
    } else if (left && rectX>=0 && !(rectX <= 200 && rectY >326 && rectY< 425)){
    rectX-=speed;
    }
    rectY+= minus*gravsped;


    if(rectY === dataY -400){
        up = -1
    minus = -1;
    } 
    else if (rectY === 646){
        up = 1
        minus = 1;
        gravsped = 0;
        jump = true;
    //rectY+= gravsped;
   } 
   if(rectX <= 195 && rectY < 425 && rectY >= 325){
    help = true;
    }
    if (rectY>=400 && rectY <= 425 && rectX <= 195){
        minus = -1;
        up = -1;
    }else if (rectX <= 195 && rectY < 425 && rectY >= 325){
        up = -1
        minus = 0;
        if (gravsped === -10 && doug){
        gravsped = 0;}
        console.log(rectY)
        jump = true;
        doug = false;
        if (help && dataY === rectY){
            minus = 1;
            up = 1;
           help = false;
        }
    } else if (gravsped === 0 && rectY === 326 && !(rectX <= 195 && rectY < 425 && rectY >= 325)){
        gravsped = -10;
        up = -1;
        
    }
    else {
        minus = up;
        
        
    }
    if (rectY <320){
        doug = true;
        jump = false;
    }


    //background
    ctx.drawImage(background, 0 , 0, cnv.width, cnv.height);
    //ctx.drawImage(background, 0 +move, 0, cnv.width+move, cnv.height);
    

    ctx.fillStyle = "orange";
    ctx.fillRect(rectX, rectY, 75, 75); //draw filled square

    /*if (rectX >= 20 && rectX <= 200 && rectY >= 400 && rectY <= 425){
        dog = 0;
        gravsped = 20;
    }
    if (rectX+21 >= 20 && rectX <= 200  && rectY <= 425 && rectY <=400){
        rectY = 325;
        dog = 0;
        gravsped = 0;
    }






        if (dog == 1){
            gravsped -= grav +.5;
            
        }
        if (rectY <= rectycop-300 ){
            dog =0;
            gravsped += grav + 1;
            
        } 
        else if (rectY >= 646 && dog == 0){
            gravsped = 0
        }*/
    
        ctx.fillStyle = "grey";
        ctx.fillRect(20, 400, 175, 25); //draw filled square
        
        


        
    requestAnimationFrame(loop);

}
//|| event.code == "ArrowUp" && rectY >0  || event.code == "Space" && rectY >0 && rectY >0

function keyDownHandler (event){
    if (!event.repeat){
    if (event.code == "ArrowUp") {
        if (jump){
        dataY = rectY;
        
        }if (rectY === dataY){
        gravsped = -10;
        console.log("trees")
    }
    
jump = false
jumplenght = true
;
}
      else if (event.code == "KeyA" && rectX >=0 || event.code == "ArrowLeft" && rectX >=0) {
            
            left= true;
            
      }else if (event.code == "KeyD" && rectX <= 925 || event.code == "ArrowRight" && rectX <= 925) {
        right = true;
        
      }}
}
function keyUpHandler (event){
    if (event.code == "KeyA"  || event.code == "ArrowLeft" ) {
        left = false;
      }else if (event.code == "KeyD"  || event.code == "ArrowRight" ) {
        right = false
    } else if (event.code === "ArrowUp"){
        console.log(jumplenght);

        jumplenght = false;
        console.log(jumplenght);
    }
}


