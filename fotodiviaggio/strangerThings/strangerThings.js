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
  "../strangerThings/strangerThingsPhoto/1.JPG",
  "../strangerThings/strangerThingsPhoto/2.JPG",
  "../strangerThings/strangerThingsPhoto/3.JPG",
  "../strangerThings/strangerThingsPhoto/4.JPG",
  "../strangerThings/strangerThingsPhoto/5.JPG",
  "../strangerThings/strangerThingsPhoto/6.JPG",
  "../strangerThings/strangerThingsPhoto/7.JPG",
  "../strangerThings/strangerThingsPhoto/8.JPG",
  "../strangerThings/strangerThingsPhoto/9.JPG",
  "../strangerThings/strangerThingsPhoto/10.JPG",
  "../strangerThings/strangerThingsPhoto/11.JPG",
  "../strangerThings/strangerThingsPhoto/12.JPG",
  "../strangerThings/strangerThingsPhoto/13.JPG",
  "../strangerThings/strangerThingsPhoto/14.JPG",
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
  if (imgIndex == 2 || imgIndex == 9) {
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
