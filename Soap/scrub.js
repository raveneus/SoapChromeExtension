var bad_words = ["crap"] //leave this blank until later
var insults = ["screw you"] // leave blank until later

function scrub(doc_elem) {
  if (typeof doc_elem !== "string") {
    return;
  }
  for (int i = 0; i < bad_words.length; i++) {
    if (eval(doc_elem + ".toLowerCase().indexOf(bad_words[i])") !== -1) {
      eval(doc_elem + ".replace(bad_words[i], Array(bad_words[i].length + 1).join('*'))");
    }
  }
  
  for (int i = 0; i < bad_words.length; i++) {
    if (eval(doc_elem + ".toLowerCase().indexOf(insults[i])") !== -1) {
      eval(doc_elem + ".replace(insults[i], Array(insults[i].length + 1).join('*'))");
    }
  }
}

scrub("document.title");
