import { Box, Typography } from "@mui/joy"
import { ReactNode } from "react"

type SettingsItemProps = {
	title: string
	description?: string
	children: ReactNode
	onClick?: () => void
}

const SettingsItem = ({ title, description, children, onClick }: SettingsItemProps): ReactNode => (
	<Box
		sx={{
			display: "flex",
			gap: 2,
			padding: 2,
			borderRadius: 4,
			"&:hover": {
				backgroundColor: "background.level1"
			},
			cursor: onClick ? "pointer" : "auto"
		}}
		onClick={onClick}
	>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
				gap: 1
			}}
		>
			<Typography level="title-lg" sx={{ flex: 1 }}>
				{title}
			</Typography>

			{description && (
				<Typography level="body-sm" sx={{ flex: 1 }}>
					{description}
				</Typography>
			)}
		</Box>

		<Box
			sx={{
				flex: 1,
				display: "flex",
				alignItems: "center"
			}}
		>
			{children}
		</Box>
	</Box>
)

export default SettingsItem
