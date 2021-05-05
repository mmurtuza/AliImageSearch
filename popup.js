var domain;

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log("tab query starts");
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
    console.log(activeTab.id);
});
chrome.runtime.onMessage.addListener(function (msg, sender) {
    console.log(msg);
    if (msg.from == "content") {

        console.log(msg.url)
        if (msg.url === "undefined") {
            console.log(msg.url)
            document.getElementById('content').style.display = "block";

        } else {
            urlToHit = "https://aliimagesearch.com/image?imageData=" + msg.url + "";
            chrome.tabs.create({
                url: urlToHit,
            });
        }

    }
});