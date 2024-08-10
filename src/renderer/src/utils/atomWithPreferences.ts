import { Preferences } from "shared/types"
import { atom, WritableAtom } from "jotai"

const { savePreferences, loadPreferences } = window.api

type AtomWithPreferences<T> = WritableAtom<T, [T], void>
const atomWithPreferences = <T>(key: string, initialValue: T): AtomWithPreferences<T> => {
	const preferences = (loadPreferences() as Preferences) || {}

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

export default atomWithPreferences
