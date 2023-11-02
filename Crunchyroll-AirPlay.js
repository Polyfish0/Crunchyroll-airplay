// ==UserScript==
// @name        Crunchyroll AirPlay
// @description Addes the AirPlay button to the Crunchyroll video player
// @match       https://static.crunchyroll.com/vilos-v2/web/vilos/player.html
// @version     1.1
// @updateURL   https://raw.githubusercontent.com/Polyfish0/Crunchyroll-airplay/master/Crunchyroll-AirPlay.js
// ==/UserScript==
video = document.getElementsByTagName("video")[0];

const init = async () => {
    button = document.createElement("button");
    button.innerText = "AirPlay";
    button.addEventListener("click", () => {
        video.webkitShowPlaybackTargetPicker();
        
        setTimeout(() => {
            if(video.paused) {
                video.play();
            }else {
                video.pause();
            }
        }, 10);
    });
    
    document.getElementById("vilos").addEventListener("pointerenter", (event) => {
        document.getElementById("settingsControl").parentElement.append(button);
    });
    
    video.removeEventListener("play", init);
};

video.addEventListener("play", init);
