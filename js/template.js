// phi@gress.ly April 2013

function doMytemplateFct() {
    var n = readNumberFromFieldViaId("myInputField");
    outputIntoNewOrExistingParagraph("Result: " + (2*n), 'newOutputID');
}
