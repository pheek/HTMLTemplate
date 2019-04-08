// phi@gress.ly (first implementaion: April 2013)

// this script is loaded at the end in "js/dom/asyncLoader.js"

/**
 * Replace the following method by whatever is defined in
 * "js/registerHandlers.js".
 */
function doMy_template_Fct() {
	var n = readNumberFromFieldViaId("myInputField");
	outputIntoNewOrExistingParagraph("Result: " + (2*n), 'newOutputID');
}
