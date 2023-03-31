# YAMI

> YAMI (short for **Y**et **A**nother **M**usic **I**ntegration) is a Utility which allows to show what Music you're playing in real-time using the VRChat OSC protocol.

# Abstract

YAMI is an utility which allows you to listen to your Music and let other players known what you are listening on real-time. Currently YAMI only supports `Youtube Music` but other platforms are planned as well, such as `Spotify`.

# Usage

To begin, ensure that you have the latest version of **nodeJS (18.15.0)** installed from the official [Node.js website](https://nodejs.org/en/download). Additionally, make sure to install **Tampermonkey** from their official [website](https://www.tampermonkey.net/).

Once you have installed these prerequisites, follow these steps:

1. Download this repository by either cloning it or downloading the ZIP file from GitHub. If you downloaded the ZIP file, be sure to extract its contents.

2. Install all the required dependencies by running the command `npm install` in the root directory of the project.

3. Start the project by running the command `npm run start`.

4. Once the project is running, open your web browser and create a new Tampermonkey script using its addon. Copy and paste the contents of `website/script.js` into the script.

5. Finally, go to Youtube Music and start playing any song. If you have OSC enabled, the song information should appear in your chatbox inside VRChat.

By following these steps, you should now have successfully installed the software.

# License

YAMI is licensed under the MIT license. Refer to the [LICENSE](https://github.com/lupiax/yami/blob/master/LICENSE) file.
