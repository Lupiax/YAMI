# YAMI

> YAMI (short for **Y**et **A**nother **M**usic **I**ntegration) is a Utility which allows to show what Music you're playing in _nearly_ real-time using the VRChat OSC protocol.

# Abstract

YAMI is an utility which allows you to listen to your Music and let other players known what you are listening on real-time. Currently YAMI only supports `Youtube Music` but other platforms are planned as well, such as `Spotify`.

# Usage

Make sure you have latest nodeJS (18.15.0) installed from https://nodejs.org/en/download and make sure to install Tampermonkey from https://www.tampermonkey.net/, now that's out of the way let's get into the actual installation process.

First download this repository either by cloning it or downloading the zip through Github, if you downloaded the .zip extract it as well.

Next we will install all the required depedencies by running `npm install` in the root directory of the project.

Now you can run `npm run start` and the project should start.

Now that we have it running we will go to our web browser and create a new tampermonkey script through it's addon and we paste the contents of `website/script.js` there.

Now you can go to Youtube Music and start playing any Music and it should show on your chatbox inside VRChat if you have OSC enabled.

# License

YAMI is licensed under the MIT license. Refer to the [LICENSE](https://github.com/lupiax/yami/blob/master/LICENSE) file.