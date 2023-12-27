//BOTTONE APERTURA-CHIUSURA GALLERY - BOTTONE PORTFOLIO//
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}
//GALLERIA FOTO//
let foto = document.getElementById("image");
foto = [
  "../italia/italiaPhoto/1.JPG",
  "../italia/italiaPhoto/2.JPG",
  "../italia/italiaPhoto/3.JPG",
  "../italia/italiaPhoto/4.JPG",
  "../italia/italiaPhoto/5.JPG",
  "../italia/italiaPhoto/6.JPG",
  "../italia/italiaPhoto/7.JPG",
  "../italia/italiaPhoto/8.JPG",
  "../italia/italiaPhoto/9.JPG",
  "../italia/italiaPhoto/10.JPG",
  "../italia/italiaPhoto/11.JPG",
  "../italia/italiaPhoto/12.JPG",
  "../italia/italiaPhoto/13.JPG",
  "../italia/italiaPhoto/14.JPG",
  "../italia/italiaPhoto/15.JPG",
  "../italia/italiaPhoto/16.JPG",
  "../italia/italiaPhoto/17.JPG",
  "../italia/italiaPhoto/18.JPG",
  "../italia/italiaPhoto/19.JPG",
];

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
  imgVerticale(i);
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
  imgVerticale(i);
}

/*FUNZIONE AGG. CLASSE X IMG VERTICALI*/
function imgVerticale(imgIndex) {
  if (
    imgIndex == 3 ||
    imgIndex == 9 ||
    imgIndex == 10 ||
    imgIndex == 13 ||
    imgIndex == 14
  ) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}

//AVANTI GALLERIA AUTO 4 SECONDI//
let myInterval = setInterval(avantiArrow, 4000);
$(".arrow").click(function myStopFunction() {
  clearInterval(myInterval);
  regain();
});

function regain() {
  myInterval = setInterval(avantiArrow, 4000);
}

//CLICK ANTEPRIME IMG//
let antImg = document.querySelectorAll(".anteprime-img");
for (let index = 0; index < antImg.length; index++) {
  antImg[index].addEventListener("click", function () {
    document.getElementById("image").src = antImg[index].src;
    imgVerticale(index);
    clearInterval(myInterval);
    regain();
  });
}
/*EFFWTTO SWIPE*/
document
  .getElementById("image")
  .addEventListener("touchstart", handleTouchStart);

document.getElementById("image").addEventListener("touchend", handleTouchEnd);

let xTouchStart;

function handleTouchStart(evt) {
  xTouchStart = evt.touches[0].clientX;
}

function handleTouchEnd(evt) {
  if (!xTouchStart) {
    return;
  }

  let xTouchEnd = evt.changedTouches[0].clientX;

  let xDiff = xTouchStart - xTouchEnd;
  console.log("xDiff", xDiff);

  if (xDiff > 30) {
    indietroArrow();
    clearInterval(myInterval);
    regain();
  } else if (xDiff < -30) {
    avantiArrow();
    clearInterval(myInterval);
    regain();
  }
}
