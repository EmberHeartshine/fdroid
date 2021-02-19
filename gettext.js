function getTextFromFile( file, element ) {
	var txtFile = new XMLHttpRequest();
	var allText = "";
	txtFile.open( "GET", file, true );
	txtFile.onreadystatechange = function () {
		if ( txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200 ) {
			allText = txtFile.responseText;
			document.getElementById( element ).innerHTML = 'Current version: ' + allText;
		}
	}
	txtFile.send();
}
function initializeBody() {
	getTextFromFile('/ver/uget.txt','uget');
	getTextFromFile('/ver/signal.txt','signal');
}
