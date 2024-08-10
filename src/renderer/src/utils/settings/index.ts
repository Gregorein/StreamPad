import { ReactNode } from "react"

import acknowledgedMinimizeWarning from "./acknowledgedMinimizeWarning"
import language from "./language"

export type SettingsItemComponentProps = {
	title: string
	description?: string
}

type SettingsItem = {
	title: string
	description?: string
	Component: (props: SettingsItemComponentProps) => ReactNode
}

const settingsItems: SettingsItem[] = [language, acknowledgedMinimizeWarning]

export default settingsItems
