import { createStore } from "jotai"
import atomWithPreferences from "./atomWithPreferences"

export const ATOMS = {
	acknowledgedMinimizeWarning: atomWithPreferences<boolean>("acknowledgedMinimizeWarning", false),
	language: atomWithPreferences<string>("language", "en")
}

const store = createStore()
store.set(ATOMS.acknowledgedMinimizeWarning, false)

export default store
