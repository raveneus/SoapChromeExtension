var bad_words = ["crap"]; //leave this blank until later
var insults = ["screw you"]; // leave blank until later

function scrub(doc_elem) {
  
  for (var i = 0; i < bad_words.length; i++) {
    if (doc_elem.innerHTML.indexOf(bad_words[i]) !== -1) {
	  console.log("bad word found");
	  var string = Array(bad_words[i].length + 1).join('*');
	  var re = new RegExp(bad_words[i], 'gi');
      doc_elem = doc_elem.replace(re, string);
    }
  }
  
  for (var i = 0; i < insults.length; i++) {
    if (doc_elem.innerHTML.indexOf(insults[i]) !== -1) {
	  console.log("insult found");
	  var string = Array(insults[i].length + 1).join('*');
	  var re = new RegExp(insults[i], 'gi');
      doc_elem = doc_elem.replace(re, string);
    }
  }
}

function scrub_interact() {
  scrub("document.title");
  var elements = document.querySelectorAll("*");
  for (var i = 0; i < elements.length; i++) {
    scrub(elements[i]);
  }
}

setTimeout(scrub_interact, 1);
