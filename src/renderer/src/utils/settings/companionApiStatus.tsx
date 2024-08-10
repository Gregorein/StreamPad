import { Button, CircularProgress, Input } from "@mui/joy"
import SettingsItem from "@renderer/components/SettingsItem"
import { ReactNode } from "react"

const title = "Companion API Status"
export const Component = (): ReactNode => (
	<>
		<SettingsItem description={"companion API status"}>
			<Button variant="soft" disabled startDecorator={<CircularProgress thickness={4} />}>
				API is not available
			</Button>
		</SettingsItem>
	</>
)

export default {
	title,
	Component
}
