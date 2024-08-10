import { ReactNode } from "react"
import { SettingsItemComponentProps } from "."
import { useAtom } from "jotai"
import { ATOMS } from "utils/state"
import SettingsItem from "@renderer/components/SettingsItem"
import { Switch } from "@mui/joy"

const title = "Enable Companion API?"
const description =
	"This option enables a websocket API that allows a StreamPad Companion app to connect"

export const Component = ({ title, description }: SettingsItemComponentProps): ReactNode => {
	const [enabledCompanionApi, setEnabledCompanionApi] = useAtom(ATOMS.enabledCompanionApi)

	return (
		<>
			<SettingsItem
				title={title}
				description={description}
				onClick={() => setEnabledCompanionApi(!enabledCompanionApi)}
			>
				<Switch
					checked={enabledCompanionApi}
					endDecorator={enabledCompanionApi ? "Yes" : "No"}
					size="lg"
				/>
			</SettingsItem>
		</>
	)
}

export default {
	title,
	description,
	Component
}
