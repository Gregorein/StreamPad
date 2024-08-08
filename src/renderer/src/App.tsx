import { Sheet } from "@mui/joy"
import Nav from "components/Nav"
import View from "components/View"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
const App = () => (
	<Sheet
		component="main"
		sx={{
			height: "100vh",
			width: "100vw",
			display: "flex"
		}}
	>
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<View>Hello World 👋</View>} />
				<Route path="/editor" element={<View>editor</View>} />
			</Routes>
		</Router>
	</Sheet>
)

export default App
