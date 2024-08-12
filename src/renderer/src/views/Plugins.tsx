import { ReactNode, useState } from "react"
import View from "components/View"
import { Alert, Box, Typography } from "@mui/joy"
import SearchInput from "components/SearchInput"

const Plugins = (): ReactNode => {
	const [search, setSearch] = useState("")

	return (
		<View>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingBottom: 2
				}}
			>
				<Typography level="h2">Plugins</Typography>

				<SearchInput value={search} onChange={setSearch} placeholder="Search plugins..." />
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%"
				}}
			>
				<Alert color="danger" size="lg">
					No plugins found{/* for {`"${search}"`} */}
				</Alert>
			</Box>
		</View>
	)
}

export default Plugins
