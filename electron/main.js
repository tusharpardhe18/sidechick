import { app, BrowserWindow } from "electron";

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 120,
    height: 40,
    x: 100, // position (optional)
    y: 100,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
});
