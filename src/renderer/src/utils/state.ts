import { createStore } from "jotai"
import atomWithPreferences from "./atomWithPreferences"

export const ATOMS = {
	acknowledgedMinimizeWarning: atomWithPreferences<boolean>("acknowledgedMinimizeWarning", false),
	language: atomWithPreferences<string>("language", "en"),
	enabledWebApi: atomWithPreferences<boolean>("enabledWebApi", false),
	enabledCompanionApi: atomWithPreferences<boolean>("enabledCompanionApi", false)
}

const store = createStore()
store.set(ATOMS.acknowledgedMinimizeWarning, false)
store.set(ATOMS.language, "en")
store.set(ATOMS.enabledWebApi, false)
store.set(ATOMS.enabledCompanionApi, false)

export default store
