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
			paddingTop: 2,
			paddingBottom: 2,
			paddingLeft: 8,
			paddingRight: 8,
			overflow: "hidden"
		}}
	>
		{children}
	</Box>
)

export default View
