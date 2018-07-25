const {app, Menu} = require('electron');
const {showMessage, showSaveDialog} = require('./dialogs');
const {mainWindow} = require('./index');

const isWindows = process.platform === 'win32';

function setMainMenu() {
    console.log('setMainMenu()');
    const template = [
        {
            label: isWindows ? 'File' : app.getName(),
            submenu: [
                {
                    label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
                    accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
                    click() {
                       app.quit();
                    }
                },
                {
                    label: 'Say Hello',
                    click() {
                        console.log('Before calling ... showMessage(mainWindow)');
                        showMessage(mainWindow);
                    }
                },
                {
                    label: 'Mem usage',
                    click() {
                        showSaveDialog(mainWindow);
                    }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}


module.exports = {
    setMainMenu
};