// prevent scrolling
function noscroll() {
  window.scrollTo( 0, 0 );
};
// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// animation
var pic1 = document.getElementById("picture1");
var tl = new TimelineMax({paused:true,onUpdate:updatetime,onComplete:restart});

tl.timeScale(1);


//SET POSITION - 0S
tl.to("#startscreen, #subtitleswindow", 0.5, {opacity: 0}, "+=0.5")

  .set ("#startscreen", {zIndex: -1})
  
//1-ADD PAUSE
  .set({}, {}, "+=0.8")

//2-ZOOM
  .to(pic1, 6.71, {
  scale: 2.3,
  xPercent: 0,
  yPercent: 32,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=0.49")

//3-PAN LEFT
  .to(pic1, 9.17, {
  scale: 3.2,
  xPercent: 23,
  yPercent: -3,
  ease: Power1.easeInOut
})
   
//4-PAN RIGHT ON CROWD
  .to(pic1, 9.28, {
  scale: 3.5,
  xPercent: 0,
  yPercent: -3,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=0.7")

//5-ZOOM OUT AND PAN
  .to(pic1, 14.47, {
  scale: 2,
  xPercent: 7,
  yPercent: 17,
  ease: Power1.easeInOut
})  
  
//ADD PAUSE
  .set({}, {}, "+=1.0")

//JUMP TO ABU ZAYD
  .set(pic1, {
  scale: 3.7,
  xPercent: -47,
  yPercent: -10,

  ease: Sine.easeInOut
})
  .to(pic1, 1, {
  scale: 3.7,
  xPercent: -47,
  yPercent: -10,
  opacity:1,
  ease: Sine.easeInOut
})
  .to(pic1, 1, {
  scale: 3.7,
  xPercent: -47,
  yPercent: -10,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  
 //6-PAUSE ON ABU ZAYD
  .to(pic1, 2.64, {
  scale: 3.7,
  xPercent: -47,
  yPercent: -10,
  ease: Power1.easeInOut
}) 
  
 //7-ZOOM OUT ABU ZAYD
  .to(pic1, 3.23, {
  scale: 3,
  xPercent: -47,
  yPercent: -10,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=2")
  
 //8-ZOOM OUT, PAN LEFT
  .to(pic1, 16, {
  scale: 2,
  xPercent: 0,
  yPercent: 17,
  ease: Power1.easeInOut
}) 

 //9-BACK TO ZAYD
  .to(pic1, 23.76, {
  scale: 3.2,
  xPercent: -47,
  yPercent: 0,
  ease: Power1.easeInOut
}) 

 //10-PAUSE 
  .to(pic1, 14.87, {
  scale: 3.2,
  xPercent: -47,
  yPercent: 0,
  ease: Power1.easeInOut
}) 

 //11-ZOOM OUT AND PAN LEFT
  .to(pic1, 16.7, {
  scale: 2.7,
  xPercent: 0,
  yPercent: 23,
  ease: Power1.easeInOut
})

 //12-PAN TO AL-HARITH AND ABU ZAYD
  .to(pic1, 31.04, {
  scale: 2.7,
  xPercent: -23,
  yPercent: 10,
  ease: Power1.easeInOut
})

 //13-ZOOM OUT TO END PIC 
  .to(pic1, 15.04, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=2.85")

//end sequence
	.set ("#startscreen", {zIndex: 0})
	.to("#startscreen", 0.5, {opacity: 1})




// back button
function back() {
window.history.go(-1);
};

// play-pause button
var audio1 = document.getElementById("audio1");
var playpause = document.getElementById("playpause");

var p=0;
	//primes audio especially for mobile to avoid delay
function prime_audio(subject, callback) {
  if (p==1) {aud_play_pause();} else {
  audio1.play();
  audio1.pause();
  console.log("audio primed");
  p=1;
  callback();
}
};

function aud_play_pause() {console.log("start");
  if (audio1.paused) {
    audio1.playbackRate = 1; 
    audio1.play(); 
    tl.timeScale(1); 
    tl.play();
    playpause.innerHTML = "<i class='material-icons'>pause_circle_filled</i>";    
  } else {
    audio1.pause(); 
    tl.pause(); 
    playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>";
  }
};

playpause.onclick = function () {console.log("click"); prime_audio("x", aud_play_pause);};

var playr = document.getElementById("playr");
playr.onclick = function () {console.log("click"); prime_audio("x", aud_play_pause);};

// toggle subtitles
var subtitlestoggle = document.getElementById("subtitlestoggle");
var subtitleswindow = document.getElementById("subtitleswindow");
subtitlestoggle.onclick = function opacitytoggle()
{
  if (subtitleswindow.style.opacity === "1") {subtitleswindow.style.opacity = "0"} else {subtitleswindow.style.opacity = "1"};
};

// toggle morebuttons
var togglemorebuttons = document.getElementById("togglemorebuttons");
var morebuttons = document.getElementById("morebuttons");
togglemorebuttons.onclick = function opacitytoggle()
{
  if (morebuttons.style.opacity === "1") {morebuttons.style.opacity = "0"} else {morebuttons.style.opacity = "1"};
};

//Update time
var time = document.getElementById("time");
function updatetime() {
    var currentTime = tl.time();
  var rndcurrentTime = Number(Math.round(currentTime+"e2")+"e-2");
    time.innerHTML = rndcurrentTime;
};

/* To round to 1 digit use -> Number(Math.round(currentTime+'e0')+'e-0'); */

//Forward 5s button
var forward5 = document.getElementById("forward5");
forward5.onclick = function fw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime+x;
  
  tl.seek(newTime).play;
  audio1.currentTime += 5.0;
 updatetime();
};

//Rewind 5s button
var rewind5 = document.getElementById("rewind5");
rewind5.onclick = function rw() {
    var x=5;
    var currentTime = tl.time(); 
    var newTime = currentTime-x;
  
  tl.seek(newTime).play;
  audio1.currentTime -= 5.0;
 updatetime();
};

//Restart button
var replaybutton = document.getElementById("replaybutton");
replaybutton.onclick = function restart() {
  audio1.currentTime = 0; audio1.playbackRate = 1; audio1.pause(); tl.timeScale(1); tl.restart(0).pause(); playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>"; time.innerHTML = "0.00";
};

function restart() {
  audio1.currentTime = 0; audio1.playbackRate = 1; audio1.pause(); tl.timeScale(1); tl.restart(0).pause(); playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>"; time.innerHTML = "0.00";
};

//GET, TRIM AND DISPLAY URL FOR SHARE MODAL
var x = window.location.href.split('#')[0];
document.getElementById("url2").innerHTML = x;