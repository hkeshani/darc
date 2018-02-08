// prevent scrolling
function noscroll() {
  window.scrollTo( 0, 0 );
};
// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// animation
var pic1 = document.getElementById("picture1");
var pic2 = document.getElementById("picture2");

var tl = new TimelineMax({paused:true,onUpdate:updatetime,onComplete:restart});

tl.timeScale(1);


//SET POSITION - 0S
tl.to("#startscreen, #subtitleswindow", 0.5, {opacity: 0}, "+=0.5")

  .set ("#startscreen", {zIndex: -1})
  
//1-ADD PAUSE until 12s
  .set({}, {}, "+=12.00")

//2-PAN LEFT AND ZOOM until 24.5s
  .to(pic1, 12.50, {
  scale: 1.3,
  xPercent: +40,
  yPercent: -0,
  ease: Power1.easeInOut
})

//3-PAN RIGHT until 34.5s
  .to(pic1, 10.00, {
  scale: 1.3,
  xPercent: -40,
  yPercent: -0,
  ease: Power1.easeInOut
})

//4-ZOOM OUT AND CENTRE until 45s
  .to(pic1, 10.50, {
  scale: 1.0,
  xPercent: -0,
  yPercent: -0,
  ease: Power1.easeInOut
})

//ADD PAUSE until 45.1
  .set({}, {}, "+=0.1")
  
//5 CROSSFADE TO SECOND IMAGE until 47.1s
  .to(pic1, 2, {

  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=2') 
  
  //6 ADD PAUSE until 54
  .set({}, {}, "+=6.9")
  
  //10-ZOOM to left until 59
  .to(pic2, 5.00, {
  scale: 1.4,
  xPercent: +50,
  yPercent: -10,
  ease: Power1.easeInOut
})

//10-PAN from left to right until 1.05
  .to(pic2, 6.00, {
  scale: 1.4,
  xPercent: -50,
  yPercent: -10,
  ease: Power1.easeInOut
}) 

//7-ZOOM TO ABU ZAYD until 1.15
  .to(pic2, 10.00, {
  scale: 2.0,
  xPercent: 0,
  yPercent: +35,
  ease: Power1.easeInOut
})  

//8-ADD PAUSE until 1.20
  .set({}, {}, "+=5.0")
  
//9-ZOOM OUT AND CENTRE until 1.34
  .to(pic2, 14.00, {
  scale: 1.0,
  xPercent: -0,
  yPercent: -0,
  ease: Power1.easeInOut
})


//13- ADD PAUSE until 2.125
  .set({}, {}, "+=38.5")
  
//14-ZOOM IN until 2.22
  .to(pic2, 9.50, {
  scale: 1.8,
  xPercent: -0,
  yPercent: -0,
  ease: Power1.easeInOut
})
  
//15-ADD PAUSE until 2.26
  .set({}, {}, "+=4")
  
//16-ZOOM OUT AND CENTRE until 2.32
  .to(pic2, 6.00, {
  scale: 1.0,
  xPercent: -0,
  yPercent: -0,
  ease: Power1.easeInOut
})

//17- CROSSFADE TO ANOTHER IMAGE until 2.39
    .to(pic2, 7, {

  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic1, 1, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=7') 
  
//18-ZOOM IN TO AL-HARITH for 4 until 2.43
  .to(pic1, 4.00, {
  scale: 3.0,
  xPercent: +9,
  yPercent: +40,
  ease: Power1.easeInOut
})

//19-ADD PAUSE until 2.45
  .set({}, {}, "+=2")
  
//20-ZOOM OUT AND CENTRE for 6 until 2.51
  .to(pic1, 6.00, {
  scale: 1.0,
  xPercent: -0,
  yPercent: -0,
  ease: Power1.easeInOut
})

//21-ADD PAUSE until 3.01
  .set({}, {}, "+=10")
  
//end sequence
	.set ("#startscreen", {zIndex: 0})
	.to("#startscreen", 0.5, {opacity: 1})




// back button
function back() {
window.location.href = "la1.html#back";
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
