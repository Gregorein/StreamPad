module.exports = {
	root: true,
	// env: {
	// 	browser: true,
	// 	// node: true,
	// 	es2024: true
	// },
	// parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
		// 	project: "tsconfig.json",
		// 	tsconfigRootDir: __dirname
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",

		// 	"plugin:react-hooks/recommended",

		// 	"plugin:@typescript-eslint/recommended-type-checked",
		// "plugin:@typescript-eslint/stylistic-type-checked",
		// "prettier"
		"@electron-toolkit/eslint-config-ts/recommended",
		"@electron-toolkit/eslint-config-prettier"
	],
	plugins: ["react", "@typescript-eslint", "react-refresh"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
	}
}
