// prevent scrolling
function noscroll() {
	window.scrollTo(0, 0)
};
// add listener to disable scroll
window.addEventListener("scroll", noscroll);

// back button
function back() {
	window.location.href = "la1.html#back";
};

// back button2
function back2() {
window.history.go(-1);
};

// play-pause button
var audio1 = document.getElementById("audio1");
var playpause = document.getElementById("playpause");

var p = 0;
//primes audio especially for mobile to avoid delay
function prime_audio(subject, callback) {
	if (p == 1) {
		aud_play_pause();
	} else {
		audio1.play();
		audio1.pause();
		console.log("audio primed");
		p = 1;
		callback();
	}
};

function aud_play_pause() {
	console.log("start");
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

playpause.onclick = function() {start()};

var icon = document.getElementById("icon");
var hidemediabutton = document.getElementById("hidemediabutton");
var hidemediaspan = document.getElementById("hidemediaspan");
hidemediabutton.onclick = function() {rotatetoggle(icon); console.log(mainbuttons.style.opacity);};

var open = false;
function rotatetoggle(x) {
	
	if (open) {
		x.className = "material-icons hidemedia-right"; mainbuttons.style.display = "block"; open = false;
		// hidemediaspan.style.backgroundColor = "black";
	} else {
		x.className = "material-icons hidemedia-right open"; mainbuttons.style.display = "none"; open = true;
		// hidemediaspan.style.backgroundColor = "transparent";
	};
};

var starttp = document.getElementById("start-tp");
starttp.onclick = function() {start()};

// var starth = document.getElementById("start-here");
// starth.onclick = function() {start()};

function start() {
	console.log("click");
	prime_audio("x", aud_play_pause);
}


// toggle subtitles
var subtitlestoggle = document.getElementById("subtitlestoggle");
var subtitleswindow = document.getElementById("subtitleswindow");
subtitlestoggle.onclick = function() {opacitytoggle(subtitleswindow)};

// toggle morebuttons
var togglemorebuttons = document.getElementById("togglemorebuttons");
var morebuttons = document.getElementById("morebuttons");
togglemorebuttons.onclick = function() {opacitytoggle(morebuttons)};

function opacitytoggle(x) {
	if (x.style.opacity === "1") {
		x.style.opacity = "0"
	} else {
		x.style.opacity = "1"
	};
};


//Update time
var time = document.getElementById("time");
function updatetime() {
	var currentTime = tl.time();
	var rndcurrentTime = Number(Math.round(currentTime + "e2") + "e-2");
	time.innerHTML = rndcurrentTime;
};

/* To round to 0.00 digit use. Change id time in html to 0.00. Change function */
/* restart innerhtml to 0.00 -> Number(Math.round(currentTime+'e2')+'e-2');  */

//Forward 5s button
var forward5 = document.getElementById("forward5");
forward5.onclick = function fw() {
	var x = 5;
	var currentTime = tl.time();
	var newTime = currentTime + x;

	tl.seek(newTime).play;
	audio1.currentTime += 5.0;
	updatetime();
};

//Rewind 5s button
var rewind5 = document.getElementById("rewind5");
rewind5.onclick = function rw() {
	var x = 5;
	var currentTime = tl.time();
	var newTime = currentTime - x;

	tl.seek(newTime).play;
	audio1.currentTime -= 5.0;
	updatetime();
};

//Restart button
var replaybutton = document.getElementById("replaybutton");
replaybutton.onclick = function restart() {
	audio1.currentTime = 0;
	audio1.playbackRate = 1;
	audio1.pause();
	tl.timeScale(1);
	tl.restart(0).pause();
	playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>";
	time.innerHTML = "0";
};

function restart() {
	audio1.currentTime = 0;
	audio1.playbackRate = 1;
	audio1.pause();
	tl.timeScale(1);
	tl.restart(0).pause();
	playpause.innerHTML = "<i class='material-icons'>play_circle_filled</i>";
	time.innerHTML = "0";
};

//GET, TRIM AND DISPLAY URL FOR SHARE MODAL
var x = window.location.href.split("#")[0];
document.getElementById("url").innerHTML = x;

/* var y = window.location.href.split("#")[0];
document.getElementById("url2").innerHTML = y; */

var z = window.location.href.split("#")[0];
document.getElementById("url3").innerHTML = z;

/* SUBTITLES
Copyright 2012 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
Author: Eric Bidelman (ericbidelman@chromium.org)
 */
if (!document.createElement("track").track) {
	alert('<track is not available in your browser.');
}
var audio = document.querySelector("audio");
var span1 = document.querySelector("section > div :first-child");
var span2 = document.querySelector("section > div :last-of-type");
var track = audio.textTracks[0];
track.mode = "hidden";
console.log(track);
var idx = 0;
track.oncuechange = function (e) {
	var cue = this.activeCues[0];
	if (cue) {
		if (idx == 0) {
			span2.className = "";
			span1.classList.remove("on");
			span1.innerHTML = "";
			span1.appendChild(cue.getCueAsHTML());
			span1.classList.add("on");
		} else {
			span1.className = "";
			span2.classList.remove("on");
			span2.innerHTML = "";
			span2.appendChild(cue.getCueAsHTML());
			span2.classList.add("on");
		}
		idx = ++idx % 2;
	}
};
/* NOSLEEP. DECIDE IF THIS NEEDS TO BE ON MULTIMEDIA.HTML OR HERE. CURRENTLY IN BOTH*/
var noSleep = new NoSleep();

function enableNoSleep() {
	noSleep.enable();
	console.log("nosleep on");
	document.removeEventListener("click", enableNoSleep, false);
}
// document.addEventListener('click', enableNoSleep, false);

function disableNoSleep() {
	noSleep.disable();
};


/* listens for postMessage from iframe/object parent - la1.html - and resets audio and animation  */ 

window.addEventListener("message", function(event) {
	if (event.data === "stop") {restart()}	
}, false);

/*sends message from child to parent object/iframe*/
function messageparent() {
	parent.postMessage("message","*");
};