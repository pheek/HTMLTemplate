// 16. 3. 2011
// Author: Philipp Gressly Freimann

// Shows how to separate business logic from handlers from Document.
// Notice that there are ABSOLUTELY NO handlers registered in the
// main xhtml-Document! (Idea Victor Ruch, Timon Waldvogel: Siemens)
//
// Notice also, that there are no Business functions declared in here.
//              Those are declared in "js/meineFunktionen"
///////////// H A N D L E R S ///////////////////                                         

/**
 * @param ID       XML-ID of the TAG
 * @param EVENT    onkeyup, onclick, on... (any HTML Event Handler)
 * @param FUNCTION the function to be executed when the Handler is activated
 */

registerHandler("eingabeFeld", "onkeyup", "rechnen");
registerHandler("runButton",   "onclick", "rechnen");

