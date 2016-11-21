function allDescendants (node) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      allDescendants(child);
	  scrub(child);
    }
}

function htmlDescend() {
	var node = document.documentElement;
	allDescendants(node);
}

var ran = false;

var bad_words = ["crap", "heck"]; //leave this blank until later
var insults = ["screw you"]; // leave blank until later

function scrub(doc_elem) {
  
    for (var i = 0; i < bad_words.length; i++) {
		if (doc_elem.innerHTML == undefined) {
			doc_elem = JSON.stringify(doc_elem);
			if (doc_elem.toLowerCase().includes(bad_words[i])) {
				console.log("bad word found");
				var string = Array(bad_words[i].length + 1).join('*');
	    		var re = new RegExp(bad_words[i], 'gi');
            	doc_elem = doc_elem.replace(re, string);
			}
		} else if (doc_elem.innerHTML.toLowerCase().includes(bad_words[i])) {
            console.log("bad word found");
            var string = Array(bad_words[i].length + 1).join('*');
	    	var re = new RegExp(bad_words[i], 'gi');
            doc_elem.innerHTML = doc_elem.innerHTML.replace(re, string);
		}
    }
  
    for (var i = 0; i < insults.length; i++) {
        if (doc_elem.innerHTML == undefined) {
			doc_elem = JSON.stringify(doc_elem);
			if ( doc_elem.toLowerCase().includes(insults[i])) {
				var string = Array(insults[i].length + 1).join('*');
	    		var re = new RegExp(insults[i], 'gi');
            	doc_elem = doc_elem.replace(re, string);
			}
		} else if (doc_elem.innerHTML.toLowerCase().includes(insults[i])) {
            console.log("bad word found");
            var string = Array(insults[i].length + 1).join('*');
	    	var re = new RegExp(insults[i], 'gi');
            doc_elem.innerHTML = doc_elem.innerHTML.replace(re, string);
		}
    }
}

//setTimeout(htmlDescend, 1000);

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest) {
	if (request.message == "activate_deactivate") {
		if (request.state == "activate" && ran == false) {
			setTimeout(htmlDescend, 1000);
			ran = true;
		} else if (request.state == "deactivate"){
			location.reload();
		}
	} else if (request.message == "log") {
		console.log(request.state);
	}
});