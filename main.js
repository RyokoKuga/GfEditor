const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // ブラウザウィンドウを作成
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "GfEditor",
    // アプリ起動中のウィンドウアイコン（Dockとは別）
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // items/calculation/main.html をロード
  win.loadFile(path.join(__dirname, 'items/calculation/main.html'));

  // メニューバーを隠す場合
  // win.setMenuBarVisibility(false);
}

// Electronの準備が完了したら実行
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// すべてのウィンドウが閉じられたら終了（Mac以外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});