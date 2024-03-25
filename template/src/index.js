const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
    })
    win.loadFile('src/index.html');
}

app.whenReady(). then(() => createWindow());
app.on('window-all-closed', () => app.quit());