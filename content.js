const container = document.getElementsByClassName("video-ads ytp-ad-module")[0];

const observer = new MutationObserver(() => {
    // get button skip element
    const skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    if(skipButton) {
        skipButton.click();
    }
    // get button close banner
    const closeBanner = document.getElementsByClassName("ytp-ad-overlay-close-button")[0];
    if(closeBanner) {
        closeBanner.click();
    }
});
observer.observe(container, {childList: true});