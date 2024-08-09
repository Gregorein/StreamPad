import { ElectronAPI } from "@electron-toolkit/preload"

declare global {
	interface Window {
		electron: ElectronAPI
		api: {
			loadPreferences: () => unknown
			savePreferences: (data: unknown) => boolean
		}
	}
}
