var activated = false;

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.browserAction.getTitle({}, function(result) {
		if (result == "Activate Soap") {
			chrome.browserAction.setTitle({title: "Deactivate Soap"});
			activated = true;
			/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.sendMessage(tab.id, {message:"activate_deactivate", state:"activate"});
			});*/
			window.setInterval(send, 700);
		} else {
			chrome.browserAction.setTitle({title: "Activate Soap"});
			activated = false;
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.sendMessage(tab.id, {message:"activate_deactivate", state:"deactivate"});
			});
		}
	})
});

function send() {
	if (activated != true){ return; }
	console.log("sending");
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tab = tabs[0];
		chrome.tabs.sendMessage(tab.id, {message:"activate_deactivate", state:"activate"});
	});
}

