// ==UserScript==
// @name        Crunchyroll AirPlay
// @description Crunchyroll AirPlay
// @match       https://static.crunchyroll.com/vilos-v2/web/vilos/player.html
// @version     1.0
// @updateURL   https://raw.githubusercontent.com/Polyfish0/Crunchyroll-airplay/master/Crunchyroll-AirPlay.js
// ==/UserScript==
video = document.getElementsByTagName("video")[0];

const init = async () => {
    button = document.createElement("button");
    button.setAttribute("content", "AirPlay");
    button.innerText = "AirPlay";
    button.addEventListener("click", () => {
        video.webkitShowPlaybackTargetPicker();
    });
    
    document.getElementById("vilos").addEventListener("pointerenter", (event) => {
        document.getElementById("settingsControl").parentElement.append(button);
    });
    
    video.removeEventListener("play", init);
};

video.addEventListener("play", init);
