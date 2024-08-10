import { Button, DialogActions, DialogContent, DialogTitle, Modal, ModalDialog } from "@mui/joy"
import { ReactNode } from "react"

interface DialogProps {
	open: boolean
	title: string
	children: ReactNode
	onCancel?: () => void
	labelCancel?: string
	iconCancel?: ReactNode
	onConfirm?: () => void
	labelConfirm?: string
	iconConfirm?: ReactNode
}

const Dialog = ({
	open,
	title,
	children,
	onCancel,
	labelCancel,
	iconCancel = undefined,
	onConfirm,
	labelConfirm,
	iconConfirm = undefined
}: DialogProps): ReactNode => (
	<Modal
		open={open}
		onClose={onCancel}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<ModalDialog variant="plain">
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent
				id="alert-dialog-description"
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2
				}}
			>
				{children}
			</DialogContent>
			<DialogActions>
				{labelCancel && (
					<Button startDecorator={iconCancel} onClick={onCancel} color="danger">
						{labelCancel}
					</Button>
				)}
				{labelConfirm && (
					<Button startDecorator={iconConfirm} onClick={onConfirm} color="success">
						{labelConfirm}
					</Button>
				)}
			</DialogActions>
		</ModalDialog>
	</Modal>
)

export default Dialog
