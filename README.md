# Start - first commit

To try Electron for the first time, I followed this [tutorial](http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/).
## Running the App

### Development pre-requirements:

Since an Electron app is just a fancy Node.js app, you will need to have `npm` installed. [`npm`](https://docs.npmjs.com/getting-started/what-is-npm) is the package manager for JavaScript, and it is installed as part of `node`:
- Install `node`:
```
brew install node
```
Install `wine` and `Xquartz`:
```
brew install Caskroom/cask/xquartz
brew install wine
```
[`Wine`](https://www.davidbaumgold.com/tutorials/wine-mac/) lets you run Windows apps without the Windows operating system.
[`Xquartz`](https://en.wikipedia.org/wiki/XQuartz) is an open source version of X Window System for Mac OS (a standard framework for creating applications with a graphical user interface on Unix-like operating systems).

In case you fails to install `wine`, try install it without dependencies:
```
brew install --ignore-dependencies wine
```
and then install each dependency one at a time `brew install {dependency}`. The dependencies you may have to install manually are:
```
libusb-compat, fontconfig, libtiff, webp, gd, libgphoto2, little-cms2, jasper, libicns, makedepend, openssl, sane-backends, libtasn1, and gnutls
```
---

Once you’ve got that covered, open a new cmd or terminal in the directory with the extracted files and run this command:
```
npm install
```
This will create a **node_modules** folder containing all the Node.js dependencies required for the app to work. Everything should be good to go now, in the same terminal as before enter the following:
```
npm start
```
The app should open up in it’s own window. You’ve probably noticed that starting the app isn’t too user friendly. However, this is just the developer’s way of running an Electron app. When packaged for the public, the it will be installed like a normal program and opened like one, just by double clicking on its icon.

## Packaging and Distribution

In oder to do that, I followed this [tutorial](http://electron.rocks/electron-builder-explained/).
Install [`electron-builder`](https://www.npmjs.com/package/electron-builder):
```
npm install electron-builder --save-dev
```
In order to generate packages, run this command in `/app/node_modules/.bin` folder:
```
npm run dist
```

All of your generated packages are available in `dist` folder. Although this will generate you files which you can install on Windows and OS X, we need to add some code to our app to integrate fetching and installing automatic updates.

## Set auto-updates
See prerelease - v0.0.2 for code.

One extra thing you'll need to do is sign your application. You don't need to do it, but if you don't sign it, auto-updating mechanism won't work.
You can create your own certificate for testing purposes by Keychain Access.
TODO: Add how to create certificate info

After you have this certificate, in your app directory, run:
```
export CSC_NAME="Certificate Name"
```

Electron is using Squirrel.Mac to auto-update your application. Auto-updating with Squirrel consists of two parts: requesting Squirrel package from your application and serving it on server.
I followed [this](http://electron.rocks/publishing-for-os-x/) tutorial to set `auto-updater`

Squirrel for Mac is expecting server to respond with 200 in JSON format if update is needed, or with 204 if app doesn't need to update.

Next step is to generate versioned packages again from /app/node_modules/.bin folder:
````
npm run dist
````
