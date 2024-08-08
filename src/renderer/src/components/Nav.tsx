import {
	Box,
	Button,
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

import { Github, LogOut, Menu, Minus, PencilRuler, Settings, ToyBrick, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { EVENTS } from "shared/constants"

import packageJson from "../../../../package.json"

const { ipcRenderer } = window.electron

const Nav = () => {
	const [open, setOpen] = useState(false)

	const location = useLocation()

	const handleMinimize = () => {
		ipcRenderer.send(EVENTS.WINDOW_MINIMIZE)
	}
	const handleClose = () => {
		ipcRenderer.send(EVENTS.WINDOW_HIDE)
	}

	const handleQuit = () => {
		ipcRenderer.send(EVENTS.QUIT)
	}

	const handleGithub = () => {
		window.open("https://github.com/Gregorein/streampad", "_blank", "noopener,noreferrer")
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
			<Drawer size="sm" open={open} onClose={() => setOpen(false)}>
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
								onClick={() => setOpen(false)}
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
						onClick={() => setOpen(true)}
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
						onClick={handleClose}
						sx={{
							WebkitAppRegion: "no-drag"
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
