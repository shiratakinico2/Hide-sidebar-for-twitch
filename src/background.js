var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if(toggle){
        chrome.browserAction.setIcon({path: "hide-sidebar-twitch-48x48h.png", tabId:tab.id});    
        chrome.tabs.sendMessage(tab.id, "tabOff");
    }
    else{
        chrome.browserAction.setIcon({path: "hide-sidebar-twitch-48x48.png", tabId:tab.id});
        chrome.tabs.sendMessage(tab.id, "tabOn");
    }
});
