chrome.webNavigation.onCompleted.addListener(function(data) {
  chrome.tabs.executeScript(data.tabId, {file: "./content_script.js"});
});