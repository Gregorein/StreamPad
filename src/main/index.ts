import { app, ipcMain } from "electron"
import { electronApp, optimizer } from "@electron-toolkit/utils"
// import icon from '../../assets/icon.png?asset'
import { EVENTS } from "shared/constants"
import { createWindow } from "./window"
import { createTray } from "./tray"

app
	.whenReady()
	.then(() => {
		electronApp.setAppUserModelId("com.electron")

		app.on("browser-window-created", (_, window) => {
			// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
			optimizer.watchWindowShortcuts(window)
		})

		const window = createWindow()
		const tray = createTray()

		// app.on('activate', function () {
		//   // On macOS it's common to re-create a window in the app when the
		//   // dock icon is clicked and there are no other windows open.
		//   if (BrowserWindow.getAllWindows().length === 0) createWindow()
		// })

		// app.on('window-all-closed', () => {
		//   if (process.platform !== 'darwin') {
		//     app.quit()
		//   }
		// })

		ipcMain.on(EVENTS.QUIT, () => {
			app.quit()
		})

		ipcMain.on(EVENTS.WINDOW_OPEN, () => {
			window.show()
		})

		ipcMain.on(EVENTS.WINDOW_HIDE, () => {
			window.hide()
		})

		ipcMain.on(EVENTS.WINDOW_MINIMIZE, () => {
			window.minimize()
		})
	})
	.catch((error) => console.error(error))
