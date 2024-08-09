import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "normalize.css"
import "theme/main.css"

import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"
import "@fontsource/roboto/100-italic.css"
import "@fontsource/roboto/300-italic.css"
import "@fontsource/roboto/400-italic.css"
import "@fontsource/roboto/500-italic.css"
import "@fontsource/roboto/700-italic.css"
import "@fontsource/roboto/900-italic.css"

import { CssVarsProvider } from "@mui/joy"
import theme from "theme/theme"
import { Provider as StateProvider } from "jotai"
import store from "./utils/state"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StateProvider store={store}>
			<CssVarsProvider defaultMode="dark" modeStorageKey="" theme={theme}>
				<App />
			</CssVarsProvider>
		</StateProvider>
	</React.StrictMode>
)
