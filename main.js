// electronモジュール読み込み
// appインスタンスとBrowserWindowクラスを取り出す
const { app, BrowserWindow } = require('electron');
let win;
function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(`file://${__dirname}/index.html`);
    win.on("closed", () => { win = null; });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  // macOS以外は明示的にアプリケーションを終了する
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// macOSでドックからクリックして戻ってきたとき、Windowを再表示
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});