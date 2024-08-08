import { is } from "@electron-toolkit/utils"
import { BrowserWindow, shell } from "electron"
import { join } from "path"

export const createWindow = (): BrowserWindow => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1280,
		height: 800,
		show: false,
		frame: false,
		resizable: false,
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
