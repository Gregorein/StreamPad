import { Box, Typography } from "@mui/joy"
import { ReactNode } from "react"

interface ViewProps {
	children?: ReactNode
}

const View = ({ children }: ViewProps) => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh"
		}}
	>
		<Typography>{children}</Typography>
	</Box>
)

export default View
