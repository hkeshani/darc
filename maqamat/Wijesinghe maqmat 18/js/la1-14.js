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
  .set({}, {}, "+=9.18")

//2-PAN RIGHT
  .to(pic1, 16.71, {
  scale: 1.3,
  xPercent: -48,
  yPercent: -9,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=0.1")

 //CROSSFADE TO ANOTHER IMAGE
  .to(pic1, 1, {

  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 3,
  xPercent: -95,
  yPercent: 10,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  .set({}, {}, "+=8.00")
  .to(pic2, 1, {
    xPercent: -65
  })
  
  
//3-ZOOM 
  .to(pic2, 38.28, {
  scale: 1.6,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
})  

//ADD PAUSE
  .set({}, {}, "+=0.1")

//CROSSFADE TO ANOTHER IMAGE
  .set(pic3, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 1.6,
  xPercent: 0,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic3, 1, {
  scale: 3,
  // xPercent: 25,
  xPercent: -50,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  .set({}, {}, "+=6.00")
.to(pic3, 1, {
  scale: 3,
  xPercent: 45,
  yPercent: 0,
  ease: Power1.easeInOut
})
  .set({}, {}, "+=9")

// .set({}, {}, "+=1")
  .to(pic3, 1, {
  xPercent: -50
})
.set({}, {}, "+=4.72")
//ADD PAUSE
  .set({}, {}, "+=0.1")

//CROSSFADE TO ANOTHER IMAGE
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
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  
 //4-PAN 
  .to(pic4, 13.64, {
  scale: 1,
  xPercent: -25,
  yPercent: 0,
  ease: Power1.easeInOut
}) 
  
//CROSSFADE TO ANOTHER IMAGE
  .set(pic5, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic4, 1, {
  scale: 1,
  xPercent: -25,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic5, 1, {
  scale: 1,
  xPercent: 25,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 

//ADD PAUSE
  .set({}, {}, "+=7")
 //4-PAN 
 .to(pic5, 1.24, {
  scale: 2,
  xPercent: 40,
  yPercent: 0,
  ease: Power1.easeInOut
}) 

  .to(pic5, 25.24, {
  scale: 2,
  xPercent: -20,
  yPercent: 0,
  ease: Power1.easeInOut
}) 

//CROSSFADE TO ANOTHER IMAGE
  .set(pic6, {
  scale: 1.5,
  xPercent: 0,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic5, 1, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic6, 1, {
  scale: 1.5,
  xPercent: -25,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 
  //wait
  .set({}, {}, "+=7")
  .to(pic6, 1, {
  xPercent: 10,
}) 
.set({}, {}, "+=9")
.to(pic6, 1, {
  xPercent: 40,
}) 
.set({}, {}, "+=6.76")
 //4-ZOOM 
//   .to(pic6, 6.76, {
//   scale: 2,
//   xPercent: 0,
//   yPercent: 0,
//   ease: Power1.easeInOut
// }) 

//CROSSFADE TO ANOTHER IMAGE
  .set(pic7, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic6, 1, {
  scale: 2,
  xPercent: 0,
  yPercent: 0,
  opacity:0,
  ease: Sine.easeInOut
})
  .to(pic7, 1, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1') 

 //4-PAN 
  .to(pic7, 6.87, {
  scale: 1,
  xPercent: -23,
  yPercent: 0,
  ease: Power1.easeInOut
}) 
  .to(pic7, 1, {
  scale: 3,
  yPercent: 40
}) 
  .to(pic7, 1, {
  scale: 1,
}) 
  .to(pic7, 1, {
  scale: 3,
}) 
  .to(pic7, 1, {
  scale: 1,
}) .to(pic7, 1, {
  scale: 3,
}) 
  .to(pic7, 1, {
  scale: 1,
}) .to(pic7, 1, {
  scale: 3,
}) 
  .to(pic7, 1, {
  scale: 1,
}) 
//wait 9.87
//CROSSFADE TO ANOTHER IMAGE
  .set(pic2, {
  scale: 3,
  xPercent: 0,
  yPercent: 0,

  ease: Sine.easeInOut
})
  .to(pic7, 1, {
  scale: 1,
  xPercent: -23,
  yPercent: 0,
    opacity:0,
  ease: Sine.easeInOut
})
  .to(pic2, 1, {
  scale: 3,
  xPercent: 0,
  yPercent: 0,
  rotation: 0,
  opacity:1,
  ease: Sine.easeInOut
},'-=1')

 //4-ZOOM 
  .to(pic2, 31.04, {
  scale: 1,
  xPercent: 0,
  yPercent: 0,
  ease: Power1.easeInOut
})

//ADD PAUSE
  .set({}, {}, "+=32.85")

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
var sixSecondMarkReached = false;
var nineSecondMarkReached = false;
var fourteenSecondMarkReached = false;

function updatetime() {
  var currentTime = tl.time();
  var rndcurrentTime = Number(Math.round(currentTime+"e2")+"e-2");
  time.innerHTML = rndcurrentTime;
  if(tl.totalTime() > 11.1){
    pic1.style.transform = "scale(1, 1)";
    pic1.style.padding = "initial";
    fourteenSecondMarkReached = true;
  }
  else if(nineSecondMarkReached){
    //do nothing to save runtime
  }
  else if(tl.totalTime() > 9.5){
    pic1.style.transform = "scale(2, 2)";
    pic1.style.paddingTop = "18%";
    pic1.style.paddingLeft = "initial";
    pic1.style.paddingRight = "75%";
    nineSecondMarkReached = true;
  }
  else if(sixSecondMarkReached){
    //do nothing to save runtime
  }
  else if(tl.totalTime() > 7.5){
    pic1.style.transform = "scale(3, 3)";
    pic1.style.paddingTop = "15%";
    pic1.style.paddingLeft = "18%";
    sixSecondMarkReached = true;
  }
};

/* To round to 1 digit use -> Number(Math.round(currentTime+'e0')+'e-0'); */

//Forward 5s button
var forward5 = document.getElementById("forward5");
forward5.onclick = function fw() {
    var x=180;
    var currentTime = tl.time(); 
    var newTime = currentTime+x;
  
  tl.seek(newTime).play;
  audio1.currentTime += 180.0;
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
