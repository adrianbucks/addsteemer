const {remote} = require('electron')
const {BrowserWindow} = remote
const win = BrowserWindow.getFocusedWindow()

window.onload = function () {
    document.getElementById('min').onclick = function () {
        win.minimize()
    }
    document.getElementById('max').onclick = function () {
        win.isMaximized() ? win.unmaximize() : win.maximize()
    }
    document.getElementById('exit').onclick = function () {
        win.close()
    }
}