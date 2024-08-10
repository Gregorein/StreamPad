import { ReactNode } from "react"
import { SettingsItemComponentProps } from "."
import { useAtom } from "jotai"
import { ATOMS } from "utils/state"
import SettingsItem from "@renderer/components/SettingsItem"
import { Switch } from "@mui/joy"

const title = "Enable Web API?"
const description =
	"This option enables a webserver that exposes StreamPad's API. You'll be able to connect to it from your browser."

export const Component = ({ title, description }: SettingsItemComponentProps): ReactNode => {
	const [enabledWebApi, setEnabledWebApi] = useAtom(ATOMS.enabledWebApi)

	return (
		<SettingsItem
			title={title}
			description={description}
			onClick={() => setEnabledWebApi(!enabledWebApi)}
		>
			<Switch checked={enabledWebApi} endDecorator={enabledWebApi ? "Yes" : "No"} size="lg" />
		</SettingsItem>
	)
}

export default {
	title,
	description,
	Component
}
