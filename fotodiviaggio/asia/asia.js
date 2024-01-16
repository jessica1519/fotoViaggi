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
  "../asia/asiaPhoto/1.jpg",
  "../asia/asiaPhoto/2.jpg",
  "../asia/asiaPhoto/3.jpg",
  "../asia/asiaPhoto/4.jpg",
  "../asia/asiaPhoto/5.jpg",
  "../asia/asiaPhoto/6.jpg",
  "../asia/asiaPhoto/7.jpg",
  "../asia/asiaPhoto/8.jpg",
  "../asia/asiaPhoto/9.jpg",
  "../asia/asiaPhoto/10.jpg",
  "../asia/asiaPhoto/11.jpg",
  "../asia/asiaPhoto/12.jpg",
  "../asia/asiaPhoto/13.jpg",
  "../asia/asiaPhoto/14.jpg",
  "../asia/asiaPhoto/15.jpg",
  "../asia/asiaPhoto/16.jpg",
  "../asia/asiaPhoto/17.jpg",
  "../asia/asiaPhoto/18.jpg",
  "../asia/asiaPhoto/19.jpg",
  "../asia/asiaPhoto/20.jpg",
  "../asia/asiaPhoto/21.jpg",
  "../asia/asiaPhoto/22.jpg",
  "../asia/asiaPhoto/23.jpg",
  "../asia/asiaPhoto/24.jpg",
  "../asia/asiaPhoto/25.jpg",
  "../asia/asiaPhoto/26.jpg",
  "../asia/asiaPhoto/27.jpg",
  "../asia/asiaPhoto/28.jpg",
];

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
  //imgVerticale(i);
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
  //imgVerticale(i);
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
