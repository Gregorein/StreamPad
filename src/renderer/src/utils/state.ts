import { atom, createStore, WritableAtom } from "jotai"
import { Preferences } from "shared/types"

const { savePreferences, loadPreferences } = window.api

type AtomWithPreferences<T> = WritableAtom<T, [T], void>
export const atomWithPreferences = <T>(key: string, initialValue: T): AtomWithPreferences<T> => {
	const preferences = loadPreferences() as Preferences
	const baseAtom = atom(preferences[key] || initialValue)

	const derivedAtom = atom(
		(get) => get(baseAtom),
		(_, set, newValue: T) => {
			set(baseAtom, newValue)

			const data = {
				[key]: newValue
			}
			savePreferences(data)
		}
	)

	return derivedAtom as unknown as AtomWithPreferences<T>
}

export const ATOMS = {
	acknowledgedMinimizeWarning: atomWithPreferences<boolean>("acknowledgedMinimizeWarning", false)
}

const store = createStore()
store.set(ATOMS.acknowledgedMinimizeWarning, false)

export default store
