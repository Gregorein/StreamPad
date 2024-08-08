import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { EVENTS } from "../src-react/utils/constants"

type TrayAppStatus = "default" | "error" | "running"

type TrayContextType = {
	status: TrayAppStatus,
	setStatus: (status: TrayAppStatus) => void
	addMenuItem: (id: string, text: string) => void
	removeMenuItem: (id: string) => void
	updateMenuItem: (id: string, text: string) => void
}

const TrayContext = createContext<TrayContextType | undefined>(undefined)

type MenuItem = {
	id: string
	text: string
}

type TrayProviderProps = {
	children: ReactNode
}

export const TrayProvider = ({ children }: TrayProviderProps) => {
	const [status, setStatus] = useState<TrayAppStatus>("default")
	const [menuItems, setMenuItems] = useState<MenuItem[]>([])

	useEffect(() => {
		os.setTray({
			icon: `/src/assets/trayIcon_${status}.png`,
			menuItems: [
				...menuItems,
				{ text: "-" },
				{ id: EVENTS.OPEN_MAIN_WINDOW, text: "Open main window..." },
				{ text: "-" },
				{ id: EVENTS.QUIT, text: "Quit" }
			],
		})
	}, [status, menuItems])

	return (
		<TrayContext.Provider value={{
			status,
			setStatus,
			addMenuItem: (id: string, text: string) => {
				setMenuItems([...menuItems, { id, text }])
			},
			removeMenuItem: (id: string) => {
				setMenuItems(menuItems.filter((item) => item.id !== id))
			},
			updateMenuItem: (id: string, text: string) => {
				setMenuItems(menuItems.map((item) => item.id === id ? { ...item, text } : item))
			}
		}}>
			{children}
		</TrayContext.Provider>
	)
}

export const useTray = () => {
	const context = useContext(TrayContext)

	if (!context) {
		throw new Error("useTray must be used within a TrayProvider")
	}

	return context
}
