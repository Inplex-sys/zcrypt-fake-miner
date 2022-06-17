const { app,BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs');
const { exec } = require("child_process");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 725,
        height: 408,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('./static/index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})