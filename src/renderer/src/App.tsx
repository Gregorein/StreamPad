import { Sheet } from "@mui/joy"
import Nav from "components/Nav"
import { ReactNode } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ROUTES } from "shared/constants"
import Settings from "views/Settings"
import Plugins from "views/Plugins"
import Editor from "views/Editor"
const App = (): ReactNode => (
	<Sheet
		component="main"
		sx={{
			height: "100vh",
			width: "100vw",
			display: "flex",
			flexDirection: "column"
		}}
	>
		<Router>
			<Nav />
			<Routes>
				<Route path={ROUTES.SETTINGS} Component={Settings} />
				<Route path={ROUTES.PLUGINS} Component={Plugins} />
				<Route path={ROUTES.EDITOR} Component={Editor} />
			</Routes>
		</Router>
	</Sheet>
)

export default App
