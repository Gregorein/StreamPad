import { Box, Typography } from "@mui/joy"
import { ReactNode } from "react"

interface ViewProps {
	children?: ReactNode
}

const View = ({ children }: ViewProps): ReactNode => (
	<Box
		sx={{
			display: "flex",
			flexDirection: "column",
			width: "100vw",
			height: "100vh",
			padding: 2,
			overflow: "hidden"
		}}
	>
		{children}
	</Box>
)

export default View
