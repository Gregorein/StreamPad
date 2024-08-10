import { Button, ToggleButtonGroup, useColorScheme } from "@mui/joy"
import SettingsItem from "components/SettingsItem"
import { Moon, Sun } from "lucide-react"
import { SettingsItemComponentProps } from "."
import { ReactNode } from "react"

const title = "UI Mode"
const description = "Set the UI mode between light and dark."

export const Component = ({ title, description }: SettingsItemComponentProps): ReactNode => {
	const { mode, setMode } = useColorScheme()

	return (
		<SettingsItem title={title} description={description}>
			<ToggleButtonGroup value={mode} variant="plain">
				<Button
					value="light"
					startDecorator={<Sun />}
					onClick={() => setMode("light")}
					color={mode === "light" ? "primary" : undefined}
				>
					Light
				</Button>
				<Button
					value="dark"
					startDecorator={<Moon />}
					onClick={() => setMode("dark")}
					color={mode === "dark" ? "primary" : undefined}
				>
					Dark
				</Button>
			</ToggleButtonGroup>
		</SettingsItem>
	)
}

export default {
	title,
	description,
	Component
}
