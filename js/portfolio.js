'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log(":))))");
}

$(".img-thumbnail").click(projectClick);
$(".navbar-brand").click(projectClick);

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#E8B4A2")
}