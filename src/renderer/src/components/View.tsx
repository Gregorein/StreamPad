import { Box, Typography } from "@mui/joy"
import { ReactElement } from "react"

interface ViewProps {
	children?: ReactElement
}

const View = ({ children }: ViewProps): ReactElement => (
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
