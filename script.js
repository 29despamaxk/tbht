const urlQueue = [];

const urlBox = document.getElementById("urlBox");
const iframe = document.getElementById("viewer");

const backButton = document.getElementById("backButton");
const iframeButton = document.getElementById("iframeButton");
const proxyButton = document.getElementById("proxyButton");
const youtubeButton = document.getElementById("youtubeButton");

function loadUrl(url) {
    iframe.src = url;
    urlQueue.push(url);
}

// Load a URL entered by the user
iframeButton.addEventListener("click", () => {
    const url = urlBox.value.trim();

    if (url.length > 0 && url.startsWith("http")) {
        loadUrl(url);
    }
});

// Load proxy site
proxyButton.addEventListener("click", () => {
    loadUrl("https://www.proxysite.com");
});

// Load YouTube frontend
youtubeButton.addEventListener("click", () => {
    loadUrl("https://piped.kavin.rocks/");
});

// Go backward
backButton.addEventListener("click", () => {
    if (urlQueue.length > 1) {
        urlQueue.pop();

        const previousUrl = urlQueue[urlQueue.length - 1];
        iframe.src = previousUrl;
    }
});

// Allow Enter to load the URL
urlBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        iframeButton.click();
    }
});
