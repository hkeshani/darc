// prevent scrolling
function noscroll() {
  window.scrollTo( 0, 0 );
};
// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// animation
var pic1 = document.getElementById("picture1");
var pic2 = document.getElementById("picture2");
var pic3 = document.getElementById("picture2");
var pic4 = document.getElementById("picture2");
var pic5 = document.getElementById("picture2");
var pic6 = document.getElementById("picture2");
var pic7 = document.getElementById("picture2");
var tl = new TimelineMax({paused:true,onUpdate:updatetime,onComplete:restart});

tl.timeScale(1);


//SET POSITION - 0S
tl.to("#startscreen, #subtitleswindow", 0.5, {opacity: 0}, "+=0.5")

  .set ("#startscreen", {zIndex: -1})
  
//1-ADD PAUSE
  .set({}, {}, "+=5.00")

//1-ZOOM to Al-Harith 
  .to(pic1, 9.00, {
  scale: 3,
  xPercent: -100,
  yPercent: -25,
  ease: Power1.easeInOut
}) 

//2-Pan to Abu Zayd
  .to(pic1, 3.00, {
  scale: 3,
  xPercent: 60,
  yPercent: -25,
  ease: Power1.easeInOut
})

//3- Zoom Out
.to(pic1, 5.00, {
  scale: 1.0,
  xPercent: -2.5,
  yPercent: -2.5,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=6.00")

//3- Zoom in
.to(pic1, 6.00, {
  scale: 1.5,
  xPercent: -2.5,
  yPercent: -2.5,
  ease: Power1.easeInOut
})  

//3- Pan Over to Al-Harith
.to(pic1, 2.00, {
  scale: 1.5,
  xPercent: -25,
  yPercent: -2.5,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=10.00")

//3- Zoom in
.to(pic1, 5.00, {
  scale: 3,
  xPercent: 85,
  yPercent: 30,
  ease: Power1.easeInOut
})  

//3- Pan Over to Right
.to(pic1, 6.00, {
  scale: 3,
  xPercent: -60,
  yPercent: 30,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=2.00")

//3- Zoom in + pan Left
.to(pic1, 6.00, {
  scale: 2,
  xPercent: 40,
  yPercent: -20,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=6.00")

//3- Zoom + Pan Left to Boy
.to(pic1, 7.00, {
  scale: 6,
  xPercent: 140,
  yPercent: -40,
  ease: Power1.easeInOut
})

//3- Pan Down Boy
.to(pic1, 10.00, {
  scale: 6,
  xPercent: 140,
  yPercent: -80,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=3.00")

 //CROSSFADE TO ANOTHER IMAGE
  .to(pic1, 4, {

  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic2, 4, {
  scale: 1,
  xPercent: -2,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=4') 

//ADD PAUSE
  .set({}, {}, "+=10.00")
  
//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 2,
  xPercent: 40,
  yPercent: 10,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=5.00")

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 1,
  xPercent: -2,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=5.00")

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 2,
  xPercent: -40,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=5.00")

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 2,
  xPercent: 30,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 2,
  xPercent: -40,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 1,
  xPercent: -2,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=8.00")

//3-ZOOM 
  .to(pic2, 5.00, {
  scale: 3,
  xPercent: -15,
  yPercent: 20,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=5.00")

//3-ZOOM 
  .to(pic2, 2.00, {
  scale: 3,
  xPercent: -80,
  yPercent: 10,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=3.00")

//3-ZOOM 
  .to(pic2, 1.00, {
  scale: 2,
  xPercent: -30,
  yPercent: 10,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=3.00")

//3-ZOOM 
  .to(pic2, 15.00, {
  scale: 5,
  xPercent: -150,
  yPercent: 5,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=4.00")

 .to(pic2, 2, {

  opacity:0,
  ease: Sine.easeInOut
})

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
