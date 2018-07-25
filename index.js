const {app, BrowserWindow} = require('electron');
const path = require('path');
const {setMainMenu} = require('./main-menu');

require('electron-debug')();

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 800,
        height: 600,
        webPreferences: {
            devTools: true
        },

        titleBarStyle: 'hiddenInset',
    });

    mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    console.log('Before calling ... setMainMenu()');

    setMainMenu();
});


