function removeElementsByClassName(className) {
    var elements = document.getElementsByClassName(className);

    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

setInterval(function() {
    removeElementsByClassName('ytd-ad-slot-renderer');
    removeElementsByClassName('ytmusic-popup-container');
}, 1000);
