var navLinks=document.getElementById("nav-links")
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
// Load Page    
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
// Page not available
function no() {
    alert("This is not available at the Moment");
  }