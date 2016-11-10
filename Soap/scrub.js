var bad_words = ["crap"] //leave this blank until later
var insults = ["screw you"] // leave blank until later

function scrub(doc_elem) {
  if (typeof doc_elem !== "string") {
    return;
  }
  
  for (var i = 0; i < bad_words.length; i++) {
    if (eval(doc_elem + ".toLowerCase().indexOf(bad_words[i])") !== -1) {
	    console.log("bad word found");
	    var string = Array(bad_words[i].length + 1).join('*');
	    var re = new RegExp(bad_words[i], 'gi');
      eval(doc_elem + " = " + doc_elem + ".replace(re, string)");
    }
  }
  
  for (var i = 0; i < insults.length; i++) {
    if (eval(doc_elem + ".toLowerCase().indexOf(insults[i])") !== -1) {
	    console.log("insult found");
	    var string = Array(insults[i].length + 1).join('*');
	    var re = new RegExp(insults[i], 'gi');
      eval(doc_elem + " = " + doc_elem + ".replace(re, string)");
    }
  }
}

scrub("document.title");
