// prevent scrolling
function noscroll() {
  window.scrollTo( 0, 0 );
};
// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// animation
var pic1 = document.getElementById("picture1");
var pic2 = document.getElementById("picture2");
var pic3 = document.getElementById("picture3");
var pic4 = document.getElementById("picture4");
var pic5 = document.getElementById("picture5");
var pic6 = document.getElementById("picture6");
var pic7 = document.getElementById("picture7");
var tl = new TimelineMax({paused:true,onUpdate:updatetime,onComplete:restart});

tl.timeScale(1);


//SET POSITION - 0S 
tl.to("#startscreen, #subtitleswindow", 0.5, {opacity: 0}, "+=0.5")

  .set ("#startscreen", {zIndex: -1})
  
//1-ADD PAUSE
  .set({}, {}, "+=1.5")

//2-PAN RIGHT
  .to(pic1, 12, {
  scale: 2.2,
  xPercent: -120,
  yPercent: -10,
  ease: Power1.easeInOut
})
//ADD PAUSE
  .set({}, {}, "+=3.5")
  
//2-PAN LEFT
  .to(pic1, 10, {
  scale: 2.2,
  xPercent: -32,
  yPercent: -10,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=10")
  
  //3-ZOOM 
  .to(pic1, 15, {
  scale: 3.2,
  xPercent: -15,
  yPercent: -10,
  ease: Power1.easeInOut
})
  //3-ZOOM 
  .to(pic1,7, {
  scale: 3.2,
  xPercent: 0,
  yPercent: -10,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=0.5")
  
    //3-ZOOM 
  .to(pic1,10, {
  scale: 4.5,
  xPercent: -7,
  yPercent: 0,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=2.5")
  
  //JUMP CUT
  .to(pic1, 1.6, {
  scale: 1.3,
  opacity:0,
  ease: Sine.easeInOut
})
  .set(pic2, {
  scale: 3,
  xPercent: -100,
  yPercent: -10,
})
  .to(pic2, 1, {	  
  opacity:1,
  ease: Sine.easeInOut
})
  
//ADD PAUSE
  .set({}, {}, "+=3")
  
  //2-PAN LEFT
  .to(pic2, 15, {
  scale: 3,
  xPercent: -70,
  yPercent: -10,
  ease: Power1.easeInOut
})

    //3-ZOOM 
  .to(pic2,12, {
  scale: 4.6,
  xPercent: -70,
  yPercent: 10,
  ease: Power1.easeInOut
})
   //2-PAN UP
  .to(pic2, 27, {
  scale: 5,
  xPercent: -70,
  yPercent: 50,
  ease: Power1.easeInOut
})
    //3-ZOOM OUT
  .to(pic2,3, {
  scale: 2.6,
  xPercent: -70,
  yPercent: -10,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=12")

    //3-ZOOM GOLD
  .to(pic2,7.4, {
  scale: 46,
  xPercent: -100,
  yPercent: -230,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=3")
  
//Fade out

.to(pic2, 3, {

  opacity:0,
  ease: Sine.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=3")
  
//JUMP CUT TO OLD FRIENDS
  
  .set(pic3, {
  scale: 2.2,
  xPercent: -36,
  yPercent: 40,

  ease: Sine.easeInOut
})

  .to(pic3, 4, {	  
  opacity:0.7,
  ease: Sine.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=3.6")
  
// ZOOM OUT TO SHOW BOTH
  .to(pic3,5, {
  scale: 1.2,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=2")
  
  //Fade out

.to(pic3, 3, {

  opacity:0,
  ease: Sine.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=3")

//CROSSFADE TO ABU ZAYD SMILE
  .set(pic4, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic3, 1, {
  scale: 1,
  xPercent: -25,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic4, 1, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,
  rotation: 0,
  opacity:0.6,
  ease: Sine.easeInOut
},'-=1') 
  
 //4-PAN 
  .to(pic4, 11, {
  scale: 1,
  xPercent: -140,
  yPercent: 0,
  ease: Power1.easeInOut
}) 


  //JUMP CUT TO MARKET
  .to(pic4, 1.6, {
  scale: 1.3,
  opacity:0,
  ease: Sine.easeInOut
})
  .set(pic5, {
  scale: 2,
  xPercent: -30,
  yPercent: 8,
})
  .to(pic5, 1, {	  
  opacity:1,
  ease: Sine.easeInOut
})

 //PAN DOWN
  .to(pic5, 3, {
  scale: 2,
  xPercent: -5,
  yPercent: -20,
  ease: Power1.easeInOut
}) 

 //PAN LEFT
  .to(pic5, 4, {
  scale: 2,
  xPercent: 37,
  yPercent: -20,
  ease: Power1.easeInOut
}) 

 //PAN MOSQUE
  .to(pic5, 7.5, {
  scale: 2.5,
  xPercent: 0,
  yPercent: 74,
  ease: Power1.easeInOut
}) 

 //ZOOM MOSQUE
  .to(pic5, 2, {
  scale: 3,
  xPercent: 0,
  yPercent: 110,
  ease: Power1.easeInOut
}) 
//ADD PAUSE
  .set({}, {}, "+=2.5")
  
//Quick Fade out

.to(pic5, 0.4, {

  opacity:0,
  ease: Sine.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=1.5")

  //JUMP CUT KEYHOLE

  .set(pic6, {
  scale: 1.2,
  xPercent: 0,
  yPercent: 0,
})
  .to(pic6, 2, {	  
  opacity:1,
  ease: Sine.easeInOut
})

 //ZOOM KEYHOLE
  .to(pic6, 7, {
  scale: 4.8,
  xPercent: -35,
  yPercent: -68,
  ease: Power1.easeInOut
}) 
//ADD PAUSE
  .set({}, {}, "+=1.5")
  
  //JUMP CUT FINAL
  .to(pic6, 0, {
  scale: 1.3,
  opacity:0,
  ease: Sine.easeInOut
})
  .set(pic7, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
})
  .to(pic7, 0, {	  
  opacity:1,
  ease: Sine.easeInOut
})
//ADD PAUSE
  .set({}, {}, "+=3.5")
  
//Final Fade out

.to(pic7, 2, {

  opacity:0,
  ease: Sine.easeInOut
})


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