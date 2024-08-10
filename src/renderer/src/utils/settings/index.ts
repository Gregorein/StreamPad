import { ReactNode } from "react"

import acknowledgedMinimizeWarning from "./acknowledgedMinimizeWarning"

export type SettingsItemComponentProps = {
	title: string
	description?: string
}

type SettingsItem = {
	title: string
	description?: string
	Component: (props: SettingsItemComponentProps) => ReactNode
}

const settingsItems: SettingsItem[] = [acknowledgedMinimizeWarning]

export default settingsItems
