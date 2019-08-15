window.onload = function() {
  setImageAttributes();
}
function normalimg(x) {
  x.style.height = "100px";

}
function bigImg(x) {
  x.style.height = "450px";

}
function setImageAttributes() {
  var pics = document.getElementsByClassName("pic");
  for(i = 0; i < pics.length; i++) {
    pics[i].setAttribute("onmouseover", "bigImg(this)");
    pics[i].setAttribute("onmouseout", "normalimg(this)");
  }
}

function  color(x) {
  x.element.style.color = "white";
}

// function flip() {
//   window.alert();
//   var pictures = document.getElementsByClassName("pic");
//   for(i = 0; i < pictures.length; i++) {
//
//   }
// }
