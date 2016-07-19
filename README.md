# Start - first commit

## Running the App

Since an Electron app is just a fancy Node.js app, you will need to have `npm` installed. [`npm`](https://docs.npmjs.com/getting-started/what-is-npm) is the package manager for JavaScript, and it is installed as part of `node`:
- Install `node`:
```
brew install node
```
Install `wine` and `cask`:
```
brew install Caskroom/cask/xquartz
brew install wine
```
[`wine`](https://www.davidbaumgold.com/tutorials/wine-mac/) lets you run Windows apps without the Windows operating system

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

