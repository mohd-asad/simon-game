var buttonColors=["red","blue", "green", "yellow"];

var pattern=[];

var userpattern=[];

var level=0;

$(document).keydown(function(){
    if(level == 0)
      newSequence();
});

function newSequence(){

    userpattern=[];
    var n= Math.floor(Math.random()*4);

    var color=buttonColors[n];
    
    level++;
    $("h1").text("Level " + level);

   pattern.push(color);

    $("#" + color ).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(color);

    
}

$(".btn").click(function(){

    var userchoice=$(this).attr("id");

    userpattern.push(userchoice);

    playSound(userchoice);
    animatePress(userchoice);

    check(userpattern.length - 1);
});

function animatePress(currColor){

    $("#"+currColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currColor).removeClass("pressed");
    }, 100);

}

function check(n){

        if(userpattern[n] == pattern[n]){

            if(userpattern.length == pattern.length){
                setTimeout(function(){
                    newSequence();
                },1000);
            }
            
        }
        else{
            playSound("wrong");

            $("body").addClass("game-over");

            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);

            $("h1").text("Game-over");

            startover();
        }
}


function playSound(color){

    var audio=new Audio('sounds/' + color +'.mp3');
    audio.play();

}

function startover(){
    level=0;
    
    pattern=[];
    $("h1").text("Press a key to start");
}

