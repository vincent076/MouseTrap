chrome.storage.local.get("count", function(data) {
    chrome.browserAction.setBadgeText({text: String(count)});          
    if(typeof data.count == "undefined") {
        // That's kind of bad
    } else {
        console.log(count);
    }
});

