//LA1.JS

function changeBackground(){ 
  var l = document.getElementById("love");
  var t = document.getElementById("start");
  if (l.style.backgroundColor == "rgba(54, 25, 25, 0)") {l.style.backgroundColor = "rgba(54, 25, 25, .7)"; t.innerHTML = "START";} else {l.style.backgroundColor = "rgba(54, 25, 25, 0)"; t.innerHTML = "Searching ...";};
};



function closeDetails(){ 
  var details = document.querySelector("details");
  if (details.open) {
// toggle close
details.open = false;
}
};

function pageLoad() {
    if (window.location.hash === "#back") {
        console.log("back"); closeDetails(); changeBackground();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Ready!"); pageLoad(); scrollBottom();
}, false);

function scrollBottom() {
var h=document.getElementById("master");
h.scrollTop = 99999999;
}

function back() {
window.location.href = "learn.html#back";
};