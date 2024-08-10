import { ReactNode } from "react"

import acknowledgedMinimizeWarning from "./acknowledgedMinimizeWarning"
import language from "./language"
import enabledWebApi from "./enabledWebApi"
import enabledCompanionApi from "./enabledCompanionApi"
import companionApiStatus from "./companionApiStatus"
import webApiStatus from "./webApiStatus"
import colorScheme from "./colorScheme"

export type SettingsItemComponentProps = {
	title?: string
	description?: string
}

type SettingsItems = {
	[key: string]: {
		title: string
		description?: string
		Component: (props: SettingsItemComponentProps) => ReactNode
	}[]
}

const settingsItems: SettingsItems = {
	General: [language, colorScheme],
	API: [enabledWebApi, webApiStatus, enabledCompanionApi, companionApiStatus],
	Other: [acknowledgedMinimizeWarning]
}

export default settingsItems
