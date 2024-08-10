import { ReactNode, useState } from "react"
import { SettingsItemComponentProps } from "."
import { useAtom } from "jotai"
import { ATOMS } from "utils/state"
import SettingsItem from "@renderer/components/SettingsItem"
import { Option, Select } from "@mui/joy"
import { LANGUAGES } from "shared/constants"

const title = "Application language"
const description = "Select the language of the application."

export const Component = ({ title, description }: SettingsItemComponentProps): ReactNode => {
	const [language, setLanguage] = useAtom(ATOMS.language)

	const [open, setOpen] = useState(false)

	const setLanguageValue = (event): void => {
		const newLanguage = event.target.value
		// setLanguage(newLanguage)
	}

	return (
		<SettingsItem title={title} description={description} onClick={() => setOpen(!open)}>
			<Select
				disabled
				listboxOpen={open}
				onListboxOpenChange={() => setOpen(true)}
				defaultValue={language}
				value={language}
				onChange={setLanguageValue}
			>
				{Object.entries(LANGUAGES).map(([value, key]) => (
					<Option key={key} value={key}>
						{value}
					</Option>
				))}
			</Select>
		</SettingsItem>
	)
}

export default {
	title,
	description,
	Component
}
