import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				"@main": resolve("src/main/src"),
				shared: resolve("src/shared")
			}
		}
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				"@preload": resolve("src/preload/src"),
				shared: resolve("src/shared")
			}
		}
	},
	renderer: {
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
				shared: resolve("src/shared"),
				components: resolve("src/renderer/src/components"),
				utils: resolve("src/renderer/src/utils"),
				assets: resolve("src/renderer/src/assets"),
				views: resolve("src/renderer/src/views"),
				theme: resolve("src/renderer/src/theme")
			}
		},
		plugins: [react()]
	}
})
