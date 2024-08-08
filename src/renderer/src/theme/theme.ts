import { extendTheme } from "@mui/joy"

const theme = extendTheme({
	fontFamily: {
		body: "'Roboto', var(--joy-fontFamily-fallback)",
	}
})

export default theme