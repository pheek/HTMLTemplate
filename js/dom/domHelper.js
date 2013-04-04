// 2011 März 24
// Philipp Gressly Freimann

// DOM Hilfsfunktionen zum Lesen aus Formularfeldern und
//     zum Schreiben direkt in Paragraphen

// A) Lesen
//*********

function readNumberFromFieldViaId(id) {
  var str = readStringFromFieldViaId(id);
  if(null != str && str.length > 0) {
    return +str;
  } else {
    return 0.0;
  }
}

function readStringFromFieldViaId(id) {
  var feld;
  feld = document.getElementById(id);
  if(feld) {
      return feld.value;
  } else {
      return null;
  }
}

// B) Schreiben
// ************
/**
 * Set the (first) Text child [in the tag <tag id="tagID">]
 * to the given text.
 */

function setFirstTextChild(tagID, text) { 
  var oldTag   = document.getElementById(tagID);
  var txtnode  = document.createTextNode(text);
  if(oldTag.firstChild) {
    oldTag.replaceChild(txtnode, oldTag.firstChild);
   } 
  else {
    oldTag.appendChild(txtnode);
   }
}

/**
 * Append Tag to existingTag
 */
function addNewTagToExistingTag(existingTagID, newTagID, newTagType, newTagTextContent) {
  var oldTag = document.getElementById(existingTagID);
  var newTag = makeTextTag(newTagType, newTagID, newTagTextContent);
  oldTag.parentNode.appendChild(newTag);
}

/**
 * Replace a Tag <tag id="tagID"> with a new <tag>
 * containing a given value (text).
 * The new Tag will have the same type (nodeName) as the given tag.
 */
function replaceTag(tagID, text) {
  var oldTag     = document.getElementById(tagID);
  var tagType    = oldTag.nodeName;
  var parentNode = oldTag.parentNode;
  var newTag     = makeTextTag(tagType, tagID, text);
  parentNode.replaceChild(newTag, oldTag); }

/*
   Obige Funktion ist (Falls das Element nicht leer ist) äquivalent zu:
     document.getElementById(tagID).innerHTML = text;
 */

/**
 * Helper function to generate a new tag containing given text.
 */
function makeTextTag(type, tagID, text) {
  var newTag;
  newTag = createTagNS(type);
  var txtnode  = document.createTextNode(text);
  newTag.setAttribute("id", tagID);
  newTag.appendChild(txtnode); 
  return newTag; 
}
