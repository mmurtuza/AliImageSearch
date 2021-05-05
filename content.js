var urlToHit;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start") {
            console.log("on message");
            if (document.querySelector("[data-old-hires]") == null) {
                urlToHit = "undefined";
                domain = location.hostname;
                console.log("if undefined");
            } else {
                url = document.querySelector("[data-old-hires]").getAttribute("src");

                console.log(url);
                urlString = encodeURI(url);
                console.log(urlString);
                urlToHit = btoa(urlString);
                domain = location.hostname;

                console.log("on message" + urlToHit);

            }
            chrome.runtime.sendMessage({
                from: "content",
                url: urlToHit,
                domain: domain
            });
        }
    });