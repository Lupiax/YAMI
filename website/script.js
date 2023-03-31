// ==UserScript==
// @name         Youtube Music Status Reporter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This is used get the information of currently playing song and to send that through a websocket to OSC for VRChat
// @author       Lupiax
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @match        https://music.youtube.com/*
// ==/UserScript==

"use strict";

var socket = new WebSocket("ws://localhost:5040");

// if the WebSocket disconnects for some reason we will keep reconnecting til we have a connection.
socket.onclose = function (e) {
  var interval = setInterval(function () {
    socket = new WebSocket("ws://localhost:5040");
    if (socket.readyState === WebSocket.OPEN) {
      clearInterval(interval); // stop loop
    }
  }, 5000);
};

// get the player bar element if it is not visible we will not run any of our logic.
const player = document.getElementsByTagName("ytmusic-player-bar");

(function () {
  setInterval(function () {
    // if the element is on our screen and our socket is open let's progress.
    if (player && socket.readyState === WebSocket.OPEN) {
      // get the song name element
      const song_name = player[0]
        .getElementsByClassName("middle-controls style-scope ytmusic-player-bar")[0]
        .getElementsByTagName("yt-formatted-string")[0];

      // get the song creator element
      const song_creator = player[0]
        .getElementsByClassName("middle-controls style-scope ytmusic-player-bar")[0]
        .getElementsByClassName("byline-wrapper style-scope ytmusic-player-bar")[0]
        .getElementsByClassName("subtitle style-scope ytmusic-player-bar")[0]
        .getElementsByTagName("yt-formatted-string")[0];

      // get the song time elapsed element
      const song_time_elapsed = player[0].querySelector("#left-controls").querySelector("span");

      // make sure that our elements actually do exist.
      if (song_name && song_creator && song_time_elapsed) {
        // do some post processing for our strings and then send them through our websocket.
        const obj = {
          name: song_name.getAttribute("title"),
          time_elapsed: song_time_elapsed.innerHTML.replace(/\s+/g, " ").trim(),
          creator: song_creator.getAttribute("title").split(" • ")[0],
        };

        socket.send(JSON.stringify(obj));
      }
    }
  }, 2000);
})();