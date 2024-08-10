import { Button, CircularProgress, Input } from "@mui/joy"
import SettingsItem from "@renderer/components/SettingsItem"
import { ReactNode } from "react"

const title = "Companion API Status"
export const Component = (): ReactNode => (
	<>
		<SettingsItem title={title} description={"web API url"}>
			<Input value="http://localhost:3000" />
		</SettingsItem>
		<SettingsItem description={"web API status"}>
			<Button variant="soft" disabled startDecorator={<CircularProgress thickness={4} />}>
				API server is not available
			</Button>
		</SettingsItem>
	</>
)

export default {
	title,
	Component
}
