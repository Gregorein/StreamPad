import { app, ipcMain } from "electron"
import { EVENTS } from "shared/constants"
import { join } from "path"
import { existsSync, readFileSync, writeFileSync } from "fs"
import { Preferences } from "shared/types"

const preferencesPath = join(app.getPath("userData"), "preferences.json")

const readPreferences = (): Preferences => {
	if (!existsSync(preferencesPath)) {
		return {}
	}

	try {
		const data = readFileSync(preferencesPath, "utf-8").toString()

		return JSON.parse(data) as Preferences
	} catch (error) {
		console.error(error)
		return {}
	}
}

const writePreferences = (data: unknown): void => {
	writeFileSync(preferencesPath, JSON.stringify(data, null, 2))
}

ipcMain.handle(EVENTS.LOAD_STATE, () => {
	return readPreferences()
})

ipcMain.handle(EVENTS.SAVE_STATE, (_, data: Preferences) => {
	const currentData = readPreferences()

	const newData = {
		...currentData,
		...data
	}

	writePreferences(newData)

	return true
})
