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
function registerHandlers() {
  //              ID        EVENT      FUNCTION(business functions)
  registerHandler("r2",     "onkeyup", "rechnen");
  registerHandler("calc",   "onclick", "rechnen");
}

/////////////////////////////////////////////////


function registerHandler(id, event, fct) {
    var IDEle = document.getElementById(id);
    IDEle.setAttribute(event, fct + "();");
}

// Main entry point: Notice that this is the only call outside a function.
window.onload = function() {
    loadScript("js/dom/domHelper");
    loadScript("js/meineFunktionen");
    registerHandlers();
};

/////////////////////////////////////////////////
function loadScript(name) {
  var firstScript = document.getElementsByTagName("script")[0];
  var bScript     = createScriptTag(name);
  firstScript.parentNode.insertBefore(bScript, firstScript);
}

function createTagNS(type) {
  var tag;
  var ns = "http://www.w3.org/1999/xhtml";
  if(document.createElementNS) { // firefox knows ElementNS
    tag = document.createElementNS(ns, type);
  } else {
    tag = document.createElement(type);
  }
  return tag;
}

function createScriptTag(name) {
    var scriptTag;
    scriptTag = createTagNS("script");
    scriptTag.async = true;
    scriptTag.setAttribute("type", "text\/javascript");
    scriptTag.setAttribute("src" , name + ".js");
    return scriptTag;
}
