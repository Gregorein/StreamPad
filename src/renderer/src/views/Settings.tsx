import { ReactNode, useState } from "react"
import View from "components/View"
import { Box, Divider, IconButton, Input, Stack, Switch, Typography } from "@mui/joy"
import { X, Search } from "lucide-react"
import { ATOMS } from "utils/state"
import { useAtom } from "jotai"
import SettingsItem from "components/SettingsItem"

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

const Settings = (): ReactNode => {
	const [search, setSearch] = useState("")

	console.log({ search })

	const settingsItemsToRender = settingsItems.filter(
		({ title, description }) => title.includes(search) || description?.includes(search)
	)

	return (
		<View>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingBottom: 2
				}}
			>
				<Typography>Settings</Typography>

				<Input
					startDecorator={<Search />}
					endDecorator={
						search.length > 0 && (
							<IconButton variant="soft" color="danger" onClick={() => setSearch("")}>
								<X size={20} />
							</IconButton>
						)
					}
					placeholder="Search settings..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</Box>
			<Stack spacing={2} divider={<Divider />}>
				{settingsItemsToRender.map(({ title, description, Component }) => (
					<Component key={title} title={title} description={description} />
				))}
			</Stack>
		</View>
	)
}

export default Settings
