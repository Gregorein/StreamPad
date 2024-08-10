import { ReactNode, useState } from "react"
import View from "components/View"
import { Alert, Box, Divider, IconButton, Input, Stack, Typography } from "@mui/joy"
import { X, Search } from "lucide-react"
import settingsItems from "utils/settings/index"

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
			<Stack
				spacing={2}
				divider={<Divider />}
				sx={{
					height: "100%"
				}}
			>
				{settingsItemsToRender.map(({ title, description, Component }) => (
					<Component key={title} title={title} description={description} />
				))}
				{settingsItemsToRender.length == 0 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%"
						}}
					>
						<Alert color="danger" size="lg">
							No settings found for {`"${search}"`}
						</Alert>
					</Box>
				)}
			</Stack>
		</View>
	)
}

export default Settings
