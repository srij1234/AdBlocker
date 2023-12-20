var Google_ResultAd = document.getElementById("tvcap"),
    Google_ResultAdBottom = document.getElementById("bottomads"),
    DDG_ResultAd = document.getElementById("ads");
null != Google_ResultAd && 0 != Google_ResultAd.length && (Google_ResultAd.style.display = "none"), null != Google_ResultAdBottom && 0 != Google_ResultAdBottom.length && (Google_ResultAdBottom.style.display = "none"), null != DDG_ResultAd && 0 != DDG_ResultAd.length && (DDG_ResultAd.style.display = "none"), setInterval((function() {
    
    var e = document.getElementsByClassName("ytp-ad-skip-button");
    if (null != e && e.length > 0) {
        e[0].click();
        console.log("adblocked1");
    }
    var e1 = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button");
    if (null != e1 && e1.length > 0) {
        e1[0].click();
        console.log("adblocked2");
    }
    //new code
    const isAdPlaying = document.querySelector("div.ad-showing");
	
	const [skipButton] = document.getElementsByClassName("ytp-ad-skip-button");
	if (skipButton) {
		skipButton.click();
		console.log("adblocked3");
	}
	const [modernSkipButton] = document.getElementsByClassName("ytp-ad-skip-button-modern");
	if (modernSkipButton) {
		modernSkipButton.click();
		console.log("adblocked4");
	}
	const [videoElement] = document.getElementsByClassName("video-stream html5-main-video");
	if (videoElement && isAdPlaying) {
        try {
            videoElement.currentTime = videoElement.duration;
          } catch (error) {
            videoElement.currentTime = 10000;
          } 
        console.log("adblocked5");
    }
    //new code end
}), 10), window.addEventListener("load", (function() {
    setInterval((() => {
        var l = document.getElementById("player-ads"),
            t = document.getElementsByClassName("style-scope ytd-display-ad-renderer"),
            n = document.getElementsByClassName("style-scope ytd-promoted-sparkles-text-search-renderer"),
            r = document.getElementsByClassName("video-ads ytp-ad-module")[0];
        if (null != l && (l.style.display = "none"), null != t && 0 != t.length && (t[0].style.display = "none"), null != n && 0 != n.length)
            for (let e = 0; e < n.length; e++) n[e].style.display = "none";
        null != r && r.length > 0 && (r.style.display = "none");
        var o = document.getElementsByClassName("mrec-scrollable-cont"),
            d = document.getElementsByClassName("clmb_eoa");
        if (null != o && 0 != o.length || null != d && 0 != d.length) {
            for (let e = 0; e < o.length; e++) o[e].style.display = "none";
            for (let e = 0; e < d.length; e++) d[e].style.display = "none";
        }
        try {
        
            (document.querySelectorAll('[class*="advertisement"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[id*="advertisement"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class^="ads-"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class^="ads_"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class^="ad-"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class^="ad_"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class$="_ads"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class$="-ads"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class$="-ad"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class$="_ad"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[class*="adsbygoogle"]').forEach((e => {
                e.remove();
            })), document.querySelectorAll('[id*="adsbygoogle"]').forEach((e => {
                e.remove();
            })))        
        } catch (e) {}
    }), 1000)
}));