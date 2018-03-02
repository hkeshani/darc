
//Resets animation to beginning when finished

function end() {
  btn.innerHTML = "PLAY";tl.timeScale(1);
tl.restart(0).pause();
};

//Play-Pause button
var btn = document.getElementById("btn");

btn.onclick = function aud_play_pause() {
  if (aud1.paused) {
    aud1.playbackRate = 1; 
    aud1.play(); 
    tl.timeScale(1); 
    tl.play(); 
    btn.innerHTML = "<i class='material-icons'>pause</i>";
    
  } else {
    aud1.pause(); 
    tl.pause(); 
    btn.innerHTML = "<i class='material-icons'>play_arrow</i>";
   
  }
};

//Restart button
var btn1 = document.getElementById("btn1");
btn1.onclick = function restart() {
  aud1.currentTime = 0; aud1.playbackRate = 1; aud1.pause(); tl.timeScale(1); tl.restart(0).pause();     btn.innerHTML = "<i class='material-icons'>play_arrow</i>"; time.innerHTML = "0.00";
}

//Fast Forward button
var btn2 = document.getElementById("btn2");
btn2.onclick = function ff() {
  tl.timeScale(4); aud1.playbackRate = 4;

}

//Rewind 5s button
var btn3 = document.getElementById("btn3");
btn3.onclick = function rw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime-x;
  
  tl.seek(newTime).play;
  aud1.currentTime -= 5.0;
 updatetime();
}

//Forward 5s button
var btn4 = document.getElementById("btn4");
btn4.onclick = function fw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime+x;
  
  tl.seek(newTime).play;
  aud1.currentTime += 5.0;
 updatetime();
}

//Update time
function updatetime() {
    var currentTime = tl.time();
  var rndcurrentTime = Number(Math.round(currentTime+'e2')+'e-2');
    time.innerHTML = rndcurrentTime;
}