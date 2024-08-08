import { app, shell, BrowserWindow, ipcMain } from "electron"
import { join } from "path"
import { electronApp, optimizer, is } from "@electron-toolkit/utils"
// import icon from '../../assets/icon.png?asset'
import { EVENTS } from "shared/constants"

const createWindow = (): BrowserWindow => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1280,
		height: 800,
		show: false,
		frame: false,
		autoHideMenuBar: true,
		icon: join(__dirname, "../../assets/icon.png"),
		webPreferences: {
			preload: join(__dirname, "../preload/index.js"),
			sandbox: false
		}
	})

	mainWindow.on("ready-to-show", () => {
		mainWindow.show()
	})

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url).catch((error) => console.error(error))
		return { action: "deny" }
	})

	if (is.dev && process.env.ELECTRON_RENDERER_URL) {
		mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL).catch((error) => console.error(error))
	} else {
		mainWindow
			.loadFile(join(__dirname, "../renderer/index.html"))
			.catch((error) => console.error(error))
	}

	return mainWindow
}

app
	.whenReady()
	.then(() => {
		electronApp.setAppUserModelId("com.electron")

		app.on("browser-window-created", (_, window) => {
			// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
			optimizer.watchWindowShortcuts(window)
		})

		const window = createWindow()

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

		ipcMain.on(EVENTS.WINDOW_CLOSE, () => {
			window.close()
		})
		ipcMain.on(EVENTS.WINDOW_MINIMIZE, () => {
			window.minimize()
		})
	})
	.catch((error) => console.error(error))
