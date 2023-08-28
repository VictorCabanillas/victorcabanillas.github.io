window.onscroll = function () { stickyNavbar() };
window.onload = function () { stickyNavbar() };
const navbar = document.getElementById("navigationBar");
const sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
        console.log("Removed sticky");
    }
}