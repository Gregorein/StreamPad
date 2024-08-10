import { ReactNode, useState } from "react"
import View from "components/View"
import { Alert, Box, IconButton, Input, Typography } from "@mui/joy"
import { Search, X } from "lucide-react"

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

				<Input
					startDecorator={<Search />}
					endDecorator={
						search.length > 0 && (
							<IconButton variant="soft" color="danger" onClick={() => setSearch("")}>
								<X size={20} />
							</IconButton>
						)
					}
					placeholder="Search plugins..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
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
