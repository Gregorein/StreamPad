import { Box, Button, ButtonGroup, IconButton, Typography } from "@mui/joy"

import { PanelBottom, PencilRuler, Settings, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { EVENTS } from "shared/constants"

const { ipcRenderer } = window.electron

const Nav = () => {
	const location = useLocation()

	const handleMinimize = () => {
		ipcRenderer.send(EVENTS.WINDOW_MINIMIZE)
	}
	const handleClose = () => {
		ipcRenderer.send(EVENTS.WINDOW_CLOSE)
	}

	return (
		<>
			<Box
				component="header"
				sx={{
					position: "fixed",
					top: 0,
					width: "100vw",
					padding: 1,

					WebkitAppRegion: "drag",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<ButtonGroup
					size="sm"
					variant="soft"
					sx={{
						flex: 1
					}}
				>
					<Button
						component={Link}
						startDecorator={<Settings />}
						to="/"
						color={location.pathname === "/" ? "primary" : "neutral"}
						sx={{
							WebkitAppRegion: "no-drag",
						}}
					>
						Settings
					</Button>
					<Button
						component={Link}
						startDecorator={<PencilRuler />}
						to="/editor"
						color={location.pathname === "/editor" ? "primary" : "neutral"}
						sx={{
							WebkitAppRegion: "no-drag",
						}}
					>
						Edit UI
					</Button>
				</ButtonGroup>

				<Typography sx={{
					WebkitUserSelect: 'none', // Safari
					MozUserSelect: 'none',    // Firefox
					msUserSelect: 'none',     // IE10+
					userSelect: 'none',       // Standard
				}}>
					StreamPad v.{"packageJson.version"} {EVENTS.WINDOW_MINIMIZE}
				</Typography>

				<ButtonGroup
					size="sm"
					variant="soft"
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						flex: 1,
					}}
				>
					<IconButton
						onClick={handleMinimize}
						sx={{
							WebkitAppRegion: "no-drag",
						}}
					>
						<PanelBottom />
					</IconButton>
					<IconButton
						onClick={handleClose}
						sx={{
							WebkitAppRegion: "no-drag",
						}}
					>
						<X />
					</IconButton>
				</ButtonGroup>
			</Box>
		</>
	)
}

export default Nav