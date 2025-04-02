document.addEventListener("DOMContentLoaded", function() {
	//https://jakearchibald.com/2013/animated-line-drawing-svg/
  var path = document.querySelector("#home .hero svg path");
  
  // Check if the path element exists before running the rest of the code
  if (path) {
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = "none";
    // Set up the starting positions
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 4s ease-in-out";
    // Go!
    path.style.strokeDashoffset = "0";
  } else {
    console.log("No SVG path found on this page, skipping animation.");
  }
});