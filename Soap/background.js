chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.browserAction.getTitle({}, function(result) {
		if (result == "Activate Soap") {
			chrome.browserAction.setTitle({title: "Deactivate Soap"});
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.sendMessage(tab.id, {message:"activate_deactivate", state:"activate"});
			});
		} else {
			chrome.browserAction.setTitle({title: "Activate Soap"});
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.sendMessage(tab.id, {message:"activate_deactivate", state:"deactivate"});
			});
		}
	})
});