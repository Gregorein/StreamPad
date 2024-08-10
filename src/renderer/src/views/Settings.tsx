import { ReactNode, useState } from "react"
import View from "components/View"
import { Alert, Box, IconButton, Input, Stack, Typography } from "@mui/joy"
import { X, Search } from "lucide-react"
import settingsItems from "utils/settings/index"

const Settings = (): ReactNode => {
	const [search, setSearch] = useState("")

	const settingsToRender = Object.entries(settingsItems).map(([title, settings]) => {
		const filteredSettings = settings.filter(
			({ title, description }) => title.includes(search) || description?.includes(search)
		)

		if (filteredSettings.length === 0) {
			return null
		}

		return (
			<Stack
				key={title}
				spacing={1}
				sx={{
					paddingTop: 2
				}}
			>
				<Typography level="h3">{title}</Typography>
				{filteredSettings.map(({ title, description, Component }) => (
					<Component key={title} title={title} description={description} />
				))}
			</Stack>
		)
	})

	const renderWarning = settingsToRender.filter((x) => x !== null).length === 0

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
				<Typography level="h2">Settings</Typography>

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

			{renderWarning ? (
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
			) : (
				<Box
					sx={(theme) => ({
						overflowY: "auto",
						"&::-webkit-scrollbar": {
							width: 12
						},
						"&::-webkit-scrollbar-track": {
							background: theme.palette.background.body,
							borderRadius: 4,
							backgroundClip: "content-box"
						},
						"&::-webkit-scrollbar-thumb": {
							background: theme.palette.background.level2,
							borderRadius: 4,

							"&:hover": {
								background: theme.palette.background.level3
							}
						}
					})}
				>
					{settingsToRender}
				</Box>
			)}
		</View>
	)
}

export default Settings
