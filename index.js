var electron = require('electron');
var app = electron.app;
//var app = require('app')
var BrowserWindow = electron.BrowserWindow;
app.on('ready',function(){
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html')
})