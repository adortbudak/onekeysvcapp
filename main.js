/**
 * Created by adortbud on 8/19/2016.
 */

/*jshint esversion: 6 */

const electron = require('electron');
const app = electron.app;

const BrowserWindow  = electron.BrowserWindow;

var mainWindow = null;

app.on('ready',function () {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/src/client/index.html');

    mainWindow.openDevTools();
});


