// Fetch all the details element.
var details = Array.from(document.querySelectorAll("details"));


// Add the onclick listeners.
details.forEach(function(detail){
  detail.addEventListener("click", closeOthers.bind(null, detail));
});

// Close all the details that are not targetDetail.
function closeOthers(targetDetail){
  details.forEach(function(detail){
    if(detail !== targetDetail){
      detail.removeAttribute("open");
    }
  });
  
}

//http://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai
function closeAll(){
  details.forEach(function(detail){
      detail.removeAttribute("open");
      });
  
}
           
function openAll(){
  details.forEach(function(detail){
      detail.setAttribute("open","open");
      });
}


function dim() {
  var elem = document.getElementById("container");
    var bg = document.getElementById("bg");
  var btn = document.getElementById("tbutton");
  
  elem.style.opacity = 0;
  btn.innerHTML ="&#x25b2;";
  elem.value="OFF";
/*  elem.style.zIndex = "1";
  bg.style.zIndex = "0";
   */
}

function brighten() {
  var elem = document.getElementById("container");
  document.getElementById("container");
    var bg = document.getElementById("bg");
  var btn = document.getElementById("tbutton");
  elem.style.opacity = 0.93;
  btn.innerHTML ="&#x25bc;";
  elem.value="ON";
/*  elem.style.zIndex = "1";
  bg.style.zIndex = "0";
  */
}

function toggle()
{var elem = document.getElementById("container");
 var btn = document.getElementById("tbutton");
  if(elem.value=="OFF"){
   elem.value="ON"; elem.style.opacity = 0.93;btn.innerHTML ="&#x25bc;";}

  else {
   elem.value="OFF";elem.style.opacity = 0; btn.innerHTML ="&#x25b2;";}
};

function back(){window.location.href = "la1-1.html"};

var h=document.getElementById("bg");
h.onload = h.scrollTop = 175;

//GET, TRIM AND DISPLAY URL FOR SHARE MODAL
var x = window.location.href.split('#')[0];
document.getElementById("url").innerHTML = x;