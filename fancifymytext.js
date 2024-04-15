function biggerFunction()	{
	document.getElementById("fancifyText").style.fontSize = "24px";
}

function changeStyle() {
	document.getElementById("fancifyText").style.fontWeight = 'bold';
	document.getElementById("fancifyText").style.color = "blue";
	document.getElementById("fancifyText").style.textDecoration = "underline";
}

function normalStyle() {
	document.getElementById("fancifyText").style.fontWeight = 'normal';
	document.getElementById("fancifyText").style.color = "black";
	document.getElementById("fancifyText").style.textDecoration = "none";
}

function mooText() {
	var originalText = document.getElementById("fancifyText").value;
	var uppertText = originalText.toUpperCase();
	var parts = uppertText.split(".");
	var newText = parts.join("-Moo.");
	document.getElementById("fancifyText").value = newText;
}
