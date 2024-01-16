/*var foto = new Array();
foto[0] = "../home/homePhoto/1.JPG";
foto[1] = "../home/homePhoto/2.JPG";
foto[2] = "../home/homePhoto/3.JPG";
foto[3] = "../home/homePhoto/4.JPG";
foto[4] = "../home/homePhoto/5.JPG";
foto[5] = "../home/homePhoto/6.JPG";
foto[6] = "../home/homePhoto/7.JPG";
foto[7] = "../home/homePhoto/8.JPG";
foto[8] = "../home/homePhoto/9.JPG";
foto[9] = "../home/homePhoto/10.JPG";
foto[10] = "../home/homePhoto/11.JPG";
foto[11] = "../home/homePhoto/12.JPG";
foto[12] = "../home/homePhoto/13.JPG";
foto[13] = "../home/homePhoto/14.JPG";
foto[14] = "../home/homePhoto/15.JPG";
foto[15] = "../home/homePhoto/16.JPG";
foto[16] = "../home/homePhoto/17.JPG";
foto[17] = "../home/homePhoto/18.JPG";
foto[18] = "../home/homePhoto/19.JPG";
foto[19] = "../home/homePhoto/20.JPG";
foto[20] = "../home/homePhoto/21.JPG";

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
}*/

/*AVANTI GALLERIA AUTO 4 SECONDI
let myInterval = setInterval(avantiArrow, 4000);
$(".arrow").click(function myStopFunction() {
  clearInterval(myInterval);
  regain();
});

function regain() {
  myInterval = setInterval(avantiArrow, 4000);
}*/

/*BOTTONE PORTFOLIO*/
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

/*EFFETTO SWIPE*/
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
