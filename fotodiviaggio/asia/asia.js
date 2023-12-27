//BOTTONE APERTURA-CHIUSURA GALLERY//
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

//GALLERIA FOTO//
const foto = [
  "../asia/asiaPhoto/1.JPG",
  "../asia/asiaPhoto/2.JPG",
  "../asia/asiaPhoto/3.JPG",
  "../asia/asiaPhoto/4.JPG",
  "../asia/asiaPhoto/5.JPG",
  "../asia/asiaPhoto/6.JPG",
  "../asia/asiaPhoto/7.JPG",
  "../asia/asiaPhoto/8.JPG",
  "../asia/asiaPhoto/9.JPG",
  "../asia/asiaPhoto/10.JPG",
  "../asia/asiaPhoto/11.JPG",
  "../asia/asiaPhoto/12.JPG",
  "../asia/asiaPhoto/13.JPG",
  "../asia/asiaPhoto/14.JPG",
  "../asia/asiaPhoto/15.JPG",
  "../asia/asiaPhoto/16.JPG",
  "../asia/asiaPhoto/17.JPG",
  "../asia/asiaPhoto/18.JPG",
  "../asia/asiaPhoto/19.JPG",
  "../asia/asiaPhoto/20.JPG",
  "../asia/asiaPhoto/21.JPG",
  "../asia/asiaPhoto/22.JPG",
  "../asia/asiaPhoto/23.JPG",
  "../asia/asiaPhoto/24.JPG",
  "../asia/asiaPhoto/25.JPG",
  "../asia/asiaPhoto/26.JPG",
  "../asia/asiaPhoto/27.JPG",
  "../asia/asiaPhoto/28.JPG",
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

/*function imgVerticale(imgIndex) {
  if (imgIndex == 3 || imgIndex == 11 || imgIndex == 29) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}*/

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
    /* imgVerticale(index);*/
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
