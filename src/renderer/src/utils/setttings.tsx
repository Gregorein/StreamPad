import { useAtom } from "jotai"
import { ReactNode } from "react"
import { ATOMS } from "utils/state"
import SettingsItem from "components/SettingsItem"
import { Switch } from "@mui/joy"

type SettingsItemComponentProps = {
	title: string
	description?: string
}

type SettingsItem = {
	title: string
	description?: string
	Component: (props: SettingsItemComponentProps) => ReactNode
}

const settingsItems: SettingsItem[] = [
	{
		title: "Hide warning about quitting StreamPad?",
		description:
			"This option hides the warning dialog that is displayed when closing the window using `x` button for the first time.",
		Component: ({ title, description }: SettingsItemComponentProps): ReactNode => {
			const [acknowledgedMinimizeWarning, setAcknowledgedMinimizeWarning] = useAtom(
				ATOMS.acknowledgedMinimizeWarning
			)

			return (
				<SettingsItem
					title={title}
					description={description}
					onClick={() => setAcknowledgedMinimizeWarning(!acknowledgedMinimizeWarning)}
				>
					<Switch
						checked={acknowledgedMinimizeWarning}
						endDecorator={acknowledgedMinimizeWarning ? "Yes" : "No"}
						size="lg"
					/>
				</SettingsItem>
			)
		}
	}
]

export default settingsItems
