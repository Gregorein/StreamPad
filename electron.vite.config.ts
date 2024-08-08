import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	main: {
		resolve: {
			alias: {
				shared: resolve("src/shared")
			}
		},
		plugins: [externalizeDepsPlugin()]
	},
	preload: {
		resolve: {
			alias: {
				shared: resolve("src/shared")
			}
		},
		plugins: [externalizeDepsPlugin()]
	},
	renderer: {
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
				components: resolve("src/renderer/src/components"),
				utils: resolve("src/renderer/src/utils"),
				assets: resolve("src/renderer/src/assets"),
				views: resolve("src/renderer/src/views"),
				theme: resolve("src/renderer/src/theme"),
				shared: resolve("src/shared")
			}
		},
		plugins: [react()]
	}
})
