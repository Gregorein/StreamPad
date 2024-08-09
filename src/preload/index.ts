import { contextBridge, ipcRenderer } from "electron"
import { electronAPI } from "@electron-toolkit/preload"
import { EVENTS } from "shared/constants"

// Custom APIs for renderer
const api = {
	loadPreferences: (): void => {
		ipcRenderer.invoke(EVENTS.LOAD_STATE)
	},
	savePreferences: (state: unknown): void => {
		ipcRenderer.invoke(EVENTS.SAVE_STATE, state)
	}
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI)
		contextBridge.exposeInMainWorld("api", api)
	} catch (error) {
		console.error(error)
	}
} else {
	// @ts-ignore (define in dts)
	window.electron = electronAPI
	// @ts-ignore (define in dts)
	window.api = api
}
