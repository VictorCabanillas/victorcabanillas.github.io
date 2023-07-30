window.onscroll = function() { stickyNavbar() }; 
const navbar = document.getElementById("navigationBar"); 
const sticky = navbar.offsetTop+1; 
function stickyNavbar() 
{ 
if (window.pageYOffset >= sticky) 
{ 
navbar.classList.add("sticky"); 
} 
else 
{ 
navbar.classList.remove("sticky"); 
console.log("Removed sticky");
} 
}