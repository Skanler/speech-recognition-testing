x = 0;
y = 0;
draw_rect = "";
draw_circle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML = "Our ears are listening!";
recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "We think you said "+content;
    if (content == "circle" ){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        draw_circle = "set";
    }
    if (content == "rectangle" ){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        draw_rect = "set";
    }
}

function setup(){
canvas = createCanvas(900, 600);
}

function draw(){
if (draw_circle == "set"){
radius = Math.floor(Math.random() * 100);
circle(x, y, radius);
document.getElementById("status").innerHTML = "We thought you said circle, so we drew one!";
draw_circle = "";
}
if (draw_rect == "set"){
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTML = "We thought you said rectangle, so we drew one!";
    draw_rect = "";
    }
}


