const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const fs = require('fs');
const url = require('url');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false // Disable web security for local file access
    },
    icon: path.join(__dirname, 'public', 'icon-512x512.png'),
    show: false
  });

  // Load the app
  const startUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : `file://${__dirname}/dist/index.html`;

  mainWindow.loadURL(startUrl);

  // Open DevTools for debugging (remove in production)
  // mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Create window when Electron is ready
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});