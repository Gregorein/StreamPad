import { ReactNode, useEffect, useRef, useState } from "react"
import View from "components/View"
import { Box, Button, FormControl, FormLabel, Option, Input, Select, Typography } from "@mui/joy"
import { Grid2X2, Settings, MoveHorizontal, MoveVertical, Proportions } from "lucide-react"
import Dialog from "components/Dialog"

type ScreenRatio = "Adaptive" | "21:9" | "16:9" | "16:10" | "4:3" | "1:1"
const screenRatioOptions: Record<ScreenRatio, number | null> = {
	Adaptive: null,
	"21:9": 21 / 9,
	"16:9": 16 / 9,
	"16:10": 16 / 10,
	"4:3": 4 / 3,
	"1:1": 1 / 1
}

const Editor = (): ReactNode => {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [rows, setRows] = useState(4)
	const [columns, setColumns] = useState(8)
	const [ratio, setRatio] = useState<ScreenRatio>("Adaptive")
	const [height, setHeight] = useState("100%")
	const [width, setWidth] = useState("100%")

	const containerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (containerRef.current) {
			const aspectRatio = screenRatioOptions[ratio]

			if (!aspectRatio) {
				return
			}

			const { clientWidth, clientHeight } = containerRef.current

			console.log(aspectRatio)

			if (clientWidth / clientHeight > aspectRatio) {
				setWidth(`${clientHeight / aspectRatio}px`)
				setHeight("100%")
			} else {
				setWidth("100%")
				setHeight(`${clientWidth / aspectRatio}px`)
			}
		}
	}, [ratio])

	return (
		<>
			<Dialog
				open={dialogOpen}
				title="Update Layout"
				onConfirm={() => setDialogOpen(false)}
				labelConfirm="Update"
			>
				<FormControl>
					<FormLabel>
						<Grid2X2 /> Grid size
					</FormLabel>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1
						}}
					>
						<Input
							startDecorator={<MoveHorizontal />}
							slotProps={{ input: { type: "number", min: 1 } }}
							value={columns}
							onChange={(e) => setColumns(Number(e.target.value))}
						/>
						<Input
							startDecorator={<MoveVertical />}
							slotProps={{ input: { type: "number", min: 1 } }}
							value={rows}
							onChange={(e) => setRows(Number(e.target.value))}
						/>
					</Box>
				</FormControl>
				<FormControl>
					<FormLabel>
						<Proportions /> Aspect ratio
					</FormLabel>
					<Select
						value={ratio}
						placeholder="Select ratio"
						onChange={(_, value) => setRatio(value as ScreenRatio)}
					>
						{Object.keys(screenRatioOptions).map((label) => (
							<Option key={label} value={label}>
								{label}
							</Option>
						))}
					</Select>
				</FormControl>
			</Dialog>
			<View>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						paddingBottom: 2
					}}
				>
					<Typography level="h2">Editor</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							border: "1px solid",
							borderColor: "background.level2",
							borderRadius: 8,
							padding: 1
						}}
					>
						<Typography level="body-md" startDecorator={<Grid2X2 />}>
							{rows}x{columns}
						</Typography>
						<Typography level="body-md" startDecorator={<Proportions />}>
							{ratio}
						</Typography>
						<Button
							startDecorator={<Settings size={16} />}
							size="sm"
							variant="soft"
							onClick={() => setDialogOpen(true)}
						>
							update layout
						</Button>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						height: "100%",
						gap: 2
					}}
				>
					<Box
						ref={containerRef}
						sx={{
							display: "flex",
							flex: 3,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "background.body",
							borderRadius: 8
						}}
					>
						<Box
							sx={{
								border: "1px solid",
								borderColor: "background.level2",
								borderRadius: 8,
								objectFit: "contain",
								width,
								height
							}}
						>
							editor be here :{ratio}
						</Box>
					</Box>

					<Box
						sx={{
							border: "1px solid",
							borderColor: "background.level2",
							borderRadius: 8,
							flex: 1
						}}
					>
						aside be here
					</Box>
				</Box>
			</View>
		</>
	)
}

export default Editor
