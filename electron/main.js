import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1700,
//     height: 1100,
//     alwaysOnTop: true,
//     frame: false,
//     transparent: true,
//     resizable: false,
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//   });

//   win.loadURL("http://localhost:5173");
// }

// app.whenReady().then(createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });

const { app, BrowserWindow } = require("electron");
const path = require("path");

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
