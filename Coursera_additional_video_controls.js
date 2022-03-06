// This is to add additonal playback controls to the coursera videos, primarly to go back a few seconds in order to 
// capture a screenshot for note taking

// TODO
// Turn this into a plugin that automatically loads when watching coursera videos - Currently using this plugin: https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk
// Posibly add a UI underneath the video
// Add additional controls?

document.addEventListener('keydown', (event) => {
    var time = 0;
    if(event.code == 'ArrowLeft') {
        time = -5;
    }
    else if(event.code == 'ArrowRight') {
        time = +5;
    }
    document.querySelector('video').currentTime + time;
});