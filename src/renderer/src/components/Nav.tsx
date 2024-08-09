import {
	Box,
	ButtonGroup,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemContent,
	ListItemDecorator,
	ModalClose,
	Typography
} from "@mui/joy"

import {
	Check,
	Github,
	LogOut,
	Menu,
	Minus,
	PencilRuler,
	Settings,
	ToyBrick,
	X
} from "lucide-react"
import { ReactElement, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { EVENTS } from "shared/constants"

import packageJson from "../../../../package.json"
import Dialog from "components/Dialog"
import { ATOMS } from "../utils/state"
import { useAtom } from "jotai"

const { ipcRenderer } = window.electron

const Nav = (): ReactElement => {
	const [acknowledgedMinimizeWarning, setAcknowledgedMinimizeWarning] = useAtom(
		ATOMS.acknowledgedMinimizeWarning
	)
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)

	const location = useLocation()

	const handleMinimize = (): void => {
		ipcRenderer.send(EVENTS.WINDOW_MINIMIZE)
	}
	const handleClose = (): void => {
		setAcknowledgedMinimizeWarning(true)
		ipcRenderer.send(EVENTS.WINDOW_HIDE)
	}

	const handleQuit = (): void => {
		ipcRenderer.send(EVENTS.QUIT)
	}

	const handleGithub = (): void => {
		window.open("https://github.com/Gregorein/streampad", "_blank", "noopener,noreferrer")
	}

	const handleOpenDialogOrClose = (): void => {
		if (acknowledgedMinimizeWarning) {
			handleClose()
		} else {
			setDialogOpen(true)
		}
	}

	const navigation = [
		{
			name: "Settings",
			path: "/",
			icon: <Settings />
		},
		{
			name: "Plugins",
			path: "/plugins",
			icon: <ToyBrick />
		},
		{
			name: "Edit UI",
			path: "/editor",
			icon: <PencilRuler />
		}
	]

	return (
		<>
			<Drawer size="sm" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<ModalClose />

				<List
					sx={{
						display: "flex",
						flex: 1,
						justifyContent: "center",
						WebkitAppRegion: "no-drag"
					}}
				>
					{navigation.map((item) => (
						<ListItem key={item.name}>
							<ListItemButton
								component={Link}
								to={item.path}
								selected={location.pathname === item.path}
								color="primary"
								onClick={() => setDrawerOpen(false)}
							>
								<ListItemDecorator>{item.icon}</ListItemDecorator>
								<ListItemContent>{item.name}</ListItemContent>
							</ListItemButton>
						</ListItem>
					))}
				</List>

				<List
					sx={{
						display: "flex",
						flex: 0,
						WebkitAppRegion: "no-drag"
					}}
				>
					<Typography level="body-sm" sx={{ padding: 2 }}>
						StreamPad v.{packageJson.version}
					</Typography>
					<ListItem>
						<ListItemButton onClick={handleGithub}>
							<ListItemDecorator>
								<Github />
							</ListItemDecorator>
							<ListItemContent>StreamPad&apos;s GitHub</ListItemContent>
						</ListItemButton>
					</ListItem>

					<Divider />
					<ListItem>
						<ListItemButton onClick={handleQuit} color="danger">
							<ListItemDecorator>
								<LogOut />
							</ListItemDecorator>
							<ListItemContent>Quit</ListItemContent>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>

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
					alignItems: "center"
				}}
			>
				<ButtonGroup
					size="sm"
					variant="soft"
					sx={{
						flex: 1
					}}
				>
					<IconButton
						onClick={() => setDrawerOpen(true)}
						sx={{
							WebkitAppRegion: "no-drag"
						}}
					>
						<Menu />
					</IconButton>
				</ButtonGroup>

				<Typography
					sx={{
						WebkitUserSelect: "none", // Safari
						MozUserSelect: "none", // Firefox
						msUserSelect: "none", // IE10+
						userSelect: "none" // Standard
					}}
				>
					StreamPad
				</Typography>

				<ButtonGroup
					size="sm"
					variant="plain"
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						flex: 1
					}}
				>
					<IconButton
						onClick={handleMinimize}
						sx={{
							WebkitAppRegion: "no-drag"
						}}
					>
						<Minus />
					</IconButton>
					<IconButton
						onClick={handleOpenDialogOrClose}
						sx={{
							WebkitAppRegion: "no-drag"
						}}
					>
						<X />
					</IconButton>
				</ButtonGroup>
			</Box>

			{!acknowledgedMinimizeWarning && (
				<Dialog
					open={dialogOpen}
					title="This will not quit StreamPad"
					text="Closing this window using X icon will not quit StreamPad. Use `quit` option from context menu from tray icon or the collapsible instead."
					onCancel={() => setDialogOpen(false)}
					labelCancel="Cancel"
					onConfirm={handleClose}
					labelConfirm="I understand"
					iconConfirm={<Check />}
				/>
			)}
		</>
	)
}

export default Nav
