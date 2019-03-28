function vanFunction(){
    
    
      alert("Do you like to eat?");
}
function myFunction() {
  var txt;
  if (confirm("Are you over 19? If so click ok")) {
    txt = "Have fun :D ";
  } else {
    txt = "You cannot drink!";
  }
  document.getElementById("drink").innerHTML = txt;
}

var slideIndex = 2;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function openWin() {
  window.open("https://learn.bcit.ca/d2l/home/516415");
}