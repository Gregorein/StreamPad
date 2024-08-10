import { createStore } from "jotai"
import atomWithPreferences from "./atomWithPreferences"

const defaultAtomValues = {
	acknowledgedMinimizeWarning: false,
	language: "en",
	enabledWebApi: false,
	enabledCompanionApi: false
}

export const ATOMS = Object.fromEntries(
	Object.entries(defaultAtomValues).map(([key, value]) => [key, atomWithPreferences(key, value)])
)

const store = createStore()
Object.entries(ATOMS).forEach(([key, atom]) => {
	store.set(atom, defaultAtomValues[key])
})

export default store
