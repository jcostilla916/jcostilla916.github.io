/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
	
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
	  
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

	
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

function encryptText() {
	var originalText = document.getElementById("input-text").value;
	originalText = originalText.toLowerCase();
	let newText = "";
	
	for (let i = 0; i < originalText.length; i++) {
		if (originalText[i] < 'a' || originalText[i] > 'z') {
		newText += originalText[i];
		} else if (originalText[i] == 'z') {
		newText += 'a';
		} else { // letter is between 'a' and 'y'
		let letter = originalText.charCodeAt(i);
		let resultLetter = String.fromCharCode(letter + 1);
		newText += resultLetter;
		}
	}
	
	document.getElementById("result").innerText = newText;
}

function handleReset() {
	document.getElementById("input-text").value = "";
}