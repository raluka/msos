// Handle Squirrel events for Windows immediately on start
if(require('electron-squirrel-startup')) return;

const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {autoUpdater} = electron;
const {ipcMain} = electron;
const autoUpdater = require('auto-updater');
const os = require('os');

const logger = require('winston');
logger.level = 'debug';
global.logger = logger;

// Keep reference of main window because of GC
var mainWindow = null;

var updateFeed = 'http://localhost:3000/updates/latest';
var isDevelopment = process.env.NODE_ENV === 'development';
var feedURL = "";

// Don't use auto-updater if we are in development
if (!isDevelopment) {
  // TODO: Add link to server_url/mac_updates/latest
  if (os.platform() === 'darwin') {
    updateFeed = 'http://localhost:3000/updates/latest';
  }
  // TODO: Add link to server_url/windows_updates/latest
  else if (os.platform() === 'win32') {
    updateFeed = 'http://localhost:3000/latest/win' + (os.arch() === 'x64' ? '64' : '32');
  }

  autoUpdater.addListener("update-available", function(event) {
    logger.debug("A new update is available");
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-available');
    }
  });
  autoUpdater.addListener("update-downloaded", function(event, releaseNotes, releaseName, releaseDate, updateURL) {
    logger.debug("A new update is ready to install", "Version ${releaseName} is downloaded and will be automatically installed on Quit");
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-downloaded');
    }
  });
  autoUpdater.addListener("error", function(error) {
    logger.error(error);
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-error');
    }
  });
  autoUpdater.addListener("checking-for-update", function(event) {
    logger.debug("Checking for update");
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'checking-for-update');
    }
  });
  autoUpdater.addListener("update-not-available", function() {
    logger.debug("Update not available");
    if (mainWindow) {
      mainWindow.webContents.send('update-message', 'update-not-available');
    }
  });

  const appVersion = require('./package.json').version;
  const feedURL = updateFeed + '?v=' + appVersion;
  autoUpdater.setFeedURL(feedURL);
}

// Quit when all windows are closed
app.on('window-all-closed', function() {
  app.quit();
});

// When application is ready, create application window
app.on('ready', function() {

  logger.debug("Starting application");

  // Create main window
  // Other options available at:
  // http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
  mainWindow = new BrowserWindow({
    name: "MSOS",
    width: 400,
    height: 600,
    toolbar: false
  });

  // Target HTML file which will be opened in window
  // TODO: Change here with index file from web app
  mainWindow.loadURL('file://' + __dirname + "/index.html");

  // Uncomment to use Chrome developer tools
  // mainWindow.webContents.openDevTools({detach:true});

  // Cleanup when window is closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  if (!isDevelopment) {
    mainWindow.webContents.on('did-frame-finish-load', function() {
      logger.debug("Checking for updates: " + feedURL);
      autoUpdater.checkForUpdates();
    });
  }

});
