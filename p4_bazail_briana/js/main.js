//New <p> element to the page below the button
var mlink = document.getElementById ("button1"),
    mdiv = document.getElementById("morediv");
mlink.addEventListener("click", function (event) {
    event.preventDefault () ;
    mdiv.style.display = (mdiv.style.display === "none") ? "block" : "none";
  }, false);
  mdiv.style.display = "none";


//Social icons expand 
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
