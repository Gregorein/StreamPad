import { ipcMain, Menu, MenuItem, Tray } from "electron"
import { join } from "path"
import { EVENTS } from "shared/constants"

const defaultContextMenu: Partial<MenuItem>[] = [
	{
		label: "Open app...",
		click: (): void => {
			ipcMain.emit(EVENTS.WINDOW_OPEN)
		}
	},
	{ type: "separator" },
	{
		label: "Quit",
		click: (): void => {
			ipcMain.emit(EVENTS.QUIT)
		}
	}
]

interface ContextMenuType {
	webAPIaddress?: string
	webAPIRunning?: boolean
	companionAPIRunning?: boolean
}

export const setContextMenu = (
	tray: Tray,
	{ webAPIaddress, webAPIRunning, companionAPIRunning }: ContextMenuType
): void => {
	const menuItems: Partial<MenuItem>[] = []

	if (webAPIaddress) {
		menuItems.push({
			label: "Open web app",
			click: () => {
				ipcMain.emit(EVENTS.WEB_API_OPEN, webAPIaddress)
			}
		})
	}

	if (webAPIRunning == true) {
		menuItems.push({
			label: "Stop web app",
			click: () => {
				ipcMain.emit(EVENTS.WEB_API_STOP)
			}
		})
	} else if (webAPIRunning == false) {
		menuItems.push({
			label: "Start web app",
			click: () => {
				ipcMain.emit(EVENTS.WEB_API_START)
			}
		})
	}

	if (companionAPIRunning == true) {
		menuItems.push({
			label: "Stop companion app",
			click: () => {
				ipcMain.emit(EVENTS.COMPANION_API_STOP)
			}
		})
	} else if (companionAPIRunning == false) {
		menuItems.push({
			label: "Start companion app",
			click: () => {
				ipcMain.emit(EVENTS.COMPANION_API_START)
			}
		})
	}

	if (menuItems.length > 0) {
		menuItems.push({ type: "separator" })
	}

	const contextMenu = Menu.buildFromTemplate([...defaultContextMenu] as unknown as MenuItem[])
	tray.setContextMenu(contextMenu)
}

export const createTray = (): Tray => {
	const tray = new Tray(join(__dirname, "../../assets/trayIcon_default.png"))

	tray.setToolTip("StreamPad")
	setContextMenu(tray, {})

	tray.on("click", () => {
		tray.popUpContextMenu()
	})

	return tray
}

type TrayAppStatus = "default" | "error" | "running"
export const setTrayIcon = (tray: Tray, status: TrayAppStatus): void => {
	tray.setImage(join(__dirname, `../../assets/trayIcon_${status}.png`))
}
